import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor (client, initialBalance, agency) {
        super (client, initialBalance, agency);
    }

    toWithdraw (amount) {
        const tax = 1.02;
        return this._toWithdraw(amount, tax);
    }
}