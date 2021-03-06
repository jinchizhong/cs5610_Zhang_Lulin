import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: User;
  websites: Website[];
  web: Website;
  errorFlag: boolean;
  errorMsg = 'Cannot create website !';

  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websites = this.websiteService.findWebsitesByUser(params['uid']);
      this.web = this.websiteService.findWebsiteById(params['wid']);
      console.log('website-edit, user_id =' + this.userId, ', webstie id =', +this.web._id);
    });
  }

  updateWeb(website: Website) {
    console.log(this.web);
    this.websiteService.updateWebsite(this.web._id, this.web);
    this.router.navigate((['/user', this.userId, 'website']));
  }

  deleteWeb() {
    console.log(this.web);
    this.websiteService.deleteWebsite(this.web._id);
    this.router.navigate((['/user', this.userId, 'website']));
  }

}
