import { Observable } from 'rxjs';
import { IActivity } from '../model/activity.model';

export abstract class ActivityRepository {
  abstract getAllActivity(): Observable<IActivity[]>;
}
