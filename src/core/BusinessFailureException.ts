export class BusinessFailureException extends Error {
    constructor(public message: string) {
        super(message);
    }
}
