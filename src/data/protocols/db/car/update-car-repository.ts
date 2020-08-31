import { Car } from '@/domain/entities/car'

export interface UpdateCarRepository {
  update: (data: Car) => Promise<Car>
}
