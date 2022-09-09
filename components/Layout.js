import Footer from "./Footer";
import TFCtemplate from "./TFCtemplate";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <TFCtemplate />
            <Footer />
        </>
    )
}