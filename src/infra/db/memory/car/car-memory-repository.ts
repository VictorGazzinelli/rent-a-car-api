import { AddCarParams } from '@/domain/usecases/car/add-car'
import { Car } from '@/domain/entities/car'
import { AddCarRepository } from '@/data/protocols/db/car/add-car-repository'
import { FindCarByIdRepository } from '@/data/protocols/db/car/find-car-by-id-repository'
import { ListCarByBrandRepository } from '@/data/protocols/db/car/list-car-by-brand'
import { ListCarByColorRepository } from '@/data/protocols/db/car/list-car-by-color'
import { UpdateCarRepository } from '@/data/protocols/db/car/update-car-repository'
import { DeleteCarRepository } from '@/data/protocols/db/car/delete-car-repository'
import faker from 'faker'
import { InvalidParamError } from '@/presentation/errors'

export class CarMemoryRepository implements AddCarRepository, DeleteCarRepository, FindCarByIdRepository, ListCarByBrandRepository, ListCarByColorRepository, UpdateCarRepository {
  private carsInMemory: Car[]

  constructor (carsInMemory: Car[]) {
    this.carsInMemory = carsInMemory
  }

  async add (data: AddCarParams): Promise<Car> {
    const id: string = faker.random.uuid()
    const car: Car = {
      id,
      color: data.color,
      brand: data.brand,
      plate: data.plate
    }
    this.carsInMemory.push(car)
    return Promise.resolve(car)
  }

  async delete (id: string): Promise<Car> {
    const item = this.carsInMemory.find(car => car.id === id)
    if (!item) { throw new InvalidParamError('id') }
    this.carsInMemory = this.carsInMemory.filter(car => car.id !== id)
    return Promise.resolve(item)
  }

  async findById (id: string): Promise<Car> {
    const item = this.carsInMemory.find(car => car.id === id)
    return Promise.resolve(item)
  }

  async listByBrand (brand: string): Promise<Car[]> {
    const items = this.carsInMemory.filter(car => car.brand === brand)
    return Promise.resolve(items)
  }

  async listByColor (color: string): Promise<Car[]> {
    const items = this.carsInMemory.filter(car => car.color === color)
    return Promise.resolve(items)
  }

  async update (data: Car): Promise<Car> {
    const index = this.carsInMemory.findIndex(car => car.id === data.id)
    if (~index) { this.carsInMemory[index] = data } else { throw new InvalidParamError('id') }
    return Promise.resolve(data)
  }
}
