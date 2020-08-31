import { Car } from '@/domain/entities/car'
import { AddCarParams } from '@/domain/usecases/car/add-car'
import faker from 'faker'

faker.locale = 'pt_BR'

export const mockAddCarParams = (): AddCarParams => ({
  plate: faker.internet.password(7, false, /[0-9A-Z]/),
  color: faker.internet.color(),
  brand: faker.lorem.words(2)
})

export const mockCar = (): Car => ({
  id: faker.random.uuid(),
  plate: faker.internet.password(7, false, /[0-9A-Z]/),
  color: faker.internet.color(),
  brand: faker.lorem.words(2)
})
