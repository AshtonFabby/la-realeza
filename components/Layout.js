import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
    return (
        <div>
            <div className="content">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Layout;