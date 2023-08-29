import { useAuthContext } from 'contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAuthGuard = () => {
  const router = useRouter();
  const { authUser, isLoading } = useAuthContext();

  useEffect(() => {
    // 로그인 정보가 없을때
    if (!authUser && !isLoading) {
      // 현재 페이지 기억 , 로그인 후 리다이렉트
      const currentPath = router.pathname;

      router.push({
        pathname: '/signin',
        query: {
          redirect_to: currentPath,
        },
      });
    }
  }, [router, authUser, isLoading]);
};
