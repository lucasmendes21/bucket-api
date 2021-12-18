import { CreateFileUseCaseRepositoryInterface } from '../../../domain/usecase/repository/file'
import { CreateFileResponseEntity } from '../../../domain/entity/file'
import { createFile } from '../../internal/api/drive/file'

class CreateFileUseCaseRepository implements CreateFileUseCaseRepositoryInterface {
    async createFile(filename: string, mimetype: string, stream: any): Promise<CreateFileResponseEntity> {
        return await createFile(filename, mimetype, stream)
    }
}

export {
    CreateFileUseCaseRepository
}
