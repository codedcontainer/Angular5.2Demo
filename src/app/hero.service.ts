import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero} from "./hero";
import { HEROES } from "./mock-heroes";
import { of} from "rxjs/observable/of";

import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
   this.messageService.add('HeroService: fetched heroes'); 
   return of(HEROES); 
  }
  getHero(id:number): Observable<Hero>{
    this.messageService.add(`HeroSerive: fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id)); 
  }
 

}
