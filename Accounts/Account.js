import { Client } from "../Client.js";

export class Account {
    constructor (client, initialBalance, agency) {
        if (this.constructor == Account) {
            throw new Error ("Você não deveria instanciar um objeto do tipo conta diretamente.");
        }
        this._client = client;
        this._balance = initialBalance;
        this._agency = agency;
    }

    set client (newClient) {
        if (newClient instanceof Client) {
            this._client = newClient;
        }
    }

    get client () {
        return this._client;
    }

    get balance () {
        return this._balance;
    }

    get agency () {
        return this._agency;
    }

    _toWithdraw (amount, tax) {
        let amountWithdrawn = amount * tax;

        if (this._balance < amountWithdrawn) {
            console.log(`Saldo insuficiente! Seu saldo atual é de: ${this._balance}`);
            return;
        }
        this._balance -= amountWithdrawn;
        return amountWithdrawn;
    }

    toWithdraw (amount) {
        throw new Error ("O método toWithdraw não foi sobrescrito.");
    }

    toDeposit (amount) {
        this._balance += parseFloat(amount);
    }

    toTransfer (amount, account) {
        let amountTransferred = this.toWithdraw(amount);

        account.toDeposit(amountTransferred);
    }
}