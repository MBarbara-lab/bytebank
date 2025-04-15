export class Account {
    constructor (client, initialBalance, agency) {
        this.client = client;
        this.balance = initialBalance;
        this.agency = agency;
    }

    _toWithdraw (amount, tax) {
        let amountWithdrawn = amount * tax;

        if (this.balance < amountWithdrawn) {
            console.log(`Saldo insuficiente! Seu saldo atual é de: ${this.balance}`);
            return;
        }
        this.balance -= amountWithdrawn;
        return amountWithdrawn;
    }

    toWithdraw (amount) {
        let tax = 1;
        return this._toWithdraw(amount, tax);
    }

    toDeposit (amount) {
        this.balance += parseFloat(amount);
    }

    toTransfer (amount, account) {
        let amountTransferred = this.toWithdraw(amount);

        account.toDeposit(amountTransferred);
    }
}