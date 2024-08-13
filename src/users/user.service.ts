
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";
import { 
    UserByEmailNotFoundException, 
    UserByIdNotFoundException 
} from "./exceptions/user-not-found.exception";

@Injectable()
export class UserService{
    constructor(
      @InjectRepository(User) private userRepository: Repository<User>,
      private readonly configService: ConfigService,
    ){}

    findAllUsers(): Promise<User[]> {
        return this.userRepository.find();
      }

    async findOneUserById(id: string): Promise<User> {
        const user = await this.userRepository.findOne({
          where: { id },
        });
        if (user) {
          return user;
        }
        throw new UserByIdNotFoundException(id);
      }

    async findOneByEmail(email: string): Promise<User>{
        const user = await this.userRepository.findOne({
            where: {email},
        });
        if (user){
            return user
        }
        throw new UserByEmailNotFoundException(email)
    }

    async createUser(){
        
    }

}