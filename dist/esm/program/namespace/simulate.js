import { translateError } from "../common";
import { splitArgsAndCtx } from "../context";
import { EventParser } from "../event";
export default class SimulateFactory {
    // Builds the rpc namespace.
    static build(idlIx, txFn, idlErrors, provider, coder, programId, idl) {
        const simulate = async (...args) => {
            const tx = txFn(...args);
            const [, ctx] = splitArgsAndCtx(idlIx, [...args]);
            let resp = undefined;
            try {
                resp = await provider.simulate(tx, ctx.signers, ctx.options);
            }
            catch (err) {
                console.log("Translating error", err);
                let translatedErr = translateError(idlErrors, err);
                if (translatedErr === null) {
                    throw err;
                }
                throw translatedErr;
            }
            if (resp === undefined) {
                throw new Error("Unable to simulate transaction");
            }
            if (resp.value.err) {
                throw new Error(`Simulate error: ${resp.value.err.toString()}`);
            }
            const logs = resp.value.logs;
            if (!logs) {
                throw new Error("Simulated logs not found");
            }
            const events = [];
            if (idl.events) {
                let parser = new EventParser(coder, programId);
                parser.parseLogs(logs, (event) => {
                    events.push(event);
                });
            }
            return { events, raw: logs };
        };
        return simulate;
    }
}
//# sourceMappingURL=simulate.js.map