import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = 'it';
auth.useDeviceLanguage();

provider.setCustomParameters({
    prompt: 'select_account'
});

signInWithRedirect(auth, provider);
getRedirectResult(auth)
.then((result)=> {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
}).catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
});

