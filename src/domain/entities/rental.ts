import { Car } from '@/domain/entities/car'
import { Driver } from '@/domain/entities/driver'

export interface Rental {
  id: string
  createdAt: Date
  endedAt: Date | null
  driver: Driver
  car: Car
  reason: string
}
