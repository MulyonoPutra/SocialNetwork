import { Component, OnInit } from '@angular/core';
import { IActivity } from 'src/app/core/model/activity.model';
import { IChannels } from 'src/app/core/model/channels.model';
import { ActivityRepository } from 'src/app/core/repository/activity.repository';
import { ChannelsRepository } from 'src/app/core/repository/channels.repository';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css'],
})
export class SocialNetworkComponent implements OnInit {
  public activities: IActivity[] = [];

  public channels: IChannels[] = [];

  constructor(
    private activitiesService: ActivityRepository,
    private channelsService: ChannelsRepository
  ) {}

  ngOnInit(): void {
    this.getAllActivity();
    this.getAllChannels();
  }

  /* Get all data from Activity List*/
  getAllActivity(): void {
    this.activities = [];
    this.activitiesService.getAllActivity().subscribe((value: IActivity[]) => {
      this.activities = value;
      console.log(value);
    });
  }

  /* Get all data from Channel List */
  getAllChannels(): void {
    this.channels = [];
    this.channelsService.getAllChannels().subscribe((value: IChannels[]) => {
      this.channels = value;
      console.log(value);
    });
  }

  calculateDiff(date: any) {
    let start = new Date().getTime();
    let end = new Date(date.createdDate).getTime();
    let time = start - end;
    let diffDay = Math.floor(time / 86400000);
    let diffHours = Math.floor((time % 86400000) / 3600000);
    let diffMinutes = Math.floor((time % 86400000) % 3600000) / 60000;

    if (diffDay >= 1) {
      return diffDay;
    } else {
      return diffHours;
    }
  }

  hourTime(key: any) {
    let start = new Date().getTime();
    let end = new Date(key.createdDate).getTime();
    let time = start - end;
    let diffDay = Math.floor(time / 86400000);
    let diffHours = Math.floor(time % 86400000);
    let diffMinutes = Math.floor((time % 86400000) % 3600000) / 60000;

    if (diffDay >= 1) {
      return (key = 'Days Ago');
    } else {
      return (key = 'Hours Ago');
    }
  }
}
