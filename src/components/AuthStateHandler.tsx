'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { useDispatch } from 'react-redux';
import { addUser, clearUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';

export function AuthStateHandler({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email as string,
          displayName: user.displayName || user.email?.split('@')[0] || 'User'
        }));
        router.push('/browse');
      } else {
        dispatch(clearUser());
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [dispatch, router]);

  return <>{children}</>;
} 