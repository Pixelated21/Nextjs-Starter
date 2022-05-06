import axios from "../../utils/axios";
import { useForms } from "../../hooks/misc/useForms";

const useAuthRequests = () => {
  const { fields } = useForms();

  const LOGIN = async () => {
    const response = await axios
      .post("/login", {
        email: fields.email,
        password: fields.password,
      })
      // Success
      .then((data) => data.data)

      // Failed
      .catch((data) => console.log(data));

    return response;
  };

  const REGISTER = async () => {
    const response = await axios
      .post(
        "/register",
        JSON.stringify({
          email: fields.email,
          password: fields.password,
          password_confirmation: fields.passwordConfirmation,
          firstName: fields.firstName,
          lastName: fields.lastName,
          birthDate: fields.birthDate,
          sex: fields.sex,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      // Success
      .then((data) => data.data)

      // Failed
      .catch(() => false);

      // FIXME: Return Errors In Toast

    return response;
  };

  const exposed = {
    LOGIN,
    REGISTER,
  };

  return exposed;
};

export default useAuthRequests;
