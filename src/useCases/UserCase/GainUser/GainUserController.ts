import { Request, Response } from "express";
import { GainUser } from "./GainUser";

export class GainUserController {
  constructor (
    public gainUser: GainUser
  ) {}

  async handle(req: Request, res: Response) {
   const { userID,  amount } = req.body
   try {
    if(!amount) throw new Error("Quantia invalida")
    const money = await this.gainUser.execute({amonut: amount, userID})

    return res.status(201).json(money)
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Unexpected error."
    })
  }
   
  }
}