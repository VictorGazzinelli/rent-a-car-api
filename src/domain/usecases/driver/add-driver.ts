import { Driver } from '@/domain/entities/driver'

export type AddDriverParams = Omit<Driver, 'id'>

export interface AddDriver {
  add: (data: AddDriverParams) => Promise<Driver>
}
