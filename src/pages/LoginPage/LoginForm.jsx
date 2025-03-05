import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operation";
import toast from "react-hot-toast";
import { Link,useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res.user.name}`);
        navigate("/contacts", { replace: true });
      });

    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
      <h2>Login</h2>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" />
          </label>
          <button type="submit">Login</button>
          <p className={s.pRegister}>
            Don`t have your account? <Link className={s.a} to="/register">Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
