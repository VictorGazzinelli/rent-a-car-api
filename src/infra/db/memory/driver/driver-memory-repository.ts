import { AddDriverParams } from '@/domain/usecases/driver/add-driver'
import { Driver } from '@/domain/entities/driver'
import { AddDriverRepository } from '@/data/protocols/db/driver/add-driver-repository'
import { FindDriverByIdRepository } from '@/data/protocols/db/driver/find-driver-by-id-repository'
import { ListDriverByNameRepository } from '@/data/protocols/db/driver/list-driver-by-name'
import { UpdateDriverRepository } from '@/data/protocols/db/driver/update-driver-repository'
import { DeleteDriverRepository } from '@/data/protocols/db/driver/delete-driver-repository'
import faker from 'faker'
import { InvalidParamError } from '@/presentation/errors'

export class DriverMemoryRepository implements AddDriverRepository, DeleteDriverRepository, FindDriverByIdRepository,ListDriverByNameRepository, UpdateDriverRepository {
  private driversInMemory: Driver[]

  constructor (driversInMemory: Driver[]) {
    this.driversInMemory = driversInMemory
  }

  async add (data: AddDriverParams): Promise<Driver> {
    const id: string = faker.random.uuid()
    const driver: Driver = {
      id,
      name: data.name
    }
    this.driversInMemory.push(driver)
    return Promise.resolve(driver)
  }

  async delete (id: string): Promise<Driver> {
    const item = this.driversInMemory.find(driver => driver.id === id)
    if (!item) { throw new InvalidParamError('id') }
    this.driversInMemory = this.driversInMemory.filter(driver => driver.id !== id)
    return Promise.resolve(item)
  }

  async findById (id: string): Promise<Driver> {
    const item = this.driversInMemory.find(driver => driver.id === id)
    return Promise.resolve(item)
  }

  async listByName (name: string): Promise<Driver[]> {
    const items = this.driversInMemory.filter(driver => driver.name.includes(name))
    return Promise.resolve(items)
  }

  async update (data: Driver): Promise<Driver> {
    const index = this.driversInMemory.findIndex(driver => driver.id === data.id)
    if (~index) { this.driversInMemory[index] = data } else { throw new InvalidParamError('id') }
    return Promise.resolve(data)
  }
}
