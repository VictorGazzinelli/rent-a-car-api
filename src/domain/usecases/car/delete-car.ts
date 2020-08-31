import { Car } from '@/domain/entities/car'

export interface DeleteCar {
  delete: (id: string) => Promise<Car>
}
