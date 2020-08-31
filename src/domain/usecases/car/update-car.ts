import { Car } from '@/domain/entities/car'

export interface UpdateCar {
  update: (data: Car) => Promise<Car>
}
