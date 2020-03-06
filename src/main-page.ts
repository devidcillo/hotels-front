class MainPage {
    greeting: string = "Hi"

    greet() { return this.greeting; }
}

export const greet = ():string => {
    return greet();
}
