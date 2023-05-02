import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthentificationGuard } from 'src/guards/authentification.guard';
import { CreateProduitDto } from './dtos/create-produit.dto';
import { Produit } from './entities/produit.entity';
import { ProduitService } from './produits.service';
@Controller('produits')
export class ProduitsController{
    constructor(readonly produitService: ProduitService){}

    @Get()
    getProduits():Promise<Produit[]>{
        return this.produitService.getProduits();
    }

    @Get(':id')
    getProduit(@Param('id')produitId : number):Promise<Produit>{
        return this.produitService.getProduit(produitId);
    }

    @UseGuards(AuthentificationGuard)
    @Post()
    createProduit(@Body() produit: CreateProduitDto): Promise<Produit>{
        return this.produitService.createProduit(produit);
    }

    @UseGuards(AuthentificationGuard)
    @Delete(':id')
    deleteProduit(@Param('id') produitId:number){
        return this.produitService.deleteProduit(produitId);
    }
    

}