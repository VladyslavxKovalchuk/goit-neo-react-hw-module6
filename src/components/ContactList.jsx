import Contact from "./Contact";
import styles from "./css/ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, deleteContact } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts).filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const hasContacts = contacts.length > 0;

  return (
    <div>
      {hasContacts ? (
        <ul className={styles.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.contactItem} key={id}>
              <Contact
                id={id}
                name={name}
                phone={number}
                deleteContact={(contactId) => {
                  dispatch(deleteContact(contactId));
                }}
              />
            </li>
          ))}
        </ul>
      ) : !searchQuery ? (
        <p>Your contact list is empty</p>
      ) : (
        <p>No contacts found for your search query. Please try again.</p>
      )}
    </div>
  );
};

export default ContactList;