import {useState} from "react";

export default function useToggle(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(() => !isOpen);
    };

    return {isOpen, toggleModal};
}
