export class Client {
    constructor (firstName, lastName, cpf) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._cpf = cpf;
    }

    get cpf () {
        return this._cpf;
    }
}