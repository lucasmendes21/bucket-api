import { v4 as uuidGenerator } from 'uuid'
import { parse } from 'path'
import { convertBufferInStream } from './common/transform'
import { CreateFileUseCaseRequest, CreateFileUseCaseResponse } from './ucio/file'
import { CreateFileUseCaseRepositoryInterface } from './repository/file'
import { CreateFileUseCaseValidateInterface } from './validate/file'
import { TAG_PRE_CONDITIONAL_ERROR, TAG_INTERNAL_SERVER_ERROR, PreconditionError, InternalServerError } from '../entity/error'

class CreateFileUseCase {
    public validate: CreateFileUseCaseValidateInterface
    public repository: CreateFileUseCaseRepositoryInterface

    constructor(validate: CreateFileUseCaseValidateInterface, repository: CreateFileUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async createFile(req: CreateFileUseCaseRequest): Promise<CreateFileUseCaseResponse> {
        try {
            const errorMessage = this.validate.createFile(req)

            if (!errorMessage) {
                const { ext } = parse(req.originalname)
                const filename = `bucket-${uuidGenerator()}.${ext}`
                const stream = await convertBufferInStream(req.buffer)

                const file = await this.repository.createFile(filename, req.mimetype, stream)

                return new CreateFileUseCaseResponse(file, null)
            } else {
                console.log(TAG_PRE_CONDITIONAL_ERROR, errorMessage)
                return new CreateFileUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateFileUseCaseResponse(null, new InternalServerError(error))
        }
    }
}

export {
    CreateFileUseCase
}
