import { db } from './database.js';

export async function loadMetadata() {
    return await db.get(
        'SELECT title, description, content, format FROM metadata'
    );
}