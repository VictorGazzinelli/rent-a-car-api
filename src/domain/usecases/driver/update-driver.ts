import { Driver } from '@/domain/entities/driver'

export type UpdateDriverParams = Driver

export interface UpdateDriver {
  update: (data: UpdateDriverParams) => Promise<Driver>
}
