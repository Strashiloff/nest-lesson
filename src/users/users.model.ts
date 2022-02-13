import { Model, Table, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from '../roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Post } from '../posts/post.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttrs> {

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

  @ApiProperty({
    example: 'user@yandex.ru',
    description: 'E-mail'
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string;

  @ApiProperty({
    example: '231WEee1',
    description: 'Password'
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @ApiProperty({
    example: true,
    description: 'Is user banned'
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false
  })
  banned: boolean;

  @ApiProperty({
    example: 'Eat a lot of sweets',
    description: 'Ban reason'
  })
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[]
}
