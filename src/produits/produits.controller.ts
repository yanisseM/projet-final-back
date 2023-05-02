import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthentificationGuard } from 'src/guards/authentification.guard';
import { CreateProduitDto } from './dtos/create-produit.dto';
import { Produit } from './entities/produit.entity';
import { ProduitsService } from './produits.service';
@Controller('produits')
export class ProduitsController{
    constructor(readonly produitService ProduitService){}

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
    createProduct(@Body() produit: CreateProduitDto): Promise<Produit>{
        return this.produitService.createProduit(produit);
    }

    @UseGuards(AuthentificationGuard)
    @Delete()
    

}