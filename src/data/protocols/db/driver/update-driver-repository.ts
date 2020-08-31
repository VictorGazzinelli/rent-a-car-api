import { Driver } from '@/domain/entities/driver'

export interface UpdateDriverRepository {
  update: (data: Driver) => Promise<Driver>
}
