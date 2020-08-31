import { Car } from '@/domain/entities/car'

export interface ListCarByBrand {
  listCarByBrand: (brand: string) => Promise<Car[]>
}
