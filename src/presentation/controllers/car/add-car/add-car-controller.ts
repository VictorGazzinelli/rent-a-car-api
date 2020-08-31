import { HttpResponse, HttpRequest, Controller, AddCar, Car } from './add-car-controller-protocols'
import { badRequest, serverError, ok } from '@/presentation/helpers/http/http-helper'
import { Validation } from '@/presentation/protocols/validation'

export class AddCarController implements Controller {
  constructor (
    private readonly addCar: AddCar,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { plate, color, brand } = httpRequest.body
      const car: Car = await this.addCar.add({
        plate,
        color,
        brand
      })
      return ok(car)
    } catch (error) {
      return serverError(error)
    }
  }
}
