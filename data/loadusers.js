import {loadJSON} from "./db.js"

const collectionName = 'users'; // Nombre de tu colección
const filePath = './user.json'; // Ruta y nombre del archivo JSON

loadJSON(collectionName, filePath);