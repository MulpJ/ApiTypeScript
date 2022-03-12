import { Response, Request } from "express";
import { RecoveryPass } from "./RecoveyPass";

export class RecoveyPassController {
  constructor(
    public RecoveryPass: RecoveryPass
  ) {}

  async handle(req: Request, res: Response) {
    const { email, passwordAnt, newPassword } = req.body
    
    try {

      const result = await this.RecoveryPass.execute({email, passwordAnt, newPassword})
      res.status(200).json(result)

    } catch (error) {
      res.status(400).json({
        error: error.message || "Unexpected error."
      })
    }
  }
}