import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from '../model/activity.model';
import { ActivityRepository } from '../repository/activity.repository';

@Injectable()
export class ActivityService extends ActivityRepository {
  constructor(private cardsRepository: ActivityRepository) {
    super();
  }

  getAllActivity(): Observable<IActivity[]> {
    return this.cardsRepository.getAllActivity();
  }
}
