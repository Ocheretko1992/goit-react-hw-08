import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectUser } from "../../redux/auth/selectors";

const ContactsPage = () => {
  const user = useSelector(selectUser);

  return (
    <>
      {user.name && (
        <div>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      )}
    </>
  );
};
export default ContactsPage;
