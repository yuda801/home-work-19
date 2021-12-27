
class Drum extends MusicInstrumentsStore {
    model: string
    manufacturer: string
    color: string
    drumRadius: number

    constructor(
        model: string,
        manufacturer: string,
        color: string,
        drumRadius: number
    ) {
        super()
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
        this.drumRadius = drumRadius
    }

    display() {
        console.log(this);
    }

}