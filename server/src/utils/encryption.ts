import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const verifyPassword = (pass: string, hashedPass: string): boolean => bcrypt.compareSync(pass, hashedPass);

export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
