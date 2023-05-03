import { IsOptional, IsString, IsEnum, IsNumber } from "class-validator";
import { ProduitCategoryEnum } from "../enum/produit-category.enum";

export class UpdateProduitDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(ProduitCategoryEnum)
    category?: ProduitCategoryEnum;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsString()
    size?: string;
}
