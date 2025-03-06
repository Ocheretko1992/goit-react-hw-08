import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "./../Contact/Contact";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "./../../redux/contacts/slice";

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {isLoading && !error && <b>Request in progress...</b>}

      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
