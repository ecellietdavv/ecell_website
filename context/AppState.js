import AppContext from "./AppContext";
import { useState } from "react";

const AppState = (props) => {

    const [dark, setDark] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent] = useState({ name: "", body: "" })

    const handleDarkMode = () => {
        localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDark(false);
        }
    };

    const [toggelDrawer, setToggelDrawer] = useState(false)

    const handleToggel = () => {
        setToggelDrawer(!toggelDrawer)
    }

    const handleModal = (content) => {
        setModalContent(content)
        setOpenModal(!openModal)
    }

    return (
        <AppContext.Provider value={{ dark, handleDarkMode, toggelDrawer, handleToggel, handleModal, openModal, modalContent, setModalContent }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;