import { RentalMemoryRepository } from './rental-memory-repository'
import { mockAddRentalParams } from '@/domain/test'
import faker from 'faker'

const makeSut = (): RentalMemoryRepository => {
  return new RentalMemoryRepository([])
}

describe('RentalMemoryRepository', () => {
  describe('add()', () => {
    it('should add a new rental when given correct params', async () => {
      const sut = makeSut()
      const addRentalParams = mockAddRentalParams()
      const rental = await sut.add(addRentalParams)
      expect(rental).toBeTruthy()
      expect(rental.id).toBeTruthy()
      expect(rental.createdAt).toBe(addRentalParams.createdAt)
      expect(rental.endedAt).toBe(addRentalParams.endedAt)
      expect(rental.driver).toBe(addRentalParams.driver)
      expect(rental.car).toBe(addRentalParams.car)
      expect(rental.reason).toBe(addRentalParams.reason)
    })
  })

  describe('end()', () => {
    it('should end a rental when correct parametrs are given', async () => {
      const sut = makeSut()
      const addRentalParams = mockAddRentalParams()
      const rental = await sut.add(addRentalParams)
      const endedRental = await sut.end({ id: rental.id, endedAt: faker.date.recent(1) })
      expect(endedRental).toBeTruthy()
      expect(endedRental.id).toBe(rental.id)
      expect(endedRental.createdAt).toBe(rental.createdAt)
      expect(endedRental.endedAt).not.toBe(rental.endedAt)
      expect(endedRental.driver).toBe(rental.driver)
      expect(endedRental.car).toBe(rental.car)
      expect(endedRental.reason).toBe(rental.reason)
    })
  })

  describe('list()', () => {
    it('should list all rentals', async () => {
      const sut = makeSut()
      const addRentalParams = mockAddRentalParams()
      const rental = await sut.add(addRentalParams)
      const rentals = await sut.list()
      expect(rental).toBe(rentals.pop())
    })
  })
})
