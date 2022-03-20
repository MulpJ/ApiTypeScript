import { movieRepo } from "../../../repositories/implementations/MovieRepository";
import { GetMoviePopu } from "./GetMoviePopu";
import { GetMoviePopuController } from "./GetMoviePopuController";

const getMoviePopu = new GetMoviePopu(movieRepo)
const getMoviePopuController = new GetMoviePopuController(getMoviePopu)

export { getMoviePopuController }
