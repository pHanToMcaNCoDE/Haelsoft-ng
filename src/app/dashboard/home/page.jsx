// 'use client';

// import { Suspense } from 'react';
import Loading from '../(dashboardcomponents)/loading';
import HomePage from './home';

export default function Home() {
  return (
    <div className="">
      {/* <Suspense fallback={<Loading />}> */}
      <HomePage />
      {/* </Suspense> */}
    </div>
  );
}
