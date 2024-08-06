// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Header from './code/header/Header';
import NavigaterVar from './code/navigater/NavigaterVar';

import Library from './code/chapter/chapter_03/Library';
import Clock from './code/chapter/chapter_04/Clock';
import CommentList from './code/chapter/chapter_05/CommentList';
import NotificationList from './code/chapter/chapter_06/NotificationList';
import Accommodate from './code/chapter/chapter_07/Accommodate';
import ConfirmButtonBind from './code/chapter/chapter_08/ConfirmButtonBind';
import ConfirmButtonClassFieldsSyntax from './code/chapter/chapter_08/ConfirmButtonClassFieldsSyntax';
import ConfirmButtonFunction from './code/chapter/chapter_08/ConfirmButtonFunction';
import LandingPage from './code/chapter/chapter_09/LandingPage';
import AttendanceBook from './code/chapter/chapter_10/AttendanceBook';
import SignUp from './code/chapter/chapter_11/SignUp';
import Calculator from './code/chapter/chapter_12/Calculator';
import ProfileCard from './code/chapter/chapter_13/ProfileCard';
import DarkOrLight from './code/chapter/chapter_14/DarkOrLight';
import Blocks from './code/chapter/chapter_15/Blocks';

function App() {

  const [chapter_03, setChapter_03] = useState(false);
  const [chapter_04, setChapter_04] = useState(false);
  const [chapter_05, setChapter_05] = useState(false);
  const [chapter_06, setChapter_06] = useState(false);
  const [chapter_07, setChapter_07] = useState(false);
  const [chapter_08, setChapter_08] = useState(false);
  const [chapter_09, setChapter_09] = useState(false);
  const [chapter_10, setChapter_10] = useState(false);
  const [chapter_11, setChapter_11] = useState(false);
  const [chapter_12, setChapter_12] = useState(false);
  const [chapter_13, setChapter_13] = useState(false);
  const [chapter_14, setChapter_14] = useState(false);
  const [chapter_15, setChapter_15] = useState(false);
  const [chapter_title, setChapter_title] = useState(false);

  const loadPage = (menu) => {
    console.log(`loadPage : ${menu}`);

    setChapter_03(false);
    setChapter_04(false);
    setChapter_05(false);
    setChapter_06(false);
    setChapter_07(false);
    setChapter_08(false);
    setChapter_09(false);
    setChapter_10(false);
    setChapter_11(false);
    setChapter_12(false);
    setChapter_13(false);
    setChapter_14(false);
    setChapter_15(false);

    switch(menu) {
      case "chapter_03" :
        setChapter_03(!chapter_03); 
        (!chapter_03) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_04" :
        setChapter_04(!chapter_04); 
        (!chapter_04) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_05" :
        setChapter_05(!chapter_05); 
        (!chapter_05) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_06" :
        setChapter_06(!chapter_06); 
        (!chapter_06) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_07" : 
        setChapter_07(!chapter_07); 
        (!chapter_07) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_08" : 
        setChapter_08(!chapter_08); 
        (!chapter_08) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_09" : 
        setChapter_09(!chapter_09); 
        (!chapter_09) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_10" :
        setChapter_10(!chapter_10); 
        (!chapter_10) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_11" :
        setChapter_11(!chapter_11); 
        (!chapter_11) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_12" :
        setChapter_12(!chapter_12); 
        (!chapter_12) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_13" :
        setChapter_13(!chapter_13); 
        (!chapter_13) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_14" :
        setChapter_14(!chapter_14); 
        (!chapter_14) ? setChapter_title(menu) : setChapter_title("");
        break;
      case "chapter_15" :
        setChapter_15(!chapter_15); 
        (!chapter_15) ? setChapter_title(menu) : setChapter_title("");
        break;
      default : break;
    }
  }

  return (
    <>
      <Header />
      <hr />
      <NavigaterVar loadPage={loadPage}/>
      <hr/>
      <h1>{chapter_title}</h1>
      {chapter_03 ? <Library /> : null}
      {chapter_04 ? <Clock /> : null}
      {chapter_05 ? <CommentList /> : null}
      {chapter_06 ? <NotificationList /> : null}
      {chapter_07 ? <Accommodate /> : null}

      {chapter_08 ? <ConfirmButtonBind />  : null}
      {chapter_08 ? <ConfirmButtonClassFieldsSyntax /> : null}
      {chapter_08 ? <ConfirmButtonFunction />  : null}
      
      {chapter_09 ? <LandingPage />  : null}
      {chapter_10 ? <AttendanceBook />  : null}
      {chapter_11 ? <SignUp />  : null}
      {chapter_12 ? <Calculator />  : null}
      {chapter_13 ? <ProfileCard />  : null}
      {chapter_14 ? <DarkOrLight />  : null}
      {chapter_15 ? <Blocks /> : null}
    </>
  );
}

export default App;

