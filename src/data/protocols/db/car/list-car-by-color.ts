import { Car } from '@/domain/entities/car'

export interface ListCarByColorRepository {
  listByColor: (color: string) => Promise<Car[]>
}
