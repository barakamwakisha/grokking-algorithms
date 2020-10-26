function binarySearch(list, item) {
    console.log("Running binary search");
    console.log(`List size is ${list.length}`);

    /*
        In general, for any list of n items, binary search will take
        log n (base 2) steps to run in the worst case 
    */
    console.log(`The search will make a maximum of ${ Math.ceil(Math.log2(list.length)) } guesses`);

    let low = 0;
    let high = list.length - 1;

    while(low <= high) {
        console.log(`Current lower limit is ${low} and higher limit is ${high}`);

        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        console.log(`Guessing ${guess} at mid position ${mid}`);

        if(guess == item) {
            console.log(`Found item ${item} in list at position ${mid}`);
            return mid;
        } else if(guess > item) {
            console.log(`Guess ${guess} at position ${mid} is greater than item ${item}`);
            high = mid - 1;
        } else {
            console.log(`Guess ${guess} at position ${mid} is less than item ${item}`);
            low = mid + 1;
        }
    }

    return null;
}

// Binary search only works when your list is in sorted order 
binarySearch([5, 7, 12, 15, 90, 105], 90);