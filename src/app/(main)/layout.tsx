import MainLayoutClient from '@/components/layout/MainLayoutClient';
import LoadingBar from '@/components/LoadingBar';
import React, { Suspense } from 'react';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <MainLayoutClient>
        <Suspense fallback={<LoadingBar />}>
          {children}
        </Suspense>
      </MainLayoutClient>
    </>
  );
};

export default MainLayout;