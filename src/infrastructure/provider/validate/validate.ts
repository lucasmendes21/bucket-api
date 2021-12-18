function checkStringEmpty(paramether: string): boolean {
    return paramether === undefined || paramether === null || paramether.trim() === ''
}

function checkObjectEmpty(paramether: object): boolean {
    return paramether === undefined || paramether === null
}

export {
    checkStringEmpty,
    checkObjectEmpty
}
