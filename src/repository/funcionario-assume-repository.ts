import { Repository } from "./repository";
import { FuncionarioAssume } from "../domain/funcionario-assume";

export class FuncionarioAssumeRepo implements Repository<FuncionarioAssume>{

    findOne(id: string): Promise<FuncionarioAssume | undefined> {
        throw new Error("Method not implemented.");
    }

    findAll(): Promise<FuncionarioAssume[] | undefined> {
        throw new Error("Method not implemented.");
    }

    create(dado: FuncionarioAssume): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(id: string, dado: FuncionarioAssume): Promise<void> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}