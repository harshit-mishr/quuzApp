import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './Routing/Routing'
import {BrowserRouter} from 'react-router-dom'
import {RecoilRoot} from 'recoil'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
