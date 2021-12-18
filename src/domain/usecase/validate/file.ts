import { CreateFileEntity } from '../../entity/file'

interface CreateFileUseCaseValidateInterface {
    createFile(file: CreateFileEntity): string
}

export { 
    CreateFileUseCaseValidateInterface
}
