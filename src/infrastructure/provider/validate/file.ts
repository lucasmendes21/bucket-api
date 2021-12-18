import { CreateFileUseCaseValidateInterface } from '../../../domain/usecase/validate/file'
import { CreateFileEntity } from '../../../domain/entity/file'
import { checkStringEmpty, checkObjectEmpty } from './validate'

class CreateFileUseCaseValidate implements CreateFileUseCaseValidateInterface {
    createFile(file: CreateFileEntity): string {
        if (checkStringEmpty(file.originalname)) return 'O nome da imagem não pode ser vazio..'

        if (checkStringEmpty(file.mimetype)) return 'O mimetype da imagem não pode ser vazio.'

        if (checkObjectEmpty(file.buffer)) return 'O buffer da imagem não pode ser vazio.'
        
        return null
    }
}

export {
    CreateFileUseCaseValidate
}
