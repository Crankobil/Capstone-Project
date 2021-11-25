import Footer from "./partials/Footer";
import Header from "./partials/Header";

const DefaultLayout = ({children}) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
