import { ProduitCategoryEnum } from "../enum/produit-category.enum";

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

    @Colummn()
    size : string;
}