import UserProfile from 'components/organisms/UserProfile';
import useUser from 'hooks/useUser';
import type { User } from '@types';

type UserProfileContainerProps = {
  userId: number;
  user?: User;
};

const UserProfileContainer = ({ userId, user }: UserProfileContainerProps) => {
  const { user: u } = useUser({ id: userId, initial: user });

  if (!u) return <div>Loading...</div>;

  return (
    <UserProfile
      username={`${u.username} (${u.displayName})`}
      profileImageUrl={u.profileImageUrl}
      numberOfProducts={100}
      description={u.description}
    />
  );
};

export default UserProfileContainer;
