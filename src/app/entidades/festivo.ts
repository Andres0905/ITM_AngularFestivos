export class FestivoCal {

    public festivo: string;
    public fecha: Date;
    

    constructor(
        festivo: string,
        fecha: Date,
    ) {
        this.festivo = festivo;
        this.fecha = fecha;
    }
}