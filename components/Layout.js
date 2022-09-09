import Footer from "./Footer";
import Navbar from "./Navbar";
import Tags from "./Tags";

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <Tags/>
            <main>{children}</main>
            <Footer />
        </>
    )
}