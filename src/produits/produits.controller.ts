import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthentificationGuard } from 'src/guards/authentification.guard';
import { CreateProduitDto } from './dtos/create-produit.dto';
import { Produit } from './entities/produit.entity';
import { ProduitService } from './produits.service';
import { UpdateProduitDto } from './dtos/update-produit.dto';
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
    
    @UseGuards(AuthentificationGuard)
    @Patch(':id')
    updateProduit(@Param('id') produitId:Number, @Body() updateProduitDto: UpdateProduitDto){
        return this.produitService.update(produitId, updateProduitDto);
    }

}