import { CarMemoryRepository } from './car-memory-repository'
import { mockAddCarParams, mockCar } from '@/domain/test'

const makeSut = (): CarMemoryRepository => {
  return new CarMemoryRepository([])
}

describe('CarMemoryRepository', () => {
  describe('add()', () => {
    it('should add a new car when given correct params', async () => {
      const sut = makeSut()
      const addCarParams = mockAddCarParams()
      const car = await sut.add(addCarParams)
      expect(car).toBeTruthy()
      expect(car.id).toBeTruthy()
      expect(car.brand).toBe(addCarParams.brand)
      expect(car.color).toBe(addCarParams.color)
      expect(car.plate).toBe(addCarParams.plate)
    })
  })

  describe('findById()', () => {
    it('should find a car when correct id is given', async () => {
      const sut = makeSut()
      const addCarParams = mockAddCarParams()
      const car = await sut.add(addCarParams)
      const sameCar = await sut.findById(car.id)
      expect(car).toBe(sameCar)
    })
  })

  describe('listByBrand()', () => {
    it('should find a car when correct brand is given', async () => {
      const sut = makeSut()
      const addCarParams = mockAddCarParams()
      const car = await sut.add(addCarParams)
      const cars = await sut.listByBrand(car.brand)
      expect(car).toBe(cars.pop())
    })
  })

  describe('listByColor()', () => {
    it('should find a car when correct color is given', async () => {
      const sut = makeSut()
      const addCarParams = mockAddCarParams()
      const car = await sut.add(addCarParams)
      const cars = await sut.listByColor(car.color)
      expect(car).toBe(cars.pop())
    })
  })

  describe('update()', () => {
    it('should update a car when correct color is given', async () => {
      const sut = makeSut()
      const addCarParams = mockAddCarParams()
      let car = await sut.add(addCarParams)
      let newCar = mockCar()
      car = await sut.update({ ...newCar, id: car.id })
      newCar = await sut.findById(car.id)
      expect(newCar).toBeTruthy()
      expect(newCar.id).toBe(car.id)
      expect(newCar.brand).toBe(car.brand)
      expect(newCar.color).toBe(car.color)
      expect(newCar.plate).toBe(car.plate)
    })
  })

  describe('delete()', () => {
    it('should delete a car when correct id is given', async () => {
      const sut = makeSut()
      const addCarParams = mockAddCarParams()
      const { id } = await sut.add(addCarParams)
      const car = await sut.delete(id)
      expect(car).toBeTruthy()
      expect(car.id).toBeTruthy()
      expect(car.brand).toBe(addCarParams.brand)
      expect(car.color).toBe(addCarParams.color)
      expect(car.plate).toBe(addCarParams.plate)
      expect(await sut.findById(car.id)).toBeFalsy()
    })
  })
})
