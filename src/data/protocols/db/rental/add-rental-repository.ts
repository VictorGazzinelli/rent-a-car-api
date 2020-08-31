import { AddRentalParams } from '@/domain/usecases/rental/add-rental'
import { Rental } from '@/domain/entities/rental'

export interface AddRentalRepository {
  add: (data: AddRentalParams) => Promise<Rental>
}
