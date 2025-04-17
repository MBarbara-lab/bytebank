import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor (client) {
        super(client, 60, "100");
    }

    toWithdraw (amount) {
        const tax = 1.01;
        return this._toWithdraw(amount, tax);
    }
}