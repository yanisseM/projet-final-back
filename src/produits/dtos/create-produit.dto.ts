import { ProduitCategoryEnum } from "../enum/produit-category.enum";

export class CreateProduitDto {
    
    name : string;
    description : string;
    category : ProduitCategoryEnum;
    price : number;
    size: string;
}