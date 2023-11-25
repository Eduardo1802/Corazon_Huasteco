import { getToken } from "firebase/messaging";
import { messaging } from "../config/firebase/firebaseDB";

export const activarMensajes = async () => {
  const token = await getToken(messaging, {
    vapidKey:
      "BKa4GChbKGeCDVAYDmBnOEp74fbj8L7LIoqcI9rJVDh87GmFni2JRMURakqRNiwYZUzpcwPb8wp-9QQRmOLWJOQ",
  }).catch((err) => console.log("tuviste un error al generar el token, papá"));

  if (token) console.log("token generado: ", token);
  if (!token) console.log("no se pudo generar el token");
};
