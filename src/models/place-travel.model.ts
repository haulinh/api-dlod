import {Entity, model, property} from '@loopback/repository';

@model()
export class PlaceTravel extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isHot: boolean;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'object',
  })
  location?: object;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  website?: string;

  @property({
    type: 'string',
  })
  review?: string;

  @property({
    type: 'string',
  })
  star?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  district?: string;

  constructor(data?: Partial<PlaceTravel>) {
    super(data);
  }
}

export interface PlaceTravelRelations {
  // describe navigational properties here
}

export type PlaceTravelWithRelations = PlaceTravel & PlaceTravelRelations;
