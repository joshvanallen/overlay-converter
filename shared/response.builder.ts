export class ResponseBuilder<BodyType> {
    private statusCode: number = 0;
    private body: BodyType | null = null;
    private developerText: string = '';
    
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