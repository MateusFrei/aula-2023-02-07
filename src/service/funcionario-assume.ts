import { FuncionarioAssume } from "src/usecases/funcionario-assume";

export class FuncionarioConsultaService {
    public consultList(list: Array<any>) {
        console.log("====Consultando lista não processada====")
        list.forEach(element => {
            console.log(element);
        });
    }

    public getListUnprocessed(funcionarioConsulta: FuncionarioAssume) {

    }
} 