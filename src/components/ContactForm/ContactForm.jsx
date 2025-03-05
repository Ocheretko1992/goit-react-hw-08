import s from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^(?:\d{9}|\d{3}-\d{3}-\d{2}-\d{2})$/,
      "Phone number must be 10 digits long or in format xxx-xxx-xx-xx"
    )
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    number: "",
  };
  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.username,
      number: values.number,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <Form className={s.formContainer}>
          <label className={s.label}>
            <h1 className={s.book}>Record book</h1>
            <span>Name</span>
            <Field type="text" name="username" className={s.inputField} />
            <ErrorMessage
              name="username"
              component="span"
              className={s.errorMessage}
            />
          </label>

          <label className={s.label}>
            <span>Number phone </span>
            <Field type="number" name="number" className={s.inputField} />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit" className={s.submitButton}>
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
