import { Module } from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitService } from './produits.service';
import { ProduitRepository } from './repositories/produit.repository';

@Module({
  imports: [],
  controllers: [ProduitsController],
  providers: [ProduitService, ProduitRepository],
})
export class ProduitsModule {}