import { nanoid } from 'nanoid';

export const getId = (n: number = 16) => nanoid(n);
