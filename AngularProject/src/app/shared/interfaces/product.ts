import { Category } from "./category";
import { SafeUrl } from "@angular/platform-browser";

export interface Product {
    id : number,
    reference : string,
    designation : string,
    category : Category,
    price : number,
    weight : number,
    description : string,
    ingredients : string,
    date : string,
    base64Image : string,
    safeUrl : SafeUrl
}