import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home/Home";
import Us from "../../views/Us/Us";
import Contact from "../../views/Contact/Contact";
import Products from "../../views/Products/Products";
import Login from "../../views/Login/Login";
import SingUp from "../../views/SignUp/SignUp";

const Layout = () => {
    return (
        // <>
        <section className="w-[75%] mx-auto">
            <Routes >
                <Route path="/" element={<Home/>} />
                <Route path="/nosotros" element={<Us/>} />
                <Route path="/productos" element={<Products/>} />
                <Route path="/contacto" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registro" element={<SingUp/>} />
            </Routes>
        </section>
        // </>
    )
}

export default Layout;