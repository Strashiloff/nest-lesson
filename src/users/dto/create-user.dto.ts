import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    example: 'user@yandex.ru',
    description: 'Email'
  })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsString({
    message: 'Must be a string'
  })
  readonly email: string

  @IsString({
    message: 'Must be a string'
  })
  @Length(4, 16, { message: 'Not less than 4 and not more than 16'})
  @ApiProperty({
    example: '1232132432 ',
    description: 'Password'
  })
  readonly password: string
}
