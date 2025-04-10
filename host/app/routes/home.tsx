import { lazy, Suspense } from 'react';
import HomeView from "../homeView/homeView";
// @ts-ignore
import Button from 'remoteApp/Button';
// @ts-ignore
import RemoteHome from 'remoteApp/Home';

export default function Home() {
  return (
    <>
      <HomeView />
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
          <RemoteHome />
      </Suspense>
    </>
  )
}
