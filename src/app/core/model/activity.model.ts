export interface IActivity {
  id?: number;
  username?: string;
  position?: string;
  title?: string;
  action?: string;
  createdDate?: string;
  views?: string;
}

export class Activity implements IActivity {
  constructor(
    public id?: number,
    public username?: string,
    public position?: string,
    public title?: string,
    public action?: string,
    public createdDate?: string,
    public views?: string
  ) {}
}
