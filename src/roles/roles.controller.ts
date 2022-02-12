import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Controller('roles')
export class RolesController {
  constructor(
    private rolesService: RolesService
  ) {}

  @Post()
  create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.rolesService.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string): Promise<Role> {
    return this.rolesService.getRoleByValue(value);
  }
}
