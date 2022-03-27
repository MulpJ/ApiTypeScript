
import { Request, Response } from 'express'
import { RecoveryPass } from './RecoveyPass'

export class RecoveryPassController {
  constructor (
    public recoRepo: RecoveryPass
  ) {}

  async handle(req: Request, res: Response) {
    const response = await this.recoRepo.execute({ email: req.params.email })
    res.json({response})
  }
}