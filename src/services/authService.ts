import {
  type Auth,
  signInWithEmailAndPassword,
  deleteUser,
} from 'firebase/auth';

export class AuthService {
  auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }

  signInWithEmailAndPassword(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    this.auth.signOut();
  }

  deleteUser() {
    if (!this.auth.currentUser) return;
    deleteUser(this.auth.currentUser);
  }
}
