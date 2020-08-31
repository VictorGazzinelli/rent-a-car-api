import { Rental } from '@/domain/entities/rental'

export interface ListRental {
  list: () => Promise<Rental[]>
}
