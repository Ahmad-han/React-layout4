
import { Header } from './components/Header';
import { TitleCards } from "./components/TitleCards"
import { Main } from "./components/Main"
import { FootCards } from "./components/Footcards"
import { Footer } from "./components/Footer"
import { BlackSlide } from './components/BlackSlide';





export const App = () => {
  return (
    <div className="App">
      <Header />
      <TitleCards />
      <Main />
      <FootCards />
      <BlackSlide/>
      <Footer />
    </div>
  );
}


