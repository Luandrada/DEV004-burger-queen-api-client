import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("password") password: ElementRef | undefined;
  @ViewChild("show") show: ElementRef | undefined;
  @ViewChild("hide") hide: ElementRef | undefined;
  formLogin!: FormGroup;

  constructor( private fb: FormBuilder,
    private renderer: Renderer2,) {
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formLogin = this.fb.group({
      email: ["", [Validators.required, Validators.pattern('[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ["", Validators.required]
    });
  }
  
    /**
  *Getters para campos invalidos formulario login
  **/
  get emailInvalido() {
    return this.formLogin?.get('email')?.invalid && this.formLogin.get('email')?.touched;
  }

  get passwordInvalida() {
    return this.formLogin?.get('password')?.invalid && this.formLogin.get('password')?.touched;
  }

  mostrarPsw() {
    if (this.password?.nativeElement.type == "password") {
      this.renderer.setAttribute(this.password.nativeElement, "type", "text");
      this.renderer.setStyle(this.show?.nativeElement, "visibility", "hidden");
      this.renderer.setStyle(this.hide?.nativeElement, "visibility", "visible")
    } else {
      this.renderer.setAttribute(this.password?.nativeElement, "type", "password");
      this.renderer.setStyle(this.show?.nativeElement, "visibility", "visible");
      this.renderer.setStyle(this.hide?.nativeElement, "visibility", "hidden")
    }
  }
  iniciarSesion(): void {
    if (this.formLogin?.invalid) {
      return Object.values(this.formLogin.controls)
        .forEach(control => control.markAsTouched());
    }
  }


}
