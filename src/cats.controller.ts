import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';


export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
}
  

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204) // custom status code
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('wildcard/*') 
    wildcard(): string {
        return 'This route uses a wildcard';
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Post()
    async createCustom(@Body() createCatDto: CreateCatDto): Promise<string> {
        return 'This action adds a new cat';
    }


    @Get()
    async findAllCustom(@Query('age') age: number, @Query('breed') breed: string) {
        return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
    }


}
