import {DefaultCrudRepository} from '@loopback/repository';
import {PlaceTravel, PlaceTravelRelations} from '../models';
import {DlodDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlaceTravelRepository extends DefaultCrudRepository<
  PlaceTravel,
  typeof PlaceTravel.prototype.id,
  PlaceTravelRelations
> {
  constructor(
    @inject('datasources.dlod') dataSource: DlodDataSource,
  ) {
    super(PlaceTravel, dataSource);
  }
}
