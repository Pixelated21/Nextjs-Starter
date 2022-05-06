import {FormContext} from "../../contexts/FormContext";
import {useContext} from "react";

export const useForms = () => {
    return useContext(FormContext);
}




