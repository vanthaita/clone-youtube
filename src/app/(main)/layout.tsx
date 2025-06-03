import MainLayoutClient from '@/components/layout/MainLayoutClient';
import React from 'react'

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
        <MainLayoutClient>
            {children}
        </MainLayoutClient>
    </>
  )
}

export default MainLayout