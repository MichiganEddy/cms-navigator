import { Webpage } from './webpage';
import { SiteAdmin } from './site-admin';

export class Website {
    public name: string;
    public url: string;
    public pages: Webpage[];
    public admin: SiteAdmin;
    public altAdmin: SiteAdmin[];
}
