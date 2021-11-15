import { Cliente } from './Cliente.js'
import { Diretor } from './Funcionarios/Diretor.js'
import { Gerente } from './Funcionarios/Gerente.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const gerente = new Gerente ("Rodrigo", 5000, 12345678900)
const diretor = new Diretor ("Ricardo", 10000, 12345678901)
const cliente = new Cliente ("Lais", 12345678978, 456789)

diretor.cadastrarSenha("123456789")
gerente.cadastrarSenha("123456")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 123456)
const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456789)


const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456789)



console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)