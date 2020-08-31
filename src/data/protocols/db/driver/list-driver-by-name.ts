import { Driver } from '@/domain/entities/driver'

export interface ListDriverByNameRepository {
  listByName: (name: string) => Promise<Driver[]>
}
