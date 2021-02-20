import {Entity, model, property} from '@loopback/repository';

@model()
export class Tour extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  start?: string;

  @property({
    type: 'string',
  })
  time?: string;

  @property({
    type: 'string',
    required: true,
  })
  departure: string;

  @property({
    type: 'string',
    required: true,
  })
  schedule: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  url?: string;


  constructor(data?: Partial<Tour>) {
    super(data);
  }
}

export interface TourRelations {
  // describe navigational properties here
}

export type TourWithRelations = Tour & TourRelations;
