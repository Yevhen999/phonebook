import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <div className={css.labelWrapperUser}>
        <label className={css.formLabelUser} htmlFor="1">
          Username
        </label>
        <input className={css.formInputUser} type="text" name="name" id="1" />
      </div>
      <div className={css.labelWrapperEmail}>
        <label className={css.formLabelEmail} htmlFor="2">
          Email
        </label>
        <input
          className={css.formInputEmail}
          type="email"
          name="email"
          id="2"
        />
      </div>
      <div className={css.labelWrapperPass}>
        <label className={css.formLabelPass} htmlFor="3">
          Password
        </label>
        <input
          className={css.formInputPass}
          type="password"
          name="password"
          id="3"
        />
      </div>
      <button className={css.btnRegister} type="submit">
        Register
      </button>
    </form>
  );
};
