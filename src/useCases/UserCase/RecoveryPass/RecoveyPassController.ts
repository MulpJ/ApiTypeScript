import { Response, Request } from "express";
import { RecoveryPass } from "./RecoveyPass";

export class RecoveyPassController {
  constructor(
    public RecoveryPass: RecoveryPass
  ) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body
    
    try {

      const result = await this.RecoveryPass.execute({email, password})
      
      res.status(200).json(result)

    } catch (error) {
      res.status(400).json({
        error: error.message || "Unexpected error."
      })
    }
  }
  
}