import { Rental } from '@/domain/entities/rental'

export type AddRentalParams = Omit<Rental, 'id'>

export interface AddRental {
  add: (data: AddRentalParams) => Promise<Rental>
}
