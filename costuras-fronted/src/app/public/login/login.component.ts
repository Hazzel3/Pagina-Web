import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form = {
    username: "",
    password: ""
  }

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  async onSubmit(): Promise<void>{
    const response = await this.service.login(this.form);
    console.log(response);
  }

}
