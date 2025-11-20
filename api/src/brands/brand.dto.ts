// import pro swagger
import { ApiProperty } from '@nestjs/swagger';

// dados pra criar uma marca
export class CreateBrandDto {
  @ApiProperty()
  name: string;  // nome obrigatorio

  @ApiProperty()
  expertise: string;

  @ApiProperty()
  year_founded: number;

  @ApiProperty({ required: false, default: true })
  active?: boolean;
}

export class UpdateBrandDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  expertise?: string;

  @ApiProperty({ required: false })
  year_founded?: number;

  @ApiProperty({ required: false })
  active?: boolean;
}