export class ServerException extends Error {
    constructor(public message: string) {
        super(message);
    }
}
