const fs = require('fs');
let initializer = ".jdata"
function spreadToShare(arg, len) {
    let ret = [];
    for (let i = 0; i < arg.length; i += len) {
        ret.push([...arg.slice(i, i + len)]);
    }
    return ret;
}
function getBetweenElement(arr, start, end) {
    let ret = [];
    for (let i = start + 1; i < end - 1; i++) {
        ret.push(arr[i]);
    }
    return ret;
}
function getNextElement(ref, start, char) {
    for (let i = start; i < ref.length; i++) {
        if (ref[i] === char) {
            return i;
        } else {
            continue;
        }
    }
}
function remove(arr, robj) {
    let ret = [];
    for (let i of arr) i === robj ? ret.push(i) : null;
    return ret;
}
const mainStream = new WritableStream({
    write(chunk) {
        let chunkers;
        if (chunk.split('\n').length > 10) {
            chunkers = spreadToShare(chunk.split('\n'), 10);
            for (let iterator of chunkers) {
                fs.appendFileSync(initializer, iterator.join('\n'));
            }
        } else {
            fs.appendFileSync(initializer, chunk);
        }
        console.log("process sucessful, port used: 001");
    },
    close() {
        console.log("Closing post method, port used: 001");
    },
    abort() {
        console.log("Aborting post method, port used: 502");
    }
});
function post(de) {
    if (!de.startsWith(`\[a-zA-Z]_([`)) {
        console.log("Invalid data, port used: 502");
    } else {
        mainStream.write(de);
        console.log("Post sucessful, port used: 001");
    }
}
function get(de) {
    if (fs.readFileSync(initializer, 'utf-8').includes(de.concat("_(["))) {
        const broken = fs.readFileSync(initializer, 'utf-8').split('\n');
        return broken.slice(broken.indexOf(de.concat("_([")), getNextElement(broken, broken.indexOf(de.concat("_([")), '])'));
    }
}
function dbUpdate(gde) {
    fs.writeFileSync(initializer, gde);
}
function update(ude, type, util = null) {
    let par = fs.readFileSync(initializer, 'utf-8').split('\n');
    const block = par
        .slice(par.indexOf(ude.concat("_([")), getNextElement(par, par.indexOf(ude), '])') - 1)
        .join("\n");
    switch (type) {
        case "add":
            let updatedBlock = block.concat(`\n ${util}\n])`);
            const [iS, iE] = [par.indexOf(ude.concat("_([")), getNextElement(par, par.indexOf(ude), '])')];
            par.splice(iS, iE - iS, updatedBlock);
            fs.writeFileSync(initializer, par.join('\n'));
            console.log("Update sucessful, port used: 001");
            break;
        case "remove":
            let removedUpdatedBlock = block.split(`\n ${util}\n`);
            const [riS, riE] = [par.indexOf(ude.concat("_([")), getNextElement(par, par.indexOf(ude), '])')];
            par.splice(riS, riE - riS, removedUpdatedBlock.join("\n"));
            fs.writeFileSync(initializer, par.join('\n'));
            console.log("Update sucessful, port used: 001");
            break;
        default:
            console.log("Invalid update type, port used: 502");
    }
}
function deRemove(de) {
    const par = fs.readFileSync(initializer, 'utf-8').split('\n');
    const blockDe = par.slice(par.indexOf(de.concat("_([")), getNextElement(par, par.indexOf(de), '])'));
    let ret = remove(par, ...blockDe);
    fs.writeFileSync(initializer, ret.join('\n'));
    console.log("Process sucessful, port used: 001");
}
function checkExistence(de) {
    if (fs.readFileSync(initializer, 'utf-8').includes(de.concat("_(["))) {
        return true;
    } else {
        return false;
    }
}
function filterBy(field, value) {
    let pares = fs.readFileSync(initializer, 'utf-8').split('\n');
    let ret = [];
    for (let i of pares) {
        if (i.includes(field) && i.includes(value)) {
            console.log(i);
            console.log(`Line of: ${pares.indexOf(i)}, port used: 001`);
        }
    }
    return ret;
}
export {
    post,
    get,
    dbUpdate,
    update,
    deRemove,
    checkExistence,
    filterBy
}