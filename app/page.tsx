import Header from "./components/header";
import Footer from "./components/footer";
import MainSection from "./components/main-section/main-section";

export default function Home() {
  return (
    <div className="app">
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  );
}
