import fs from 'fs';
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // URI de conexión a tu servidor MongoDB
const dbName = 'blog'; // Nombre de tu base de datos
// const collectionName = 'mi_coleccion'; // Nombre de tu colección
// const filePath = 'ruta/del/archivo.json'; // Ruta y nombre del archivo JSON

export const loadJSON =async (collectionName, filePath) => {
  try {
    // Leer el archivo JSON
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const documents = JSON.parse(jsonData);

    // Conectar al servidor MongoDB
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Conexión exitosa al servidor de MongoDB');

    // Seleccionar la base de datos
    const db = client.db(dbName);

    // Insertar los documentos en la colección
    const collection = db.collection(collectionName);
    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documentos insertados en la colección "${collectionName}"`);

    // Cerrar la conexión al servidor MongoDB
    await client.close();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error:', error);
  }
}


