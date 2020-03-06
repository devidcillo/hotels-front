class MainPage {
    constructor() {
        this.greeting = "Hi";
    }
    greet() { return this.greeting; }
}
export const greet = () => {
    return greet();
};
