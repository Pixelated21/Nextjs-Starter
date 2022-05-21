import {FormContext} from "../../contexts/formContext";
import {useContext} from "react";

export const useForms = () => {
    return useContext(FormContext);
}




