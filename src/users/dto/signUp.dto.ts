import {IsEmail, IsStrongPassword, IsNotEmpty, Length} from "class-validator";

export class SignUpDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsStrongPassword()
    @IsNotEmpty()
    @Length(4,10)
    password: string
}
