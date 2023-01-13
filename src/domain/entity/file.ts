class CreateFileEntity {
    public originalname: string
    public mimetype: string
    public buffer: Buffer

    constructor(originalname: string, mimetype: string, buffer: Buffer) {
        this.originalname = originalname
        this.mimetype = mimetype
        this.buffer = buffer
    }
}

class CreateFileResponseEntity {
    public id: string
    public name: string
    public link: string

    constructor(id: string, name: string, link: string) {
        this.id = id
        this.name = name
        this.link = link
    }
}

export {
    CreateFileEntity,
    CreateFileResponseEntity
}
