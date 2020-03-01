import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {
  img: any = '1.jpg';

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
