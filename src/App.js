import "./App.css";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";

export default function App() {
  return (
    <div className="App">
      <h1>AI Pet Name Generator</h1>
      <InputForm />
      <div class="pet-name hidden"></div>;
      <Footer />
    </div>
  );
}
