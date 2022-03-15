import { IUserRepository } from "../../../repositories/IUserRepository";
import { IRecoveyPassDTO } from "./IRecoveyPassDTO";

export class RecoveryPass {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: IRecoveyPassDTO) {
    const user = await this.userRepository.findByEmail(data.email)
    if(!user) throw new Error("Usuario não encontrado.")

    const result = await this.userRepository.recoveyPass(data.email, data.password)
    return result
  }
}