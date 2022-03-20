import { Response, Request } from "express";
import { GetMoviePopu } from "./GetMoviePopu";

export class GetMoviePopuController {
  constructor(
    public getMoviePopu: GetMoviePopu
  ) {}

  async handle(req: Request, res: Response) {
    const ress = await this.getMoviePopu.execute()
    res.json(ress)
  }
}