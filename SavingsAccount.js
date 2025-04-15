import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor (client, initialBalance, agency) {
        super (client, initialBalance, agency);
    }
}