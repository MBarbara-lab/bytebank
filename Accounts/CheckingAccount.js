import { Account } from "./Account.js";

export class CheckingAccount extends Account {
    constructor (client, agency) {
        super (client, 0, agency);
    }

    toWithdraw (amount) {
        const tax = 1.1;
        return this._toWithdrawa(amount, tax);
    }
}