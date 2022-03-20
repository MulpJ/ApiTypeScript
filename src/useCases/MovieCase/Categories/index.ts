import { movieRepo } from "../../../repositories/implementations/MovieRepository";
import { Category } from "./Category";
import { CategoryController } from "./CategoryController";

const category = new Category(movieRepo)
const categoryController = new CategoryController(category)

export { categoryController }