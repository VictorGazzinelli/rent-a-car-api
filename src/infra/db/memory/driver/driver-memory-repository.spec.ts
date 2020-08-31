import { DriverMemoryRepository } from './driver-memory-repository'
import { mockAddDriverParams, mockDriver } from '@/domain/test'

const makeSut = (): DriverMemoryRepository => {
  return new DriverMemoryRepository([])
}

describe('DriverMemoryRepository', () => {
  describe('add()', () => {
    it('should add a new driver when given correct params', async () => {
      const sut = makeSut()
      const addDriverParams = mockAddDriverParams()
      const driver = await sut.add(addDriverParams)
      expect(driver).toBeTruthy()
      expect(driver.id).toBeTruthy()
      expect(driver.name).toBe(addDriverParams.name)
    })
  })

  describe('findById()', () => {
    it('should find a driver when correct id is given', async () => {
      const sut = makeSut()
      const addDriverParams = mockAddDriverParams()
      const driver = await sut.add(addDriverParams)
      const sameDriver = await sut.findById(driver.id)
      expect(driver).toBe(sameDriver)
    })
  })

  describe('listByName()', () => {
    it('should find a driver when correct brand is given', async () => {
      const sut = makeSut()
      const addDriverParams = mockAddDriverParams()
      const driver = await sut.add(addDriverParams)
      const drivers = await sut.listByName(driver.name)
      expect(driver).toBe(drivers.pop())
    })
  })

  describe('update()', () => {
    it('should update a driver when correct color is given', async () => {
      const sut = makeSut()
      const addDriverParams = mockAddDriverParams()
      let driver = await sut.add(addDriverParams)
      let newDriver = mockDriver()
      driver = await sut.update({ ...newDriver, id: driver.id })
      newDriver = await sut.findById(driver.id)
      expect(newDriver).toBeTruthy()
      expect(newDriver.id).toBe(driver.id)
      expect(newDriver.name).toBe(driver.name)
    })
  })

  describe('delete()', () => {
    it('should delete a driver when correct id is given', async () => {
      const sut = makeSut()
      const addDriverParams = mockAddDriverParams()
      const { id } = await sut.add(addDriverParams)
      const driver = await sut.delete(id)
      expect(driver).toBeTruthy()
      expect(driver.id).toBeTruthy()
      expect(driver.name).toBe(addDriverParams.name)
      expect(await sut.findById(driver.id)).toBeFalsy()
    })
  })
})
