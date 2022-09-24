import Drawer from "./Drawer";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Drawer />
            <main className="mt-20">{children}</main>
            <Footer />
        </>
    )
}