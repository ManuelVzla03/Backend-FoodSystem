import {Product} from "./Product.js"

export class PackagingProduct extends Product{
    constructor(name, basePrice, cost, availability, taxes, stock){
        super(name, basePrice, cost, availability, taxes)

        if(typeof stock != "number" || stock == undefined){
            throw new Error("Invalid stock product")
        }else{
            this._stock = stock;
        }

    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid name producto")
        }else{
            this._name = value;
        }
    }

    get basePrice(){
        return this._basePrice;
    }

    set basePrice(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid basePrice producto")
        }else{
            this._basePrice = value;
        }
    }

    get cost(){
        return this._cost;
    }

    set cost(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid cost producto")
        }else{
            this._cost = value;
        }
    }

    get availability(){
        return this._availability;
    }

    set availability(value){
        if(value == undefined || typeof value !== "boolean"){
            throw Error ("Invalid availability producto")
        }else{
            this._availability = value;
        }
    }

    get taxes(){
        return this._taxes;
    }

    set taxes(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid taxes producto")
        }else{
            this._taxes = value;
        }
    }

    get stock(){
        return this._stock;
    }

    set stock(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid stock product")
        }else{
            this._stock = value;
        }
    }

    toPersistenceObject(){
        return {
            name: this._name,
            basePrice: this._basePrice,
            cost: this._cost,   
            availability: this._availability,
            taxes: this._taxes,
            stock: this._stock
        }
    }
}