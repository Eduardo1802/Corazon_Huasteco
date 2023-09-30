//yup comopnent
import * as Yup from "yup";
// formik component
import { useFormik } from "formik";
// react-router-dom component
import { useNavigate } from "react-router-dom";
// context component
import { useAuth } from "../../context/AuthContext";
// firebase component
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseDB";

// eslint-disable-next-line
export const useFormikConfig = ({ setError, open, setOpen }) => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  //función que abre y cierra el modal
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  //función que registrará al usuario y mandará los datos a firebase
  const handleSubmit = async (email, password, data) => {
    setError("");
    try {
      handleToggle();
      const info = await signup(email, password);
      const referencia = doc(db, `usuarios/${info.user.uid}`);
      const referencia2 = doc(db, `usuarios_correo/${info.user.email}`);

      await getDoc(referencia);
      await getDoc(referencia2);

      setDoc(referencia, {
        name: data.name,
        lastName: data.lastName,
        age: data.age,
        gender: data.gender,
        ocupation: data.ocupation,
        zipCode: data.zipCode,
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
        secretQuestion: data.secretQuestion,
        secretQuestionAnswer: data.secretQuestionAnswer,
        rol: "consultador",
        state: data.state,
        bloqueo:3,
      });

      setDoc(referencia2, {
        name: data.name,
        lastName: data.lastName,
        age: data.age,
        gender: data.gender,
        ocupation: data.ocupation,
        zipCode: data.zipCode,
        password: data.password,
        repeatPassword: data.repeatPassword,
        secretQuestion: data.secretQuestion,
        secretQuestionAnswer: data.secretQuestionAnswer,
        rol: "consultador",
        state: data.state,
        bloqueo:3,
      });

      navigate("/user/consultor");
      handleClose();
    } catch (error) {
      handleToggle();
      setError("El correo introducido ya esta registrado");
      handleClose();
    }
  };

  const formikBag = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      gender: "",
      ocupation: "",
      zipCode: "",
      email: "",
      password: "",
      repeatPassword: "",
      secretQuestion: "",
      secretQuestionAnswer: "",
      rol: "consultador",
      state:"",
      checkBoxValue: false, 
      bloqueo:3,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("El nombre es obligatorio")
        .min(3, "El nombre no puede tener menos de 3 caracteres")
        .max(50, "El nombre no puede tener mas de 50 caracteres")
        .matches(
          /^([A-Z][a-z]*)(\s[A-Z][a-z]*)?$/,
          "El nombre solo puede contener letras, debe iniciar con una mayuscula y no debe de terminar con espacios"
        ),

      lastName: Yup.string()
        .required("El apellido es obligatorio")
        .min(5, "El apellido no puede tener menos de 5 caracteres")
        .max(50, "El apellido no puede tener mas de 50 caracteres")
        .matches(
          /^([A-Z][a-z]*)(\s[A-Z][a-z]*)?$/,
          "El apellido solo puede contener letras, debe iniciar con una mayuscula y no debe de terminar con espacios"
        ),

      age: Yup.number()
        .required("La edad es obligatoria")
        .typeError("La edad debe ser un numero")
        .notOneOf([0], "La edad no puede ser 0")
        .min(12, "La edad no puede ser menor a 12")
        .max(150, "La edad no puede ser mayor a 150"),

      gender: Yup.string().required("El genero es obligatorio"),

      ocupation: Yup.string().required("La ocupacion es obligatoria"),

      zipCode: Yup.string()
        .required("El z postal es obligatorio")
        .length(5, "El código postal debe tener 5 dígitos")
        .matches(/^\d+$/, "El código postal debe ser un número"),

      email: Yup.string().email().required("El email es obligatorio"),

      password: Yup.string()
        .required("La contraseña es obligatoria")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/,
          "La contraseña debe tener al menos 8 caracteres, incluyendo al menos un número, una letra mayúscula, una letra minúscula y un carácter especial"
        )
        .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
      repeatPassword: Yup.string()
        .required("La contraseña es obligatoria")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/,
          "La contraseña debe tener al menos 8 caracteres, incluyendo al menos un número, una letra mayúscula, una letra minúscula y un carácter especial"
        )
        .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),

      secretQuestion: Yup.string().required(
        "La pregunta secreta es obligatoria"
      ),

      secretQuestionAnswer: Yup.string()
        .required("La respuesta secreta es obligatoria")
        .min(3, "La respuesta no puede tener menos de 3 caracteres")
        .max(20, "La respuesta no puede tener mas de 20 caracteres"),

      state: Yup.string()
        .required("Introduce un codigo postal valido"),

      checkBoxValue: Yup.boolean().oneOf([true], "Debes aceptar los terminos y condiciones"),
    }),

    onSubmit: (formData) => {
      formikBag.handleReset();
      handleSubmit(formData.email, formData.password, formData);
    },
  });

  return formikBag;
};
