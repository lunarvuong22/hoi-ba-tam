import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  data:Group = {
    topic:'',
    date: new Date().getTime(),
  }

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  
  }

  onSubmitForm = () => {
    if (this.data.topic !== '') {
      this.groupService.createGroup(this.data);
      this.data.topic = ''
    }
  }
}
