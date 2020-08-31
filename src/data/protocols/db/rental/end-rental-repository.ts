import { Rental } from '@/domain/entities/rental'
import { EndRentalParams } from '@/domain/usecases/rental/end-rental'

export interface EndRentalRepository {
  end: (data: EndRentalParams) => Promise<Rental>
}
