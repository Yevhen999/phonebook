import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <div className={css.labelWrapperEmail}>
        <label className={css.formabelEmail}>Email</label>
        <input className={css.formInLputEmail} type="email" name="email" />
      </div>
      <div className={css.labelWrapperPass}>
        <label className={css.formLabelPass}>Password</label>
        <input className={css.formInputPass} type="password" name="password" />
      </div>
      <button className={css.btnLogin} type="submit">
        Log In
      </button>
    </form>
  );
};
