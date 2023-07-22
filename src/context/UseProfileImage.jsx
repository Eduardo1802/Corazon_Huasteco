import { createContext, useContext, useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase/firebaseDB";
import { useAuth } from "./AuthContext";

const profileImageContext = createContext();

export const useProfileImage = () => {
  const context = useContext(profileImageContext);
  if (!context) throw new Error("There is no ProfileImage provider");
  return context;
};

export function ProfileImageProvider({ children }) {
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    // Función para obtener la imagen de perfil del usuario actual
    const getUserProfileImage = async (user) => {
      try {
        const userDocRef = doc(db, "usuarios", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          if (userData.profileImageUrl) {
            setProfileImageUrl(userData.profileImageUrl);
          } else {
            setProfileImageUrl(
              "https://corazon-huasteco.com/assets/imgUser-1d809c39.jpg"
            );
          }
        } else {
          setProfileImageUrl(
            "https://corazon-huasteco.com/assets/imgUser-1d809c39.jpg"
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    if (user.uid) {
      getUserProfileImage(user);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <profileImageContext.Provider value={{ profileImageUrl, loading }}>
      {children}
    </profileImageContext.Provider>
  );
}
