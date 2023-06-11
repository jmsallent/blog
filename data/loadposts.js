import {loadJSON} from "./db.js"

const collectionName = 'posts'; // Nombre de tu colección
const filePath = './posts.json'; // Ruta y nombre del archivo JSON

loadJSON(collectionName, filePath);