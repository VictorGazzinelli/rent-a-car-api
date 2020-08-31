import { Driver } from '@/domain/entities/driver'

export interface FindDriverByIdRepository {
  findById: (id: string) => Promise<Driver>
}
