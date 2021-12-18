import * as express from 'express'
import { CorsRouter } from './cors'
import { UploadFileRouter } from './file'

class Router {
	constructor(app: express.Router) {
		app.use(new CorsRouter().getRouter())
        app.use(new UploadFileRouter().getRouter())
	}
}

export { Router }
