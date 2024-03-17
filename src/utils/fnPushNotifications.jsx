import { getToken } from "firebase/messaging";
import { messaging } from "../config/firebase/firebaseDB";

export const activarMensajes = async () => {
  let token = null;
  // Utiliza un bucle while para realizar verificaciones periódicas
  while (!token) {
    // Intenta obtener el token
    token = await getToken(messaging, {
      vapidKey:
        "BKa4GChbKGeCDVAYDmBnOEp74fbj8L7LIoqcI9rJVDh87GmFni2JRMURakqRNiwYZUzpcwPb8wp-9QQRmOLWJOQ",
    }).catch((err) =>
      console.log("Tuviste un error al generar el token, papá")
    );

    // Si el token se generó, imprímelo y sal del bucle
    if (token) {
      console.log("Token generado:", token);
    } else {
      // Si el token no se generó, espera 2 segundos antes de volver a intentar
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
};