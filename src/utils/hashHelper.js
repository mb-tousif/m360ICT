import bcrypt from 'bcrypt';
import config from '../config/index.js';

const hashPassword = async (password) => {
  const salt = Number(config.salt_rounds);
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
};

const comparePassword = async (password, hash) => {
  const decryptedPassword = await bcrypt.compare(password, hash);
  return decryptedPassword;
};


export const hashPasswordHelper = {
    hashPassword,
    comparePassword,
}

