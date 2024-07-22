import {IsEmail, IsNumber, IsString, IsNotEmpty, Length} from "class-validator";

export class SignUpDto {
    @IsString()
    @Length(5,15)
    @IsNotEmpty()
    firstname: string

    @IsString()
    @IsNotEmpty()
    @Length(5,15)
    lastname: string

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(4,10)
    password: string

    @IsString()
    @IsNotEmpty()
    gender: "male" | "female"

    @IsNumber()
    @IsNotEmpty()
    @Length(1,3)
    age: number
}
