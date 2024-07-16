import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { database, auth } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

class Firebase {
  public auth: Auth;

  constructor() {
    this.auth = auth;
  }

  public async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public async editData(title: string, descriptions: string, id: string) {
    console.log(id);
    console.log(title);
    console.log(descriptions);
    const section = "about-us";
    const docRef = doc(database, section, id);
    await updateDoc(docRef, {
      title,
      descriptions,
    });
  }
}

const FirebaseServices = new Firebase();
export default FirebaseServices;
