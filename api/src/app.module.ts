// imports necessarios
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // pra conectar no banco
import { BrandsModule } from './brands/brands.module';  // modulo das marcas
import { AppController } from './app.controller';  // controller principal

@Module({
  imports: [
    // configuracao do banco postgres
    TypeOrmModule.forRoot({
      type: 'postgres',  // tipo do banco
      host: process.env.DB_HOST || 'localhost',  // host do banco
      port: parseInt(process.env.DB_PORT) || 5432,  // porta
      username: process.env.DB_USER || 'postgres',  // usuario
      password: process.env.DB_PASS || 'postgres123',  // senha
      database: process.env.DB_NAME || 'brands_db',  // nome do banco
      autoLoadEntities: true,  // carrega as entities automaticamente
      synchronize: true,  // sincroniza o schema (so em dev)
    }),
    BrandsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}