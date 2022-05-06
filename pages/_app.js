import "../styles/globals.css";
import AuthContextProvider from "../contexts/AuthContext";
import FormContextProvider from "../contexts/FormContext";
import Toast from '../components/toast/toastify'

function MyApp({ Component, pageProps }) {
  return (
    <FormContextProvider>
      <AuthContextProvider>
        <Toast/>
        <Component {...pageProps} />
      </AuthContextProvider>
    </FormContextProvider>
  );
}

export default MyApp;
