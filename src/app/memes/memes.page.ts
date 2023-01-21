import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-memes',
  templateUrl: './memes.page.html',
  styleUrls: ['./memes.page.scss'],
})
export class MemesPage implements OnInit {

  jokes: any[] = [];
  categories: any[] = [];
  devices: any[] = [];


  constructor(
    private jokesService: JokesService, private router: Router, public ngFireAuth: AngularFireAuth
  ) { }

  async logOut() {
    return this.ngFireAuth.signOut().then(() => {
       this.router.navigate(['']);
       
    });
  }

  ngOnInit() {
    this.jokesService.getCategories()
      .subscribe((categories: any) => {
        this.categories = categories;
        this.jokesService.getRandom()
          .subscribe(joke => {
            this.jokes.push(joke);
          });
      });
  }

  getRandomJoke() {
    this.jokes.length = 0;
    this.jokesService.getRandom()
    .subscribe(joke => {
      this.jokes.push(joke);
    });
  }

  searchByCategory(category: string) {
    this.jokesService.getJokeByCategory(category)
      .subscribe(joke => {
        this.jokes = [];
        this.jokes.push(joke);
      })
  }

  searchBySearchTerm(searchTerm: string) {
    this.jokesService.getSearchJokes(searchTerm)
      .subscribe((jokes: any) => {
        this.jokes = jokes;
      });
  } 

}
