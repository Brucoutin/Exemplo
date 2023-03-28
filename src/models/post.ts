
export default class PostModel {
    #userId: number
    #id: number
    #title: string
    #body: string

    constructor(userId: number,
        id: number,
        title: string,
        body: string) {
        this.#userId = userId
        this.#id = id
        this.#body = body
        this.#title = title
    }
    get userId() {
        return this.#userId
    }
    get title() {
        return this.#title
    }
    get body() {
        return this.#body
    }
    get id() {
        return this.#id
    }
}