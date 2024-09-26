import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  UserCredential,
  Auth,
  onAuthStateChanged,
} from "firebase/auth";

type UserType = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
  photoURl?: string | null;
};

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = "it";
auth.useDeviceLanguage();

provider.setCustomParameters({
  prompt: "select_account",
});

signInWithRedirect(auth, provider);
getRedirectResult(auth)
  .then((result: UserCredential | null) => {
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

export const monitorAuthState = (setUser: (user: UserType | null) => void) => {
  const auth = getAuth();

  return onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
};
