export default class User {
    protected name: string;
    protected age: number;

    constructor(userName: string, userAge: number) {
        this.name = userName;
        this.age = userAge;
    }

    public getInfo(): string {
        return `Name: ${this.name} Age: ${this.age}`;
    }

    public getName(): string {
        return `Name: ${this.name}`;
    }

    public getAge(): string {
        return `Age: ${this.age}`;
    }
}
