export default class AddressModel {
    #street: number
    #suite: string
    #city: string
    #zipcode: string
    #geo: GeoModel

    constructor(street: number,
        suite: string,
        city: string,
        zipcode: string,
        geo: GeoModel) {
        this.#suite = suite
        this.#street = street
        this.#zipcode = zipcode
        this.#city = city
        this.#geo = geo
    }
    get suite() {
        return this.#suite
    }
    get city() {
        return this.#city
    }
    get zipcode() {
        return this.#zipcode
    }
    get street() {
        return this.#street
    }
    get geo() {
        return this.#geo
    }
}

class GeoModel {
    #lat: number
    #lng: string

    constructor(lat: number,
        lng: string) {
        this.#lng = lng
        this.#lat = lat
    }
    get lng() {
        return this.#lng
    }
    get lat() {
        return this.#lat
    }
}