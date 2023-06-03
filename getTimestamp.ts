import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

export const getTimestamp = (date?: dayjs.ConfigType) => {
  return new Timestamp((date ? dayjs(date) : dayjs()).unix(), 0);
};
