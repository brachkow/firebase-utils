import { Timestamp } from 'firebase/firestore';
import { getTimestamp } from './utils/getTimestamp';
import { getId } from './utils/getId';

export interface DocumentData {
  authorId: string;
  createdAt: Timestamp;
  editedAt: Timestamp;
  id: string;
}

export class Document {
  authorId: string;
  createdAt: Timestamp;
  editedAt: Timestamp;
  id: string;

  constructor({ authorId }: Pick<DocumentData, 'authorId'>) {
    this.authorId = authorId;
    this.createdAt = getTimestamp();
    this.editedAt = getTimestamp();
    this.id = getId();
  }
}
