import { Driver } from '@/domain/entities/driver'
import { AddDriverParams } from '@/domain/usecases/driver/add-driver'
import faker from 'faker'

faker.locale = 'pt_BR'

export const mockAddDriverParams = (): AddDriverParams => ({
  name: faker.name.findName()
})

export const mockDriver = (): Driver => ({
  id: faker.random.uuid(),
  name: faker.name.findName()
})
