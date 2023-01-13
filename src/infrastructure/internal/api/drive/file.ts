// video de configuração drive -> https://www.youtube.com/watch?v=GSHc5vlj6aQ&ab_channel=Code11Programa%C3%A7%C3%A3o
// pegar o json => https://console.cloud.google.com/apis/credentials
import { google } from 'googleapis'
import { CreateFileResponseEntity } from '../../../../domain/entity/file'

const GOOGLE_DRIVE_FOLDER_ID = '17l0f0XQYlKF7enEpl4RZbLFJGnOUdL3q'
const auth = new google.auth.GoogleAuth({ keyFile: './googledrive.json', scopes: ['https://www.googleapis.com/auth/drive'] })
const drive = google.drive({ version: 'v3', auth })

async function createFile(filename: string, mimetype: string, stream: any): Promise<CreateFileResponseEntity> {
    const response = await drive.files.create({
        requestBody: {
            name: filename,
            parents: [GOOGLE_DRIVE_FOLDER_ID],
            mimeType: mimetype
        },
        media: {
            mimeType: mimetype,
            body: stream,
        }
    })

    if (response.data) {
        const link = `https://docs.google.com/uc?id=${response.data.id}`
        return new CreateFileResponseEntity(response.data.id, response.data.name, link)
    }

    return new CreateFileResponseEntity(null, null, null)
}

export {
    createFile
}
