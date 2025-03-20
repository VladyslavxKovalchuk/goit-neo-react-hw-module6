import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ContactForm from "./components/ContactForm.jsx";
import DemoDataButton from "./components/DemoDataButton.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="mainView">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <DemoDataButton />
    </div>
  );
};

export default App;
