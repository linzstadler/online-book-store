import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {SubSink} from "subsink";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  private subs = new SubSink();
  public isLoading = false;

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private authService: AuthService,
      private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isLoading = true;
      const registerSubscription = this.authService.register(this.validateForm.getRawValue()).subscribe(res => {
        this.isLoading = false;
        this.message.success('Registered successfully');
        this.router.navigateByUrl('/auth/login');
      })
      this.subs.add(registerSubscription);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
