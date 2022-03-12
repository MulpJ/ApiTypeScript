import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUser {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlereadyExists = await this.userRepository.findByEmail(data.email)
    if (userAlereadyExists) throw new Error('User already exists.')

    const user = new User(
      data.name,
      data.email,
      await this.userRepository.encryptpass(data.password),
      data.money,
      data.plan
    ) 

    const result = await this.userRepository.save(user)

    return result
  }
}