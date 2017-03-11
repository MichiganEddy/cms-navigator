import { Component, OnInit, Input } from '@angular/core';
import { Website } from '../website';
import { Webpage } from '../webpage';
import { Editable } from '../editable';
import { SiteAdmin } from '../site-admin';

@Component({
  selector: 'app-site-admin',
  templateUrl: './site-admin.component.html',
  styleUrls: ['./site-admin.component.css']
})
export class SiteAdminComponent implements OnInit {

  @Input() siteAdmin: SiteAdmin;
  @Input() websites: Website[];
  @Input() webpages: Webpage[];
  @Input() editables: Editable[];

  constructor() { }

  ngOnInit() {
  }

}
