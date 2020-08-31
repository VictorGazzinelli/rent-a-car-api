import { Rental } from '@/domain/entities/rental'

export interface ListRentalRepository {
  list: () => Promise<Rental[]>
}
