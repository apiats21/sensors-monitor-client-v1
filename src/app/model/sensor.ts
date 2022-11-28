export class Sensor {
    id: number;
    name: string;
    model: string;
    type: string;
    rangeFrom: number;
    rangeTo: number;
    unit: string;
    location: string;
    description: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.model = '';
        this.type = '';
        this.rangeFrom = 0;
        this.rangeTo = 0;
        this.unit = '';
        this.location = '';
        this.description = '';
    }
}
