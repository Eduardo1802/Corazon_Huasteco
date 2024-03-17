import { useState }               from "react";
import { useNavigate }            from "react-router-dom";
import * as Yup                   from "yup";
import { useFormik }              from "formik";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth }                from "../../context/AuthContext";
import { db }                     from "../../config/firebase/firebaseDB";

export const useAccessFom = ({ setError, setOpen, setSnackbarOpen, setVariant,}) => {
  const { login } = useAuth();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (email, pass) => {
    setError("");
    setOpen(true);
    const referencia = doc(db, `usuarios_correo/${email}`);
    const docSnap = await getDoc(referencia);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.bloqueo === 0) {
        setVariant("error");
        setError("La cuenta ha sido bloqueada por seguridad, restaura tu contraseña");
        setOpen(false);
        setSnackbarOpen(true);
      } else {
        if (!(data.password === pass)) {
          try {
            await login(email, pass);
            navigate("/user/consultor");
            await updateDoc(referencia, {
              repeatPassword: pass,
            });
            await updateDoc(referencia, {
              bloqueo:3,
            });
            setOpen(false);
          } catch (err) {
            const referencia = doc(db, `usuarios_correo/${email}`);
            await updateDoc(referencia, {
              bloqueo: data.bloqueo - 1,
            });
            setVariant("error");
            if(data.bloqueo===2){
              setVariant("warning");
              setError("Te queda un intento antes de bloquear tu cuenta");
            }else if(data.bloqueo===1){
              setError("La cuenta ha sido bloqueda");
            }else{
              setError("La contraseña es incorrecta");
            }
            setOpen(false);
            setSnackbarOpen(true);
          }
        } else {
          const referencia = doc(db, `usuarios_correo/${email}`);
            await updateDoc(referencia, {
              bloqueo:3,
            });
          await login(email, data.repeatPassword);
          if (data.rol === "consultador") {
            navigate("/user/consultor");
          } else if (data.rol === "administrador") {
            navigate("/user/administrador");
          } else if (data.rol === "colaborador") {
            navigate("/user/colaborador");
          } else if (data.rol === "supervisor") {
            navigate("/user/supervisor");
          }
          setOpen(false);
          setData(data);
        }
      }
    } else {
      setVariant("error");
      setError("El correo no ha sido registrado aún");
      setOpen(false);
      setSnackbarOpen(true);
    }
  };

  const formikBag = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: (formData) => {
      formikBag.handleReset();
      handleSubmit(formData.email, formData.password);
    },
  });

  return formikBag;
};