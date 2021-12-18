import { Response } from "express"
import { SuccessResponse } from "../response/response"
import { CreateFileResponseEntity } from "../../../../domain/entity/file"
import { CreateFileUseCase } from "../../../../domain/usecase/file"
import { CreateFileUseCaseValidate } from "../../../../infrastructure/provider/validate/file"
import { CreateFileUseCaseRepository } from "../../../../infrastructure/provider/repository/file"
import { CreateFileUseCaseRequest } from "../../../../domain/usecase/ucio/file"

class CreateFileController {
    async createFile(req: any, res: Response): Promise<CreateFileResponseEntity> {
        const originalname = req.file.originalname
        const mimetype = req.file.mimetype
        const buffer = req.file.buffer

        const ucReq = new CreateFileUseCaseRequest(originalname, mimetype, buffer)

        const validate = new CreateFileUseCaseValidate()
        const repository = new CreateFileUseCaseRepository()
        const usecase = new CreateFileUseCase(validate, repository)

        const ucRes = await usecase.createFile(ucReq)
        return new SuccessResponse().success(res, ucRes)
    }
}

export {
    CreateFileController
}
