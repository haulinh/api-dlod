import {Entity, model, property} from '@loopback/repository';

@model()
export class Restaurant extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  review?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'object',
  })
  location?: object;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  menu: object[];

  @property({
    type: 'string',
    required: true,
  })
  openTime: string;

  @property({
    type: 'number',
  })
  lowestPrice?: number;

  @property({
    type: 'number',
  })
  highestPrice?: number;


  constructor(data?: Partial<Restaurant>) {
    super(data);
  }
}

export interface RestaurantRelations {
  // describe navigational properties here
}

export type RestaurantWithRelations = Restaurant & RestaurantRelations;
