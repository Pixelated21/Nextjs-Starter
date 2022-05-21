import * as yup from "yup";
import useToggle from "../hooks/misc/useToggle";
import { useAuthContext } from "../contexts/authContext";
import { useForms } from "../hooks/misc/useForms";
import AuthAction from "../hooks/actions/useAuthActions";

const loginSchema = yup.object({
  email: yup.string().email().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const registerSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  birthDate: yup.string().required("Birthday is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be 5 characters or more")
    .required("Password is Required"),
  passwordConfirmation: yup.string().oneOf([yup.ref("password"), null]),
});

const AuthenticationConfig = () => {
  // Visual Info
  const loginVisualInfo = { title: "Login", submit: "Login" };
  const registerVisualInfo = { title: "Register", submit: "Register" };

  // Hooks
  const { loginForm, registerForm, dispatch, fields, ACTIONS } = useForms();

  const { toggleModal } = useToggle();

  const { loginAction, registerAction, logoutAction } = AuthAction();

  // Yup Validation Schema
  const schema = fields.mode ? loginSchema : registerSchema;

  // Presentation Data
  const formBody = fields.mode ? loginForm : registerForm;
  const visualInfo = fields.mode ? loginVisualInfo : registerVisualInfo;

  // Form Actions
  const formSubmit = fields.mode ? loginAction : registerAction;

  // Toggle Function For Form Mode
  const loginToggle = () => {
    dispatch({ type: ACTIONS.CHANGE_MODE, payload: true });
    toggleModal();
  };

  const registerToggle = () => {
    dispatch({ type: ACTIONS.CHANGE_MODE, payload: false });
    toggleModal();
  };

  const exposed = {
    schema,

    mode: fields.mode,

    presentation: {
      formBody,
      visualInfo,
    },

    action: {
      formSubmit,
      signOut: logoutAction,
    },

    toggles: {
      loginToggle,
      registerToggle,
    },
  };

  return { ...exposed };
};

export default AuthenticationConfig;
