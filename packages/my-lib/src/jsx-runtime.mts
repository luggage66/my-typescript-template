export function jsx() {
    console.log(arguments);
}

export namespace JSX {
    export interface IntrinsicElements {
        block: {
            id: number;
        };
    }
}
