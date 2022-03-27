import { ITokenRepository } from "../../../repositories/ITokenRepository";
import { send } from "../../MailCase/Send";
import { IRecoveyPassDTO } from './IRecoveyPassDTO'

export class RecoveryPass {
  constructor(
    public tokenRepo: ITokenRepository
  ) {}

  async execute(data:IRecoveyPassDTO) {
    const email = data.email
    const token = await this.tokenRepo.token(email, '1d')
    await send.execute({ email , sub:"Troca de senha 🛂", text:`Você solicitou a troca de senha, se não foi você não se preocupe! link: http://localhost:3000/recovery/${token}`})
    return token
  }
}