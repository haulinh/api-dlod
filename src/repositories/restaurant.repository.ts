import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DlodDataSource} from '../datasources';
import {Restaurant, RestaurantRelations} from '../models';

export class RestaurantRepository extends DefaultCrudRepository<
  Restaurant,
  typeof Restaurant.prototype.id,
  RestaurantRelations
> {
  constructor(
    @inject('datasources.dlod') dataSource: DlodDataSource,
  ) {
    super(Restaurant, dataSource);
  }
}
