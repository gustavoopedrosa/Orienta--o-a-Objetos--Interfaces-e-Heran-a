import { Conta } from "./conta.js"

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }

    // Sobrescrevendo o comportamento do método sacar definido em 'Conta'
    sacar(valor){
        let taxa = 1.1
        super._sacar(valor, taxa)
    }
}