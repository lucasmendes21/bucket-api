import { Router } from 'express'
import { CreateFileController } from '../controller/file'
import upload from '../middleware/multer'

class UploadFileRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.post('/createFile', upload.single('file'), new CreateFileController().createFile)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    UploadFileRouter
}
