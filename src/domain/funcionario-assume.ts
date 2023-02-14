export class FuncionarioAssume {
    id: string
    list: Array<object>

    constructor(id: string) {
        this.id = id;
        this.list = new Array<object>()
    }
}