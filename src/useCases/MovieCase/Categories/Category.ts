import {IMovieRepository} from '../../../repositories/IMovieRepository'

export class Category {
  constructor (
    public MovieRepository: IMovieRepository
  ) {}

  async execute() {
    const res = await this.MovieRepository.generes()
    return res 
  }
}