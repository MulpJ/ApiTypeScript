import { Response, Request } from "express";
import { Category } from "./Category";

export class CategoryController {
  constructor(
    public category: Category
  ) {}

  async handle(req: Request, res: Response) {
    const ress = await this.category.execute()
    res.json(ress)
  }
}