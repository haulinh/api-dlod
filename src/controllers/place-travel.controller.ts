import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {PlaceTravel} from '../models';
import {PlaceTravelRepository} from '../repositories';

export class PlaceTravelController {
  constructor(
    @repository(PlaceTravelRepository)
    public placeTravelRepository : PlaceTravelRepository,
  ) {}

  @post('/place-travels', {
    responses: {
      '200': {
        description: 'PlaceTravel model instance',
        content: {'application/json': {schema: getModelSchemaRef(PlaceTravel)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlaceTravel, {
            title: 'NewPlaceTravel',
            exclude: ['id'],
          }),
        },
      },
    })
    placeTravel: Omit<PlaceTravel, 'id'>,
  ): Promise<PlaceTravel> {
    return this.placeTravelRepository.create(placeTravel);
  }

  @get('/place-travels/count', {
    responses: {
      '200': {
        description: 'PlaceTravel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PlaceTravel) where?: Where<PlaceTravel>,
  ): Promise<Count> {
    return this.placeTravelRepository.count(where);
  }

  @get('/place-travels', {
    responses: {
      '200': {
        description: 'Array of PlaceTravel model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PlaceTravel, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PlaceTravel) filter?: Filter<PlaceTravel>,
  ): Promise<PlaceTravel[]> {
    return this.placeTravelRepository.find(filter);
  }

  @patch('/place-travels', {
    responses: {
      '200': {
        description: 'PlaceTravel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlaceTravel, {partial: true}),
        },
      },
    })
    placeTravel: PlaceTravel,
    @param.where(PlaceTravel) where?: Where<PlaceTravel>,
  ): Promise<Count> {
    return this.placeTravelRepository.updateAll(placeTravel, where);
  }

  @get('/place-travels/{id}', {
    responses: {
      '200': {
        description: 'PlaceTravel model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PlaceTravel, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PlaceTravel, {exclude: 'where'}) filter?: FilterExcludingWhere<PlaceTravel>
  ): Promise<PlaceTravel> {
    return this.placeTravelRepository.findById(id, filter);
  }

  @patch('/place-travels/{id}', {
    responses: {
      '204': {
        description: 'PlaceTravel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlaceTravel, {partial: true}),
        },
      },
    })
    placeTravel: PlaceTravel,
  ): Promise<void> {
    await this.placeTravelRepository.updateById(id, placeTravel);
  }

  @put('/place-travels/{id}', {
    responses: {
      '204': {
        description: 'PlaceTravel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() placeTravel: PlaceTravel,
  ): Promise<void> {
    await this.placeTravelRepository.replaceById(id, placeTravel);
  }

  @del('/place-travels/{id}', {
    responses: {
      '204': {
        description: 'PlaceTravel DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.placeTravelRepository.deleteById(id);
  }
}
