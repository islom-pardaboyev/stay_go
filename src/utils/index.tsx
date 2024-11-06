import React, { Suspense } from "react";

const Loading = () => <div>Loading...</div>;

export const SuspenseComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => <Suspense fallback={<Loading />}>{children}</Suspense>;

export type NavbarType = {
  id:number,
  name: string,
  path: string,
  icon: React.FC<any>,
}