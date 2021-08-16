import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Channels, IChannels } from "../../model/channels.model";
import { ChannelsRepository } from "../../repository/channels.repository";


@Injectable()
export class ChannelsServiceImpl extends ChannelsRepository {
  public channels!: Channels;

  constructor(private http: HttpClient) {
    super();
  }

  getAllChannels(): Observable<IChannels[]> {
    return this.http.get<any>(environment.baseEndpoint + 'channels');
  }
}
