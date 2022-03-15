import { Request, Response } from "express";
import { send } from "../../MailCase/Send";
import { Send } from "../../MailCase/Send/Send";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
  constructor(
    private createUser: CreateUser
  ) {}

  async handle(req: Request, res: Response ) {
    const { name, email, password, plan } = req.body
  
    try {
      if(!name || !email || !password || !plan) throw new Error("Informações incorretas")
      
      const user = await this.createUser.execute({
        name,
        email: email.toLowerCase(),
        money:0,
        password: password.toLowerCase(),
        plan
      })

      send.execute({email, sub:"Bem Vindo 😁😍", text:`Bem vindo ${name}😋! Aproveite Nossos filmes e series na nossa plataforma!😁`})
      return res.status(201).json({user})
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}