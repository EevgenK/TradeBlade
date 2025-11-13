import clsx from 'clsx';
import CustomButton from '../shared/CustomButton/CustomButton';
import s from './AuthButtons.module.css';
export interface NavProps {
  type?: string;
}

const AuthButtons = ({ type }: NavProps) => {
  return (
    <div className={clsx(type !== 'main' ? s.sidebar_buttons : s.buttons)}>
      <CustomButton additionalClass={s.register_btn}>регистрация</CustomButton>
      <CustomButton additionalClass={s.enter_btn}>
        {type === 'main' ? 'вход' : 'войти'}
      </CustomButton>
    </div>
  );
};

export default AuthButtons;
