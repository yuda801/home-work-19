

class GrandPiano extends MusicInstrumentsStore {
    model: string
    manufacturer: string
    color: string
    numberOfKeys: number
    pianoLength: number

    constructor(
        model: string,
        manufacturer: string,
        color: string,
        numberOfKeys: number,
        pianoLength: number
    ) {
        super()
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
        this.numberOfKeys = numberOfKeys
        this.pianoLength = pianoLength
    }

    display() {
        console.log(this);
    }

}