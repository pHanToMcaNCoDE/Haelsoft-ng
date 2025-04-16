'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import HomePage from './home';
import Loader from '@/components/Loader';

export default function Home() {
  const { isAuthenticated, token } = useSelector((state) => state.userDetails);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || !token) {
      router.replace('/signin');
    }
  }, [isAuthenticated, token, router]);

  if (!isAuthenticated || !token) {
    return <Loader />;
  }

  console.log('auth state:', { isAuthenticated, token });

  return (
    <main>
      <HomePage />
    </main>
  );
}