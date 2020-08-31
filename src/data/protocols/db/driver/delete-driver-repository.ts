import { Driver } from '@/domain/entities/driver'

export interface DeleteDriverRepository {
  delete: (id: string) => Promise<Driver>
}
