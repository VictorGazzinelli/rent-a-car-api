import { Driver } from '@/domain/entities/driver'

export interface FindDriverById {
  findDriverById: (id: string) => Promise<Driver>
}
