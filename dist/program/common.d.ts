import EventEmitter from "eventemitter3";
import { Idl, IdlInstruction, IdlAccountItem, IdlStateMethod } from "../idl";
import { Accounts } from "./context";
export declare type Subscription = {
    listener: number;
    ee: EventEmitter;
};
export declare function parseIdlErrors(idl: Idl): Map<number, string>;
export declare function toInstruction(idlIx: IdlInstruction | IdlStateMethod, ...args: any[]): {
    [key: string]: any;
};
export declare function validateAccounts(ixAccounts: IdlAccountItem[], accounts: Accounts): void;
export declare function translateError(idlErrors: Map<number, string>, err: any): Error | null;
//# sourceMappingURL=common.d.ts.map