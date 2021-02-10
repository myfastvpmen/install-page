import logo from './logo.svg';
import sdrapp from './asset/sdrapp.jpeg';
import andpdf from './asset/android-kor.pdf';
import iospdf from './asset/ios-kor.pdf';
import winpdf from './asset/windows-kor.pdf';
import macpdf from './asset/macosx-kor.pdf';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Switch>
            <Route path='/androidlink'>
              <Android />
            </Route>
            <Route path='/ioslink'>
              <Ios />
            </Route>
            <Route path='/windowslink'>
              <Windows />
            </Route>
            <Route path='/macosxlink'>
              <Macosx />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          <p> </p>
          <p> </p>
        </header>
      </div>
    </Router>
  );
}
function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/androidlink'>안드로이드</Link>
          </li>
          <li>
            <Link to='/ioslink'>아이폰</Link>
          </li>
          <li>
            <Link to='/windowslink'>윈도우</Link>
          </li>
          <li>
            <Link to='/macosxlink'>맥OS</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Home() {
  return <>NO PAGE FOUND</>;
}

function Android() {
  return (
    <>
      <Menu />
      <p></p>
      <a
        className='App-link'
        href={andpdf}
        target='_blank'
        rel='noopener noreferrer'
      >
        1. 설치메뉴얼 PDF 먼저 읽어보기
      </a>
      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href='https://rb.gy/sqy64l'
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 안드로이드 앱 다운로드 및 설치
      </a>
    </>
  );
}

function Ios() {
  return (
    <>
      <Menu />
      <p></p>
      <img src={sdrapp} className='App-img' alt='logo' />
      <p>1. Shadowrocket 어플이 이미 설치되어 있습니까?</p>
      <p>
        네: 2번으로 이동
        <br />
        아니요: 결제가능한 앱스토어 한국계정이 있습니까?(중국외 미국,홍콩등
        가능)
        <br />
        네: 한국계정에서 앱 구입 및 다운로드 후 2번으로 이동
        <br />
        아니요: 관리자에게 앱 다운방법 문의
      </p>
      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href={iospdf}
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 설치메뉴얼 PDF 보고 설정하기
      </a>
    </>
  );
}

function Windows() {
  return (
    <>
      <Menu />
      <p></p>
      <a
        className='App-link'
        href={winpdf}
        target='_blank'
        rel='noopener noreferrer'
      >
        1. 설치메뉴얼 PDF 먼저 읽어보기
      </a>
      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href='https://rb.gy/vojceg'
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 윈도우용 프로그램 다운로드 (압축파일/설치불필요)
      </a>
    </>
  );
}

function Macosx() {
  return (
    <>
      <Menu />
      <p></p>
      <a
        className='App-link'
        href={macpdf}
        target='_blank'
        rel='noopener noreferrer'
      >
        1. 설치메뉴얼 PDF 먼저 읽어보기
      </a>
      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href='https://rb.gy/7zbtex'
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 맥북/아이맥용 프로그램 다운로드
      </a>
    </>
  );
}

export default App;
