import {IMovieRepository} from '../../../repositories/IMovieRepository'

export class GetMoviePopu {
  constructor (
    public MovieRepository: IMovieRepository
  ) {}

  async execute(cate: number) {
    const res = await this.MovieRepository.getCategory(cate)
    return res
  }
}