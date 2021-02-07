export class ResponseBuilder<BodyType> {
    statusCode: number = 0;
    body: BodyType | null = null;
    developerText: string = '';
    
    constructor(){}

    setStatusCode(statusCode: number){
        this.statusCode = statusCode;
        return this;
    }

    setBody(body: BodyType){
        this.body = body;
        return this;
    }

    setDeveloperText(developerText: string){
        this.developerText = developerText;
        return this;
    }

    build(){
        const {statusCode, body, developerText} = this;
        return {
            statusCode,
            body,
            developerText
        }
    }
}