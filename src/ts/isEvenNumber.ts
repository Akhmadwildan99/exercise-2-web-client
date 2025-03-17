export function isEvenNumber(num: number): boolean{
    if(isNaN(num)) {
        throw new Error("Value must be a number");
    }

    return num % 2 == 0;
}

