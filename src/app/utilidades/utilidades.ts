import { FileDetector } from "protractor"

export function toBase64(FILE: File){
    return new Promise ((resolve, reject)=>{
        const READER = new FileReader();
        READER.readAsDataURL(FILE);
        READER.onload = () => resolve(READER.result);
        READER.onerror = (error) => reject(error);
    })
}