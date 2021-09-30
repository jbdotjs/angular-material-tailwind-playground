import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirstserviceService } from 'src/app/services/firstservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service: FirstserviceService) { }

  posts: any;

  ngOnInit(): void {
    this.service.getData().subscribe(data => this.posts = data);
  }

  logVal() {
    console.log(this.posts)
  }
}
