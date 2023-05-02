import { Injectable } from "@nestjs/common";
import { Produit } from "../entities/produit.entity";
import { Repository, DataSource } from 'typeorm';
@Injectable()
export class ProduitRepository extends Repository<Produit>{
    constructor(private datasource: DataSource){
        super(Produit, datasource.createEntityManager());
    }
}
