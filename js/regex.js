function regexD(arg) {
    const regex = /[0-9]+/g;
    const str = arg;
    let m;
    let temp = '';

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            temp = temp+ '' + match;
        });
    }
    return parseInt(temp);
}

if  (regexD(11.223)){
    console.log(true)
} else {
    console.log(false);
}