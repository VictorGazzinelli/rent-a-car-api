import { AddCarController } from './add-car-controller'
import { MissingParamError, ServerError } from '@/presentation/errors'
import { HttpRequest } from '@/presentation/protocols'
import { ok, serverError, badRequest } from '@/presentation/helpers/http/http-helper'
import { AddCarSpy, ValidationSpy } from '@/presentation/test'
import { throwError } from '@/domain/test'
import faker from 'faker'

const mockRequest = (): HttpRequest => {
  return {
    body: {
      plate: faker.internet.password(7, false, /[0-9A-Z]/),
      color: faker.internet.color(),
      brand: faker.lorem.words(2)
    }
  }
}

type SutTypes = {
  sut: AddCarController
  addCarSpy: AddCarSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addCarSpy = new AddCarSpy()
  const validationSpy = new ValidationSpy()
  const sut = new AddCarController(addCarSpy, validationSpy)
  return {
    sut,
    addCarSpy,
    validationSpy
  }
}

describe('AddCar Controller', () => {
  test('Should return 200 if valid data is provided', async () => {
    const { sut, addCarSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(addCarSpy.car))
  })

  test('Should return 500 if AddCar throws', async () => {
    const { sut, addCarSpy } = makeSut()
    jest.spyOn(addCarSpy, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call AddCar with correct values', async () => {
    const { sut, addCarSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addCarSpy.addCarParams).toEqual({
      plate: httpRequest.body.plate,
      color: httpRequest.body.color,
      brand: httpRequest.body.brand
    })
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.input).toEqual(httpRequest.body)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.random.word())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
