export function removeFirstOccurance(inputString: string, searchString: string): string {

    if(typeof inputString != 'string' && typeof searchString != 'string') {
        throw new Error("Argument must be a string type");
    }

    const index = inputString.indexOf(searchString);

    if(index == -1) {
        return inputString;
    } else {
        return inputString.slice(0, index)+ inputString.slice(index+ searchString.length);
    }
}

