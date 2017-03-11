import { Webpage } from './webpage';
import { Website } from './website';

export class Editable {
    public contentType: cType;
    public cloneable: boolean;
    public id: number;
    public name: string;
    protected children: Editable[];
    protected parent_id: number;
    protected webpage: Webpage;
    protected website: Website;
}


enum cType {
    heading,
    text,
    image,
    video,
    audio,
    file,
    other
}
