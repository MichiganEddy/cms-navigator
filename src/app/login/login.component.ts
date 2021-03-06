import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  user: User;

  constructor() { 
      this.user = new User("Bob", "Smith", "BSmithy", "BS@G.C", "simple");
  }

  ngOnInit() {

  }

}
