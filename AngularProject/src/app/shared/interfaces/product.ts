import { category } from "./category";

export interface Product {
    id : number,
    reference : string,
    designation : string,
    category : category,
    price : number,
    weight : number,
    description : string,
    ingredients : string,
    date : string,
    image : string
}