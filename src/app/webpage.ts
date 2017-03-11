import { Website } from './website';
import { Editable } from './editable';

export class Webpage {
    public name: string;
    public id: number;
    public website: Website;
    protected editables: Editable[];
}
