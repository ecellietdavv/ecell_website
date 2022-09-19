import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="mt-20">{children}</main>
            <Footer />
        </>
    )
}