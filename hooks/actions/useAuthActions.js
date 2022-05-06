import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useAuthRequests from "../requests/useAuthRequests";
import { useAuthContext } from "../context/useAuthContext";

const useAuthAction = () => {
  const router = useRouter();
  const AUTH_REQUESTS = useAuthRequests();

  const { authorize, deAuthorize } = useAuthContext();

  const loginAction = async () => {
    const results = await AUTH_REQUESTS.LOGIN();
    if (results) {
      if (results.role === "User") {
        router.push("/usr");
      }
      if (results.role === "HR") {
        router.push("/hr");
      }
      if (results.role === "Employee") {
        router.push("/emp");
      }
      if (results.role === "Admin") {
        router.push("/admin");
      }

      toast.success(results.message, {
        position: toast.POSITION.TOP_RIGHT,
        className: "px-5 text-sm font-medium bg-green-500 text-gray-800",
        autoClose: 2000,
      });

      authorize(results.userInfo, results.role);
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const registerAction = async () => {
    const results = await AUTH_REQUESTS.REGISTER();
    if (results) {
      toast.success(results.message, {
        position: toast.POSITION.TOP_RIGHT,
        className: "px-5 text-sm font-medium bg-green-500 text-gray-800",
        className: "w-[320px]",
        autoClose: 2000,
      });
    } else {
      toast.error(results.message, {
        position: toast.POSITION.TOP_RIGHT,
        className: "px-5 text-sm font-medium bg-green-500 text-gray-800",
        className: "w-[320px]",
        autoClose: 2000,
      });
    }
  };

  const logoutAction = () => {
    deAuthorize();

    toast.warning("You are now logged out!", {
      position: toast.POSITION.TOP_RIGHT,
      className: "px-5 text-sm font-medium text-gray-800",
      autoClose: 2000,
    });
  };

  const exposed = {
    loginAction,
    registerAction,
    logoutAction,
  };

  return exposed;
};

export default useAuthAction;
