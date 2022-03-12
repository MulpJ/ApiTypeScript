import { IUserRepository } from "../../../repositories/IUserRepository";
import { IGainUserDTO } from "./IGainUserDTO";

export class GainUser {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: IGainUserDTO) {
    const userid = Number(data.userID)
    const user = await this.userRepository.findByUser(userid)
    const amount = user.money + data.amonut

    const res = await this.userRepository.gain(userid, amount)

    return res
  }
}