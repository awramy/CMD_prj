import { fileURLToPath } from 'url';
import { dirname } from 'path';

const getDirname = (metaUrl) => dirname(fileURLToPath(metaUrl));
export default getDirname