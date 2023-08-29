import SigninForm from 'components/organisms/SigninForm';
import { useAuthActionsContext } from 'contexts/AuthContext';
import { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext';

type SigninFormContainerProps = {
  onSignin: (error?: Error) => void;
};

const SigninFormContainer = ({ onSignin }: SigninFormContainerProps) => {
  const { signin } = useAuthActionsContext();
  const { setGlobalSpinner } = useGlobalSpinnerActionsContext();

  const handleSignin = async (username: string, password: string) => {
    try {
      setGlobalSpinner(true);
      await signin(username, password);
      onSignin && onSignin();
    } catch (e: unknown) {
      if (e instanceof Error) {
        window.alert(e.message);
        onSignin && onSignin(e);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <SigninForm onSignin={handleSignin} />;
};

export default SigninFormContainer;
