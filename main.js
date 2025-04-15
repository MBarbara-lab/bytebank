import { Client } from "./Client.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { CheckingAccount } from "./CheckingAccount.js";

const joana = new Client("Joaninha", "Bonitinha", "012.345.678-99");
const contaPoupancaJoana = new SavingsAccount("Joaninha Bonitinha", 200, "0001");
const contaCorrenteJoana = new CheckingAccount("Joaninha Bonitinha", "0001");

const gisele = new Client("Gisele", "Mirabelle", "987.654.321-00");
const contaPoupancaGisele = new SavingsAccount("Gisele Mirabelle", 300, "0001");
const contaCorrenteGisele = new CheckingAccount("Gisele Mirabelle", "0001");

console.log(joana);
console.log(contaPoupancaJoana);
console.log(contaCorrenteJoana);

console.log(gisele);
console.log(contaPoupancaGisele);
console.log(contaCorrenteGisele);