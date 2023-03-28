import AddressModel from "./address"
import CompanyModel from "./company"

export default class UserModel {
    #id: number
    #name: string
    #username: string
    #email: string
    #address: AddressModel
    #phone: string
    #website: string
    #company: CompanyModel

    constructor(id: number,
        name: string,
        username: string,
        email: string,
        address: AddressModel,
        phone: string,
        website: string,
        company: CompanyModel) {
        this.#name = name
        this.#id = id
        this.#email = email
        this.#username = username
        this.#address = address
        this.#phone = phone
        this.#website = website
        this.#company = company
    }
    get name() {
        return this.#name
    }
    get username() {
        return this.#username
    }
    get email() {
        return this.#email
    }
    get id() {
        return this.#id
    }
    get address() {
        return this.#address
    }
    get phone() {
        return this.#phone
    }
    get website() {
        return this.#website
    }
    get company() {
        return this.#company
    }
}