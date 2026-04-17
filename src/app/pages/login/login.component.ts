import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form;

  constructor(private fb: FormBuilder, private router: Router) { {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
   }
  }

  login() {
  if (this.form.valid) {
    this.router.navigate(['/menu']);
  }
}
}
