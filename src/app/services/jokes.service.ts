import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private apiUrl = 'https://api.chucknorris.io/jokes/'

  constructor(private http: HttpClient) { }

  getRandom() {
    return this.http.get(this.apiUrl + 'random');
  }

  getCategories() {
    return this.http.get(this.apiUrl + 'categories');
  }

  getJokeByCategory(category: string) {
    return this.http.get(this.apiUrl + `/random?category=${category}`)
  }

  getSearchJokes(searchTerm: string) {
return this.http.get(this.apiUrl + `search?query=${searchTerm}`)
  }
}
