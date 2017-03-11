import { AppModule } from './app.module';

export class User {

     public firstName: string;
     public lastName: string;
     public username: string;
     protected email: string;
     public id: string;
     private password: string;

     constructor(firstName: string, lastName: string, username: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

     public name(): string {
        return `${this.firstName} ${this.lastName}`;
     }
}


