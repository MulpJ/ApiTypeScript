import { IMovieRepository } from "../../IMovieRepository";
import axios from 'axios';

export class MovieRepository implements IMovieRepository{
  async getPopu() {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c52691093e2b3765ee3464ab26941ed3&language=pt-br'

    const res = await axios.get(url)
    return res.data
  }
  async getCategory(cate: number) {
    const url = `https://api.themoviedb.org/4/discover/movie?api_key=c52691093e2b3765ee3464ab26941ed3&language=pt-br&with_genres=${cate}`
    const res = await axios.get(url)
    return res.data
  }

  async generes() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=c52691093e2b3765ee3464ab26941ed3&language=pt-br&language=pt-br`
    const res = await axios.get(url)
    return res.data
  }
}