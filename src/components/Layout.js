import { Outlet } from "react-router-dom";
import Projects from "../features/projects/Projects";
import Footer from "../features/footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <main>
        <Projects />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;