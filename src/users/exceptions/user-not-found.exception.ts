import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common";

export class UserByEmailNotFoundException extends HttpException {
  constructor(expectedEmail: string) {
    super(`User with email: ${expectedEmail} not found`, HttpStatus.NOT_FOUND);
  }
}

export class UserByIdNotFoundException extends NotFoundException {
  constructor(expectedId: string) {
    super(`User with id: ${expectedId} not found`);
  }
}
