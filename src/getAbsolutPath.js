import path from 'path';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);

export default getAbsolutPath;