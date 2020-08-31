import { Driver } from '@/domain/entities/driver'

export interface DeleteDriver {
  delete: (id: string) => Promise<Driver>
}
