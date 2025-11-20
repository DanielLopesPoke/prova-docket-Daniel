// imports do typeorm e swagger
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// tabela brands no banco
@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()  // id auto incremento
  @ApiProperty()
  id: number;  // chave primaria

  @Column()  // coluna normal
  @ApiProperty()
  name: string;  // nome da marca

  @Column()  // coluna normal
  @ApiProperty()
  expertise: string;  // especialidade da marca

  @Column()  // coluna do ano
  @ApiProperty()
  year_founded: number;  // ano que foi fundada

  @Column({ default: true })  // padrao true
  @ApiProperty()
  active: boolean;  // se ta ativa ou nao
}