
class Guiter extends MusicInstrumentsStore {
    model: string
    manufacturer: string
    color: string
    numberOfCords: number

    constructor(
        model: string,
        manufacturer: string,
        color: string,
        numberOfCords: number
    ) {
        super()
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
        this.numberOfCords = numberOfCords
    }

    display() {
        console.log(this);
    }

}