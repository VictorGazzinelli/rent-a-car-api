import { Car } from '@/domain/entities/car'

export type AddCarParams = Omit<Car, 'id'>

export interface AddCar {
  add: (data: AddCarParams) => Promise<Car>
}
