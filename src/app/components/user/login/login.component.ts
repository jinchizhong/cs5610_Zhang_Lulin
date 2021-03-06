import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) {
    this.username = 'hello world!';
  }

  ngOnInit() {
    console.log('Login page!' + this.username);
  }

  // binding click event
  buttonClicked(event: any) {
    console.log(event); // your custom code on button click
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user = this.userService.findUserByCredentials(this.username, this.password);
    if (user) {
      this.router.navigate((['/user/', user._id]));
    } else {
      this.errorFlag = true;
      return this.errorMsg;
    }
  }


}
