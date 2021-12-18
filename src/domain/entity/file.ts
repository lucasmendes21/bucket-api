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

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
}

export {
    CreateFileEntity,
    CreateFileResponseEntity
}
