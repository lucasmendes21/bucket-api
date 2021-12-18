import { CreateFileResponseEntity } from '../../entity/file'

interface CreateFileUseCaseRepositoryInterface {
    createFile(filename: string, mimetype: string, stream: any): Promise<CreateFileResponseEntity>
}

export {
    CreateFileUseCaseRepositoryInterface
}
