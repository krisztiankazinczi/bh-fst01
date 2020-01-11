import { encode, decode } from "../secret/utils/index.js";
import * as fs from 'fs';

export const encodeAll = (...filePaths) => {
    const encoded = {};
    filePaths.forEach(f => encoded[f] = (!fs.existsSync(f)) ? '' : encode(fs.readFileSync(f).toString()));
    return encoded;
}

export const decodeAll = (...filePaths) => {
    const decoded = {};
    filePaths.forEach(f => decoded[f] = (!fs.existsSync(f)) ? '' : decode(fs.readFileSync(f).toString()));
    return decoded;
}