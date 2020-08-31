import { Car } from '@/domain/entities/car'

export interface DeleteCarRepository {
  delete: (id: string) => Promise<Car>
}
