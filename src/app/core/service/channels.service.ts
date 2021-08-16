import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IChannels } from "../model/channels.model";
import { ChannelsRepository } from "../repository/channels.repository";


@Injectable()
export class ChannelsService extends ChannelsRepository {
  constructor(private cardsRepository: ChannelsRepository) {
    super();
  }

  getAllChannels(): Observable<IChannels[]> {
    return this.cardsRepository.getAllChannels();
  }
}
