import { Account } from "./Account.js";

export class CheckingAccount extends Account {
    constructor (client, agency) {
        super (client, 0, agency);
    }

    toWithdraw (amount) {
        let tax = 1.1;
        return this._toWithdrawa(amount, tax);
    }
}