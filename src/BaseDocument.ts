import { type Timestamp } from 'firebase/firestore';
import { getTimestamp } from './getTimestamp';
import { nanoid } from 'nanoid';

export class BaseDocument {
  id: string;
  updatedAt: Timestamp;
  createdAt: Timestamp;

  constructor({
    id = nanoid(28),
    updatedAt = getTimestamp(),
    createdAt = getTimestamp(),
  }: {
    id: string;
    updatedAt: Timestamp;
    createdAt: Timestamp;
  }) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }
}

export class BaseDocumentWithAuthor extends BaseDocument {
  authorId: string;

  constructor({
    authorId,
    id = nanoid(28),
    updatedAt = getTimestamp(),
    createdAt = getTimestamp(),
  }: {
    authorId: string;
    id: string;
    updatedAt: Timestamp;
    createdAt: Timestamp;
  }) {
    super({ id, updatedAt, createdAt });
    this.authorId = authorId;
  }
}
