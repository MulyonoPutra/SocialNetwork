import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Activity, IActivity } from "../../model/activity.model";
import { ActivityRepository } from "../../repository/activity.repository";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActivityServiceImpl extends ActivityRepository {
  public activity!: Activity;

  constructor(private http: HttpClient) {
    super();
  }

  getAllActivity(): Observable<IActivity[]> {
    return this.http.get<any>(environment.baseEndpoint + 'activity');
  }


}
