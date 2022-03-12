import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
  constructor(
    private createUser: CreateUser
  ) {}

  async handle(req: Request, res: Response ) {
    const { name, email, password, plan } = req.body
  
    try {
      const user = await this.createUser.execute({
        name,
        email,
        money:0,
        password,
        plan
      })

      return res.status(201).json({user})
    } catch (error) {
      return res.status(400).json({
        error: error.message || "Unexpected error."
      })
    }
  }
}