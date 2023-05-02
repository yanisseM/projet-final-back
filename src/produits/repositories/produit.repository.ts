import { Injectable } from "@nestjs/common";
import { Produit } from "../entities/produit.entity";

@Injectable()
export class ProduitRepository extends Repository<Produit>{
    constructor(private datasource: DataSource){
        super(Product, dataSource.createEntityManager());
    }
}