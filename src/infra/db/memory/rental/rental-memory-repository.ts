import { AddRentalParams } from '@/domain/usecases/rental/add-rental'
import { Rental } from '@/domain/entities/rental'
import { AddRentalRepository } from '@/data/protocols/db/rental/add-rental-repository'
import { ListRentalRepository } from '@/data/protocols/db/rental/list-rental-repository'
import { EndRentalRepository } from '@/data/protocols/db/rental/end-rental-repository'
import faker from 'faker'
import { InvalidParamError } from '@/presentation/errors'
import { EndRentalParams } from '@/domain/usecases/rental/end-rental'

export class RentalMemoryRepository implements AddRentalRepository, EndRentalRepository, ListRentalRepository {
  private rentalsInMemory: Rental[]

  constructor (rentalsInMemory: Rental[]) {
    this.rentalsInMemory = rentalsInMemory
  }

  async add (data: AddRentalParams): Promise<Rental> {
    const id: string = faker.random.uuid()
    const rental: Rental = {
      id,
      createdAt: data.createdAt,
      endedAt: data.endedAt,
      driver: data.driver,
      car: data.car,
      reason: data.reason
    }
    this.rentalsInMemory.push(rental)
    return Promise.resolve(rental)
  }

  async list (): Promise<Rental[]> {
    return Promise.resolve(this.rentalsInMemory)
  }

  async end (data: EndRentalParams): Promise<Rental> {
    const index = this.rentalsInMemory.findIndex(rental => rental.id === data.id)
    if (~index) { this.rentalsInMemory[index] = { ...this.rentalsInMemory[index], endedAt: data.endedAt } } else { throw new InvalidParamError('id') }
    return Promise.resolve({ ...this.rentalsInMemory[index], endedAt: data.endedAt })
  }
}
