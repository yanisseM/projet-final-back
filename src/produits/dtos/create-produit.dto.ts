import { IsString, IsEnum, IsNumber } from "class-validator";
import { ProduitCategoryEnum } from "../enum/produit-category.enum";

export class CreateProduitDto {
    @IsString()
    name : string;

    @IsString()
    description : string;

    @IsEnum(ProduitCategoryEnum)
    category : ProduitCategoryEnum;

    @IsNumber()
    price : number;

    @IsString()
    size: string;
}