import { Request, Response } from "express";
import { GetUser } from "./GetUser";

export class GetUserController {
  constructor(
    private getUser: GetUser
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.params

      const user = await this.getUser.execute({ email, password })

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        error: error.message || "Unexpected error."
      })
    }

  }
}