import * as React from 'react';
// import styles from './FirstWebPart.module.scss';
import type { IFirstWebPartProps } from './IFirstWebPartProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import Home from '../../../Code/components/Home/Dashboard/Home';

const FirstWebPart:React.FC<IFirstWebPartProps>=(props)=>{
  return(
    <>
    <Home/>
    </>
  )
}

export default FirstWebPart;