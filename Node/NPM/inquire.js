import { input } from '@inquirer/prompts';
import {image} from 'qr-image';
import * as fs from "fs";

const url = await input({message: 'Enter URL: '}, );

console.log(url);

const img_png = image(url, {type: 'png'});
var urlParts = url.split('.');
var filName = urlParts[0];

img_png.pipe(fs.createWriteStream(filName + '.png'));

fs.writeFile(filName + '.txt', url, (err) => {
    if (err) {
        throw err;
    }
    console.log("Meassage Saved!");
})
