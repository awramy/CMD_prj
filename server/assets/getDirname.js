import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Получаем имя директории
const getDirname = (metaUrl) => dirname(fileURLToPath(import.meta.url));
export default getDirname