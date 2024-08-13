import { HttpException, HttpStatus } from "@nestjs/common";

export class UserEmailAlreadyExistException extends HttpException{
    constructor(exceptedEmail: string){
        super(
            `User with email: ${exceptedEmail} is already exist`,
            HttpStatus.BAD_REQUEST,
        );
    }
}