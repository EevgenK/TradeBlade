import s from './Logo.module.css';

const Logo = () => {
  return (
    <a href="/" className={s.logo} aria-label="Trade Blade link">
      <svg
        className={s.icon}
        role="img"
        aria-hidden="true"
        width="108"
        height="52"
      >
        <use href="/sprite.svg#icon-text-logo" />
      </svg>
    </a>
  );
};

export default Logo;
