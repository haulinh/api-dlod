import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DlodDataSource} from '../datasources';
import {Tour, TourRelations} from '../models';

export class TourRepository extends DefaultCrudRepository<
  Tour,
  typeof Tour.prototype.id,
  TourRelations
> {
  constructor(
    @inject('datasources.dlod') dataSource: DlodDataSource,
  ) {
    super(Tour, dataSource);
  }
}
