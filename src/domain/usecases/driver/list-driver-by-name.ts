import { Driver } from '@/domain/entities/driver'

export interface ListDriverByName {
  listDriverByName: (name: string) => Promise<Driver>
}
