import { Car } from '@/domain/entities/car'

export interface FindCarById {
  findCarById: (id: string) => Promise<Car>
}
