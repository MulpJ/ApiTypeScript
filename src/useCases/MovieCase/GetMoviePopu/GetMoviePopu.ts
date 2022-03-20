import {IMovieRepository} from '../../../repositories/IMovieRepository'

export class GetMoviePopu {
  constructor (
    public MovieRepository: IMovieRepository
  ) {}

  async execute() {
    const res = await this.MovieRepository.getPopu()
    return res
  }
}