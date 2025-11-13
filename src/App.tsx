import { ReactNode, useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import CustomButton from './components/shared/CustomButton/CustomButton';
import { useSelector } from 'react-redux';
import { selectModalStatus, selectModalType } from './redux/modal/selectors';
import MenuContent from './components/MenuContent/MenuContent';
import Modal from './components/shared/Modal/Modal';

const App = () => {
  const modalOpen = useSelector(selectModalStatus);
  const currentModalType = useSelector(selectModalType);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const checkCurrentModalType = useCallback(() => {
    if (!currentModalType) return null;

    switch (currentModalType) {
      // case 'registration':
      //   return <RegisterForm />;
      // case 'login':
      //   return <LoginForm />;

      case 'menu':
        return <MenuContent />;
      default:
        return null;
    }
  }, [currentModalType]);

  useEffect(() => {
    if (modalOpen) {
      setModalContent(checkCurrentModalType());
    } else {
      setModalContent(null);
    }
  }, [checkCurrentModalType, modalOpen]);
  return (
    <>
      <Header />
      <main>
        <CustomButton>регистрация</CustomButton>
      </main>
      {modalOpen && currentModalType && <Modal>{modalContent}</Modal>}
    </>
  );
};

export default App;
