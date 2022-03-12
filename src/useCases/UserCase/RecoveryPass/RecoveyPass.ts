import { IUserRepository } from "../../../repositories/IUserRepository";
import { IRecoveyPassDTO } from "./IRecoveyPassDTO";

export class RecoveryPass {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: IRecoveyPassDTO) {
    const user = await this.userRepository.findByEmail(data.email)
    if(!user) throw new Error("User not Find.")
    const testpass = await this.userRepository.verifyPass(data.passwordAnt, user.password)
    if(!testpass) throw new Error("Password is invalid.")

    const result = await this.userRepository.recoveyPass(data.email, data.newPassword)
    return result
  }
}