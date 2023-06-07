import { Auth, signInWithEmailAndPassword } from 'firebase/auth';

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
}
