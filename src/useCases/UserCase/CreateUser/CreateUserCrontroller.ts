import { Request, Response } from "express";
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

      return res.status(201).json({user})
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}