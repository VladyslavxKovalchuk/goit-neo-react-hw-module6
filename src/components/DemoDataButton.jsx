import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice.js";

const DemoDataButton = () => {
  const dispatch = useDispatch();
  const demoContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const handleUseDemoData = () => {
    demoContacts.forEach(contact => dispatch(addContact(contact)));
  };

  return (
    <button onClick={handleUseDemoData} className="demoDataButton">
      Use demo data
    </button>
  );
};

export default DemoDataButton;