export class RequestBuilder<BodyType> {
    private body: BodyType | null = null;
    constructor() { }
    setBody(body: BodyType) {
        this.body = body ?? null;
        return this;
    }
    build() {
        const { body } = this;
        return {
            body
        }
    }
}