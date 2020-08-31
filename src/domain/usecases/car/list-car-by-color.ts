import { Car } from '@/domain/entities/car'

export interface ListCarByColor {
  listCarByColor: (color: string) => Promise<Car[]>
}
