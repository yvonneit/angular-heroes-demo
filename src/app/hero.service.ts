import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // 添加私有的 messageService 属性参数
  constructor(private messageService: MessageService) {}

  /* getHeroes(): Hero[] {
    return HEROES
  } */

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES)
  }
}
