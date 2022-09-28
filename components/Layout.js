import Drawer from "./Navigation/Drawer";
import Footer from "./Navigation/Footer";
import Navbar from "./Navigation/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Drawer />
            <main className="mt-20">{children}</main>
            <Footer />
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer /> */}
        </>
    )
}