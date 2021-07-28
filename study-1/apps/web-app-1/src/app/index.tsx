import React from 'react';
import img from './react.png';
import Cat from '@mylibs/ui--react-cat-image';
import MyButton from '@mylibs/ui--button';
import s from './style.module.less';

console.log('fdsaf')
import FontTest from '../font-test/';
const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div><MyButton>mybutton</MyButton> </div>
    <div className={`${s.imageContainer}`}><img src={img} /></div>
    <Cat />
    <FontTest />
  </div>
);

export default App;
