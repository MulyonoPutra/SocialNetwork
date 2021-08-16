import { Observable } from 'rxjs';
import { IChannels } from '../model/channels.model';

export abstract class ChannelsRepository {
  abstract getAllChannels(): Observable<IChannels[]>;
}
