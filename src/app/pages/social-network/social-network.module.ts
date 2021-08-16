import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworkRoutingModule } from './social-network-routing.module';
import { SocialNetworkComponent } from './social-network.component';
import { ActivityRepository } from 'src/app/core/repository/activity.repository';
import { ChannelsRepository } from 'src/app/core/repository/channels.repository';
import { ActivityServiceImpl } from 'src/app/core/service/impl/activity.service-impl';
import { ChannelsServiceImpl } from 'src/app/core/service/impl/channels.service-impl';

@NgModule({
  declarations: [SocialNetworkComponent],
  imports: [CommonModule, SocialNetworkRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: ActivityRepository, useClass: ActivityServiceImpl },
    { provide: ChannelsRepository, useClass: ChannelsServiceImpl },
  ],
})
export class SocialNetworkModule {}
