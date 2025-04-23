const $handleErrorMessage = (payload: object) => {
    const message = payload.error.response.data.message ?? "<UNK>"
    return {
        success: false,
        error: message,
    }
}

const $generateUUID = () => {
    return crypto.randomUUID();
}
const $generateRandomID = (length: number) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const randomArray = new Uint8Array(length);
    crypto.getRandomValues(randomArray);
    randomArray.forEach((number) => {
        result += chars[number % chars.length];
    });
    return 'item-'+result;
}

const $handleError = (error: object) => {
    return {
        success: false,
        error: error
    }
}

export {
    $handleErrorMessage, $handleError,
    $generateUUID, $generateRandomID
}