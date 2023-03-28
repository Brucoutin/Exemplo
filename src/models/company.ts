export default class CompanyModel {
    #name: number
    #catchPhrase: string
    #bs: string

    constructor(name: number,
        catchPhrase: string,
        bs: string) {
        this.#name = name
        this.#bs = bs
        this.#catchPhrase = catchPhrase
    }
    get name() {
        return this.#name
    }
    get catchPhrase() {
        return this.#catchPhrase
    }
    get bs() {
        return this.#bs
    }
}