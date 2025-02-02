export class Header {
    private title: string;

    constructor(title: string) {
        this.title = title;
    }

    render(): string {
        return `
            <header>
                <h1>${this.title}</h1>
            </header>
        `;
    }

    update(newTitle: string): void {
        this.title = newTitle;
    }
}