import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
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
      {" "}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
      <h2>Registration</h2>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} name="name" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.input} name="email" type="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.input} name="password" type="password" />
          </label>
          <button type="submit">Register</button>
          <p className={s.login}>
            If you are logged in {""}
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
