

class Piano extends MusicInstrumentsStore {
    model: string
    manufacturer: string
    color: string
    numberOfKeys: number

    constructor(
        model: string,
        manufacturer: string,
        color: string,
        numberOfKeys: number
    ) {
        super()
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
        this.numberOfKeys = numberOfKeys
    }

    display() {
        console.log(this);
    }

}