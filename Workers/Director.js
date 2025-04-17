import { Workers } from "./Workers.js";

export class Director extends Workers {
    constructor (name, cpf, salary) {
        super(name, cpf, salary);
    }
}