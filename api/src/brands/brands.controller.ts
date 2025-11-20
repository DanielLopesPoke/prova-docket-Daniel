import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BrandsService } from './brands.service';
import { Brand } from './brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './brand.dto';

@ApiTags('brands')
@Controller('brands')  // rota /brands
export class BrandsController {
  constructor(private readonly service: BrandsService) {}  // service das marcas

  @Get()  // GET /brands
  @ApiOperation({ summary: 'Listar todas as marcas' })
  @ApiResponse({ status: 200, description: 'Lista de marcas', type: [Brand] })
  listarTodas(): Promise<Brand[]> {
    // retorna todas as marcas
    return this.service.findAll();
  }

  @Get(':id')  // GET /brands/1
  @ApiOperation({ summary: 'Buscar marca por ID' })
  @ApiResponse({ status: 200, description: 'Marca encontrada', type: Brand })
  buscarPorId(@Param('id') id: string): Promise<Brand> {
    // converte string pra numero com +
    return this.service.findOne(+id);
  }

  @Post()  // POST /brands
  @ApiOperation({ summary: 'Criar nova marca' })
  @ApiResponse({ status: 201, description: 'Marca criada', type: Brand })
  criarMarca(@Body() dados: CreateBrandDto): Promise<Brand> {
    // cria uma marca nova
    return this.service.create(dados);
  }

  @Put(':id')  // PUT /brands/1
  @ApiOperation({ summary: 'Atualizar marca' })
  @ApiResponse({ status: 200, description: 'Marca atualizada', type: Brand })
  atualizarMarca(@Param('id') id: string, @Body() dadosNovos: UpdateBrandDto): Promise<Brand> {
    // atualiza a marca
    return this.service.update(+id, dadosNovos);
  }

  @Delete(':id')  // DELETE /brands/1
  @ApiOperation({ summary: 'Remover marca' })
  @ApiResponse({ status: 200, description: 'Marca removida' })
  deletarMarca(@Param('id') id: string): Promise<void> {
    // deleta a marca
    return this.service.remove(+id);
  }
}