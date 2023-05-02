import { ProduitCategoryEnum } from "../enum/produit-category.enum";

export interface IProduit{
    id : number;
    name : string;
    description : string;
    category: ProduitCategoryEnum;
    price : number;
    size : string;
}