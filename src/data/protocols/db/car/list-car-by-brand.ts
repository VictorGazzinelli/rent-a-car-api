import { Car } from '@/domain/entities/car'

export interface ListCarByBrandRepository {
  listByBrand: (brand: string) => Promise<Car[]>
}
