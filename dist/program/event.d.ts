import { PublicKey } from "@solana/web3.js";
import Coder from "../coder";
import { Idl } from "../idl";
export declare type Event = {
    name: string;
    data: Object;
};
export declare class EventParser {
    private coder;
    private programId;
    private discriminators;
    constructor(coder: Coder, programId: PublicKey, idl: Idl);
    parseLogs(logs: string[], callback: (log: Event) => void): void;
    private handleLog;
    private handleProgramLog;
    private handleSystemLog;
}
//# sourceMappingURL=event.d.ts.map