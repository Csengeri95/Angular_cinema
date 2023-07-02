import { Guid } from 'guid-typescript';


export class Cart {
    uid: string = '';
    title: string = '';
    date: string = '';
    time: string = '';
    language: string = '';
    price: number = 0;
    quantity: number = 1;


    constructor() {
        this.uid = Guid.create().toString();
    }
}
