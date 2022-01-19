import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'homeBody');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'homeBody');
  }

}
