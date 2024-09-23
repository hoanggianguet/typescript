import { faker } from '@faker-js/faker';
import { Mappale } from './CustomMap';

export class User implements Mappale{
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()

        }
    }

    markerContent() : string{
        return `User name ${this.name}`;
    }
}