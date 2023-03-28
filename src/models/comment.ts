
export default class CommentModel {
    #postId: number
    #id: number
    #name: string
    #email: string
    #body: string

    constructor(postId: number,
        id: number,
        name: string,
        email: string,
        body: string) {
        this.#postId = postId
        this.#id = id
        this.#email = email
        this.#body = body
        this.#name = name
    }
    get postId() {
        return this.#postId
    }
    get name() {
        return this.#name
    }
    get email() {
        return this.#email
    }
    get body() {
        return this.#body
    }
    get id() {
        return this.#id
    }
}