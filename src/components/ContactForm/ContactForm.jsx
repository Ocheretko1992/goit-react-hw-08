import s from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^(?:\d{10}|\d{3}-\d{3}-\d{2}-\d{2})$/,
      "Phone number must be 10 digits long or in format xxx-xxx-xx-xx"
    )
    .required("Required"),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.username,
          number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
      }}>
      <div className={s.wrapper}>
        <Form className={s.formContainer}>
          <label htmlFor={nameFieldId} className={s.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={s.inputField}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={s.errorMessage}
          />

          <label htmlFor={phoneFieldId} className={s.label}>
            Phone number
          </label>
          <Field
            type="text"
            name="number"
            id={phoneFieldId}
            className={s.inputField}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />

          <button type="submit" className={s.submitButton}>
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
