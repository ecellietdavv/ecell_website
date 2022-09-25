import Drawer from "./Navigation/Drawer";
import Footer from "./Navigation/Footer";
import Navbar from "./Navigation/Navbar";
import PageNavigation from "./Navigation/PageNavigation";

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