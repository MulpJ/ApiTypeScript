import { Response, Request } from "express";
import { GetMoviePopu } from "./GetMovieCategory";

export class GetMoviePopuController {
  constructor(
    public getMoviePopu: GetMoviePopu
  ) {}

  async handle(req: Request, res: Response) {
    const { category } = req.params
    if(!category) return res.json({"error":"Informções Invalidas"})

    const ress = await this.getMoviePopu.execute(Number(category))
    res.json(ress)
  }
}