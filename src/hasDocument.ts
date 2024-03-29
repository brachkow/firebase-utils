import {
  type DocumentData,
  type DocumentReference,
  getDoc,
} from 'firebase/firestore';

export const hasDocument = async (
  docRef: DocumentReference<DocumentData, DocumentData>,
) => (await getDoc(docRef)).exists();
