import {
  type Auth,
  signInWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
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

  forgotPassword(email: string) {
    sendPasswordResetEmail(this.auth, email);
  }

  deleteUser() {
    if (!this.auth.currentUser) return;
    deleteUser(this.auth.currentUser);
  }
}
