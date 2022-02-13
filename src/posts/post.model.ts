import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({
  tableName: 'posts',
})
export class Post extends Model<Post, PostCreationAttrs> {

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
    example: 'Some news',
    description: 'Title of the post'
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  title: string;

  @ApiProperty({
    example: 'Something happened',
    description: 'Content of the post'
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content: string;

  @ApiProperty({
    description: 'Image in string format'
  })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  })
  userId: number

  @BelongsTo(() => User)
  author: User
}
