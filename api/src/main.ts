import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// funcao principal que inicia o servidor
async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // cria a aplicacao
  
  // config do swagger (documentacao)
  const config = new DocumentBuilder()
    .setTitle('API Marcas')  // titulo
    .setDescription('API para gerenciar marcas')  // descricao
    .setVersion('1.0')  // versao
    .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, doc);  // swagger na rota /api

  // permite requisicoes de outros dominios
  app.enableCors();

  await app.listen(3001);  // server na porta 3001
  console.log('API rodando em http://localhost:3001');  // log pra saber que subiu
}
bootstrap();