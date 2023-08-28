import { Meta } from '@storybook/react';
import GlobalSpinner from './index';
import Button from 'components/atoms/Button';
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from 'contexts/GlobalSpinnerContext';

export default {
  title: 'organisms/GlobalSpinner',
} as Meta<typeof GlobalSpinner>;

// globalSpinner context 기능을 활용한 컴포넌트 배포
export const WithContextProvider = () => {
  const ChildComponent = () => {
    const action = useGlobalSpinnerActionsContext();
    const handleClick = () => {
      action.setGlobalSpinner(true);
      // 5초 후에 닫는다
      setTimeout(() => {
        action.setGlobalSpinner(false);
      }, 5000);
    };

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>스피너 표시</Button>
      </>
    );
  };

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  );
};
