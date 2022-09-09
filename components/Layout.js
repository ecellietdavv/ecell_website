import Footer from "./Footer";
// import Navbar from "./Navbar";
import Tags from "./Tags";

export default function Layout({ children }) {
    return (
        <>
            <Tags/>
            <main>{children}</main>
            <Footer />
        </>
    )
}