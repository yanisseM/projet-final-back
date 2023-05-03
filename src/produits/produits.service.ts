import { Injectable, NotFoundException } from "@nestjs/common";
import { Produit } from "./entities/produit.entity";
import { IProduit } from "./interface/produit.interface";
import { ProduitRepository } from "./repositories/produit.repository";

@Injectable()
export class ProduitService{
    constructor(readonly produitRepository: ProduitRepository){}

    getProduits():Promise<Produit[]>{
        return this.produitRepository.find();
    }

    async getProduit(id:number): Promise<Produit>{
        const produit = await this.produitRepository.findOneBy({id});   
        if(!produit){
            throw new NotFoundException("Ce produit n'existe pas..");
        }
        return produit;
    }

    async createProduit(produit : Omit<IProduit, 'id'>): Promise<Produit>{
        return await this.produitRepository.save(produit);
    }
    async deleteProduit(id : number ): Promise<Produit>{
        const produit = await this.produitRepository.delete({id});
        if(!produit){
          throw new NotFoundException("Ce produit n'existe pas..");
        }
        return ; 
    }

    async updateProduit(id : number): Promise<Produit>{
        const produit = await this.produitRepository.update({id});
        if(!produit){
            throw new NotFoundException("Ce produit n'existe pas..");
          }
         return ; 
    }
}