import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
import { Produit } from './produits/entities/produit.entity';
import { ProduitsModule } from './produits/produits.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'projetfinal',
      entities: [Produit], // [_dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProduitsModule,
  ],
// controllers: [AppController],
providers: [],
exports: [],

})
export class AppModule {}