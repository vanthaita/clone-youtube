import MainLayoutClient from '@/components/layout/MainLayoutClient';
import LoadingBar from '@/components/LoadingBar';
import { SidebarProvider } from '@/context/sidebarProvider';
import React, { Suspense } from 'react';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <>
      <SidebarProvider>
        <MainLayoutClient>
          <Suspense fallback={<LoadingBar />}>
            {children}
          </Suspense>
        </MainLayoutClient>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;