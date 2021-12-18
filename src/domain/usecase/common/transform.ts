import { Readable } from "stream";

async function convertBufferInStream(buffer: Buffer): Promise<any> {
    return new Readable({
        read() {
            this.push(buffer);
            this.push(null);
        }
    })
}

export { 
    convertBufferInStream
}
