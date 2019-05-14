import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';


enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('750ms ease-in'))
    ])
  ]

})
export class NavComponent implements AfterViewInit {

  public isProfile = true;

  private isVisible = true;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown.subscribe(() => (this.isVisible = false));
  }


  logout() {
    localStorage.removeItem('token');
    // location.reload();
  }

  nav() {
    let element = event.target as HTMLInputElement;
    if (element.name === 'profile') {
      this.isProfile = false;
      let head = document.querySelector('.header');
      head.classList.add('header-profile');
      // console.log(head.classList);
      // console.log(this.isProfile);
    } else {
      this.isProfile = true;
      let head = document.querySelector('.header');
      head.classList.remove('header-profile');
      // console.log(head.classList);
      // console.log(this.isProfile);
    }
  }


}
