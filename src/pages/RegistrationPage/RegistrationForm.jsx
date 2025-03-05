import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operation";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    navigate("/home");
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" type="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
          <p className={s.Login}>
            If you are logged in {''}
            <Link className={s.a} to="/login">
              Get IT!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
