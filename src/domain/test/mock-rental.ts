import { Rental } from '@/domain/entities/rental'
import { AddRentalParams } from '@/domain/usecases/rental/add-rental'
import faker from 'faker'
import { mockDriver } from './mock-driver'
import { mockCar } from './mock-car'

faker.locale = 'pt_BR'

export const fakeCreatedAt = faker.date.recent(365)
export const fakeEndedAt = faker.date.between(fakeCreatedAt, new Date())

export const mockAddRentalParams = (): AddRentalParams => ({
  createdAt: fakeCreatedAt,
  endedAt: fakeEndedAt.getDay() % 4 === 3 ? fakeEndedAt : null ,
  driver: mockDriver(),
  car: mockCar(),
  reason: faker.lorem.words(10)
})

export const mockRental = (): Rental => ({
  id: faker.random.uuid(),
  createdAt: fakeCreatedAt,
  endedAt: fakeEndedAt.getDay() % 4 === 3 ? fakeEndedAt : null ,
  driver: mockDriver(),
  car: mockCar(),
  reason: faker.lorem.words(10)
})
