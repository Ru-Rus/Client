import { StatusCodes } from "http-status-codes"


export class notFoundError extends{
    constructor(message){
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}