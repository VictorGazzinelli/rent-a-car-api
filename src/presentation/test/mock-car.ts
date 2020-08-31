import { AddCar, AddCarParams } from '@/domain/usecases/car/add-car'
import { Car } from '@/domain/entities/car'
import { mockCar } from '@/domain/test'

export class AddCarSpy implements AddCar {
  car = mockCar()
  addCarParams: AddCarParams

  async add (car: AddCarParams): Promise<Car> {
    this.addCarParams = car
    return this.car
  }
}
