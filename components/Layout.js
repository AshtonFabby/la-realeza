import Navbar from "./Navbar";
import Footer from "./Footer";
import Floating from "./floating";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Floating />
      <Footer />
    </>
  );
};

export default Layout;
