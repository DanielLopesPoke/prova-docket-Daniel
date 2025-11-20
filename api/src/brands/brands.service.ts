import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private repo: Repository<Brand>,  // repo é mais simples
  ) {}

  // buscar todas as marcas
  findAll(): Promise<Brand[]> {
    console.log('buscando todas marcas...');
    return this.repo.find();
  }

  // busca uma marca pelo id
  findOne(id: number): Promise<Brand> {
    console.log('procurando marca id:', id);
    return this.repo.findOneBy({ id });
  }

  // criar nova marca
  create(dados: CreateBrandDto): Promise<Brand> {
    console.log('criando marca:', dados.name);
    const novaMarca = this.repo.create(dados);
    return this.repo.save(novaMarca);
  }

  // atualizar uma marca
  async update(id: number, dadosNovos: UpdateBrandDto): Promise<Brand> {
    console.log('atualizando marca id:', id);
    await this.repo.update(id, dadosNovos);
    return this.findOne(id);  // busca denovo pra retornar atualizada
  }

  // deletar marca
  async remove(id: number): Promise<void> {
    console.log('deletando marca id:', id);
    await this.repo.delete(id);
  }
}