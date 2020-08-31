import { AddDriverParams } from '@/domain/usecases/driver/add-driver'
import { Driver } from '@/domain/entities/driver'

export interface AddDriverRepository {
  add: (data: AddDriverParams) => Promise<Driver>
}
