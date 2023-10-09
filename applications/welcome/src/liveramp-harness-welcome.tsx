import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact, { ReactAppOrParcel } from 'single-spa-react';

const rootComponent = () => {
  return (
    <div>rootComponent Welcome</div>
  )
}
const lifecycles: ReactAppOrParcel<any> = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent
});

export const { bootstrap, mount, unmount } = lifecycles;
