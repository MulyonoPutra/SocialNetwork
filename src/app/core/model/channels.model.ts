export interface IChannels {
  id?: number;
  channelsName?: string;
  description?: string;
}

export class Channels implements IChannels {
  constructor(
    public id?: number,
    public channelsName?: string,
    public description?: string
  ) {}
}
