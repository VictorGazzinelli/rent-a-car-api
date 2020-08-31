import { Rental } from '@/domain/entities/rental'

export type EndRentalParams = Pick<Rental, 'id' | 'endedAt'>

export interface EndRental {
  end: (data: EndRentalParams) => Promise<Rental>
}
