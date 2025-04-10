import { lazy, Suspense } from 'react';
import HomeView from "../homeView/homeView";
// @ts-ignore
import Button from 'remoteApp/Button';

// const Remote = lazy(
//   // @ts-ignore
//   async () => import("remote/remote-app")
// );

export default function Home() {
  return (
    <>
      <HomeView />
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </>
  )
}
