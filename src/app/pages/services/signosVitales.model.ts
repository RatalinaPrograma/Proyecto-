export class SignosVitales {
    idSigno?: number;
    freq_cardiaca: number;
    presion_arterial: string;
    temp_corporal: number;
    sat_oxigeno: number;
    freq_respiratoria: number;
    condiciones: string;
    operaciones: string;

    constructor(idSigno: number, freq_cardiaca: number, presion_arterial: string, temp_corporal: number, sat_oxigeno: number, freq_respiratoria: number, condiciones: string, operaciones: string) {
        this.idSigno = idSigno;
        this.freq_cardiaca = freq_cardiaca;
        this.presion_arterial = presion_arterial;
        this.temp_corporal = temp_corporal;
        this.sat_oxigeno = sat_oxigeno;
        this.freq_respiratoria = freq_respiratoria;
        this.condiciones = condiciones;
        this.operaciones = operaciones;
    }
}