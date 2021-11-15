import { Conta } from "./conta.js";

export class ContaSalario extends Conta{
    constructor(cliente, agencia){
        super(0, cliente, agencia)
    }

    sacar(valor){
        const taxa = 1.01
        super._sacar(valor, taxa)
    }
}