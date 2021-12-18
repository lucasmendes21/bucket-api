import { CreateFileResponseEntity } from '../../entity/file'
import { ErrorEntity } from '../../entity/error'

class CreateFileUseCaseRequest {
    public originalname: string
    public mimetype: string
    public buffer: Buffer

    constructor(originalname: string, mimetype: string, buffer: Buffer) {
        this.originalname = originalname
        this.mimetype = mimetype
        this.buffer = buffer
    }
}

class CreateFileUseCaseResponse {
    public file: CreateFileResponseEntity
    public error: ErrorEntity

    constructor(file: CreateFileResponseEntity, error: ErrorEntity) {
        this.file = file
        this.error = error
    }
}

export { 
    CreateFileUseCaseRequest,
    CreateFileUseCaseResponse
}
