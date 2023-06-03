import { Timestamp } from 'firebase/firestore';
import { getTimestamp } from './getTimestamp';

export interface DocumentData {
  authorId: string;
  createdAt: Timestamp;
  editedAt: Timestamp;
}

export class Document {
  authorId: string;
  createdAt: Timestamp;
  editedAt: Timestamp;

  constructor({ authorId }: Pick<DocumentData, 'authorId'>) {
    this.authorId = authorId;
    this.createdAt = getTimestamp();
    this.editedAt = getTimestamp();
  }
}
