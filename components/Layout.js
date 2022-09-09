import Footer from "./Footer";
import TFCtemplate from "./TFCtemplate";
import Navbar from "./Navbar";
import Tags from "./Tags";

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <Tags/>
            <main>{children}</main>
            <TFCtemplate />
            <Footer />
        </>
    )
}