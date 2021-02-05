import {Entity, model, property} from '@loopback/repository';

@model()
export class Hotel extends Entity {
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
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    default: 0,
  })
  discount?: number;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'number',
    required: true,
  })
  star: number;

  @property({
    type: 'object',
    // required: true,cons
  })
  location: object;

  @property({
    type: 'boolean',
    // required: true,
  })
  isHaveParkingLot: boolean;

  @property({
    type: 'string',
  })
  review?: string;

  @property({
    type: 'string',
  })
  district?: string;

  @property({
    type: 'string',
  })
  image?: string;

  constructor(data?: Partial<Hotel>) {
    super(data);
  }
}

export interface HotelRelations {
  // describe navigational properties here
}

export type HotelWithRelations = Hotel & HotelRelations;
