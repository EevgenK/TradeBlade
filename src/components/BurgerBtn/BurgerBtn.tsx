import s from './BurgerBtn.module.css';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { openModal } from '../../redux/modal/slice';

const BurgerBtn = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(openModal({ type: 'menu' }));
  };
  return (
    <button
      onClick={handleClick}
      className={s.burgerBtn}
      aria-label="Open menu button"
    >
      <svg
        className={s.icon}
        role="img"
        aria-hidden="true"
        width="32"
        height="32"
      >
        <use href="/sprite.svg#icon-burger" />
      </svg>
    </button>
  );
};

export default BurgerBtn;
