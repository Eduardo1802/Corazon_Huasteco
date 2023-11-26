import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail,} from "firebase/auth";
import { auth, db, messaging } from "../config/firebase/firebaseDB";//componenete para enviar datos a firebase
import { activarMensajes } from "../utils/fnPushNotifications";
import { toast } from "react-toastify";
import { doc, onSnapshot } from "firebase/firestore";
import logo from '../assets/img/app/logo512.png'
import { onMessage } from "firebase/messaging";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const fetchProfileImage = (uid) => {
    const userDocRef = doc(db, 'usuarios', uid);
    const unsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const imageUrl = userData?.profileImageUrl || logo;
        setProfileImageUrl(imageUrl);
      } else {
        setProfileImageUrl(logo);
      }
    });
    return unsubscribe; // Devuelve la función de cancelación
  };

  const signup = (email, password) => {// para hacer el registro a firebase 
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("Auth context: usuario por defecto =>", { currentUser });
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        activarMensajes();
        onMessage(messaging, (message) => {
          console.log("tu mensaje: ", message);
          toast(message.notification.title);
        });

        // Llamamos a la función para obtener la imagen del perfil
        const unsubscribeProfileImage = fetchProfileImage(currentUser.uid);

        // Limpia el listener cuando el componente se desmonta
        return () => {
          unsubscribeProfileImage();
        };
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{// exportamos todos los datos
        signup,
        login,
        user,
        profileImageUrl,
        setProfileImageUrl,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}