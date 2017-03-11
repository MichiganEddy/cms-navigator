import { User } from './user';

export class SiteAdmin extends User {
    private accessToken: string;
    private hashword: string;

    constructor(firstName: string, lastName: string, username: string, email: string, password: string) {
        super(firstName, lastName, username, email, password);
    }

       public name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

}
