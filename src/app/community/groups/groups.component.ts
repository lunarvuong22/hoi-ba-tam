import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  data:Group[];
  totalGroupsCount:number;

  constructor(
    private groupService:GroupService
  ) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => {
      this.data = groups;
      this.updateTotalGroupsCount();
    });
  }

  updateTotalGroupsCount = () => {
    this.groupService.getTotalGroupsCount().then(snap => {
      this.totalGroupsCount = snap.size;
    });
  }

}
