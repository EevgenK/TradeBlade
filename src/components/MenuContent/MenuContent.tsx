import useModal from '../../utils/hooks/useModal';
import AuthButtons from '../AuthButtons/AuthButtons';
import Nav from '../Nav/Nav';

import s from './MenuContent.module.css';

const MenuContent = () => {
  const { handleClose } = useModal();
  return (
    <div onClick={handleClose} className={s.wrap}>
      <Nav />
      <AuthButtons />
    </div>
  );
};

export default MenuContent;
