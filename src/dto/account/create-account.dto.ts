import { IsDateString, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateAccountDto {
    @IsNotEmpty()
    @IsString()   
    role! : string

    @IsNotEmpty()
    @IsString()
    email! : string

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password!: string

    @IsNotEmpty()
    @IsString()
    fullname! : string

    @IsNotEmpty()
    @IsString()
    address! : string
    
    @IsNotEmpty()
    @IsString()
    phone_number! : string

    @IsNotEmpty()
    @IsDateString()
    birthday! : Date
}