import { Car } from '@/domain/entities/car'

export interface FindCarByIdRepository {
  findById: (id: string) => Promise<Car>
}
