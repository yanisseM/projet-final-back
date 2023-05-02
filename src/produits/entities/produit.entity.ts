import { ProduitCategoryEnum } from "../enum/produit-category.enum";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Produit{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    category : ProduitCategoryEnum
    
    @Column()
    price : number;

    @Column()
    size : string;
}