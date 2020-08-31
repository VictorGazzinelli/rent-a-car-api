import { AddCarParams } from '@/domain/usecases/car/add-car'
import { Car } from '@/domain/entities/car'

export interface AddCarRepository {
  add: (data: AddCarParams) => Promise<Car>
}
