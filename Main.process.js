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
function post(de, path = initializer) {
    if (!/^[a-zA-Z]_(\[([\s\S])\]\)/.test(de)) {
        console.log("Invalid data, port used: 502");
    } else {
        fs.appendFileSync(path, de);
        console.log("Post sucessful, port used: 001");
    }
}
function get(de) {
    if (fs.readFileSync(path, 'utf-8').includes(de.concat("_(["))) {
        const broken = fs.readFileSync(path, 'utf-8').split('\n');
        return broken.slice(
            broken.indexOf(de.concat("_([")), 
            getNextElement(broken, broken.indexOf(de.concat("_([")), '])')
        ).join('\n');
    }
}
function dbUpdate(gde, path = initializer) {
    fs.writeFileSync(path, gde);
}
function update(ude, type, util = null, path = initializer) {
    let par = fs.readFileSync(path, 'utf-8').split('\n');
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
function deRemove(de, path = initializer) {
    const par = fs.readFileSync(path, 'utf-8').split('\n');
    const blockDe = par.slice(par.indexOf(de.concat("_([")), getNextElement(par, par.indexOf(de), '])'));
    let ret = remove(par, ...blockDe);
    fs.writeFileSync(initializer, ret.join('\n'));
    console.log("Process sucessful, port used: 001");
}
function checkExistence(de, path = initializer) {
    if (fs.readFileSync(path, 'utf-8').includes(de.concat("_(["))) {
        return true;
    } else {
        return false;
    }
}
function filterBy(field, value, path = initializer) {
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

function setPointer(path) {
    return {
        get: (de) => get(de, path),
        post: (de) => post(de, path),
        dbUpdate: (dbu) => dbUpdate(dbu, path),
        update: (ude, type, util = null) => update(ude, type, util, path),
        deRemove: (de) => deRemove(de),
        checkExistence: (de) => checkExistence(de, path),
        filter: (field, value) => filterBy(field, value, path)
    }
}

export {
    post,
    get,
    dbUpdate,
    update,
    deRemove,
    checkExistence,
    filterBy,
    setPointer
}
