require('dotenv').config()

import { google } from 'googleapis'
import { CreateFileResponseEntity } from '../../../../domain/entity/file'

const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL)
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

async function createFile(filename: string, mimetype: string, stream: any): Promise<CreateFileResponseEntity> {
    const response = await drive.files.create({
        requestBody: {
            name: filename,
            mimeType: mimetype
        },
        media: {
            mimeType: mimetype,
            body: stream
        }
    })

    if (response.data) {
        return new CreateFileResponseEntity(response.data.id, response.data.name)
    }

    return new CreateFileResponseEntity(null, null)
}

export {
    createFile
}
