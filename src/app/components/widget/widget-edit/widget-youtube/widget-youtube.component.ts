import {Component, OnInit} from '@angular/core';
import {Widget, WidgetYoutube} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  widget = new WidgetYoutube('', '', '', '', '');
  userId: string;
  pageId: string;
  widgetId: string;
  newWidget: Widget;
  newWidgetWidth: string;
  newWidgetURL: string;
  name: string;
  text: string;

  constructor(private  widgetService: WidgetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
    });
    if (this.widgetId !== 'undefined') {
      // @ts-ignore
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    }
  }

  updateWidget() {
    if (this.widgetId === 'undefined') {
      this.newWidget = new WidgetYoutube('', 'YOUTUBE', this.pageId, this.widget.width, this.widget.url);
      this.widgetService.createWidget(this.pageId, this.newWidget).subscribe();
    } else {
      this.newWidget = new WidgetYoutube(this.widgetId, 'YOUTUBE', this.pageId, this.widget.width, this.widget.url);
      this.widgetService.updateWidget(this.widget._id, this.newWidget).subscribe();
    }
    // this.router.navigate(['../'], {relativeTo: this.route});
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widget._id).subscribe();
    // this.router.navigate(['../'], {relativeTo: this.route});
  }

}
