import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}