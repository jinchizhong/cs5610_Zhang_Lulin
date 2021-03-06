import {Component, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  newpage: Page;
  userId: string;
  websiteId: string;
  newPageName: string;
  newPageDescrption: string;

  constructor(private  pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      console.log('page-new, user_id = ' + this.userId + ', website id = ' + this.websiteId);
    });
  }

  createPage() {
    this.newpage = new Page('', this.newPageName, this.websiteId, this.newPageDescrption);
    this.pageService.createPage(this.websiteId, this.newpage);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
