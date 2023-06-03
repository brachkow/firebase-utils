import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

/** Creates firebase timestamp using dayjs API */
export const getTimestamp = (date?: dayjs.ConfigType) => {
  return new Timestamp((date ? dayjs(date) : dayjs()).unix(), 0);
};
