import dayjs, { ConfigType } from 'dayjs';
import { Timestamp } from 'firebase/firestore';

export const getTimestamp = (date: ConfigType = dayjs()) =>
  new Timestamp(dayjs(date).unix(), 0);
