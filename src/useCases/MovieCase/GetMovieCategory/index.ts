import { movieRepo } from "../../../repositories/implementations/MovieRepository";
import { GetMoviePopu } from "./GetMovieCategory";
import { GetMoviePopuController } from "./GetMovieCategoryController";

const getMoviePopu = new GetMoviePopu(movieRepo)
const getMovieCategoryController = new GetMoviePopuController(getMoviePopu)

export { getMovieCategoryController }
