import { Table, Column, DataType, ForeignKey, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger'
import { Role } from './roles.model';
import { User } from 'src/users/users.model';

@Table({
  tableName: 'user_roles',
  createdAt: false,
  updatedAt: false
})
export class UserRoles extends Model<UserRoles> {

  @ApiProperty({
    example: 1,
    description: 'unique identificator'
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

}
