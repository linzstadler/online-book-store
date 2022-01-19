import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'authBody');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'authBody');
  }
}
