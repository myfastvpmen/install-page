import logo from './logo.svg';
import sdrapp from './asset/sdrapp.jpeg';
import andpdf from './asset/android-kor.pdf';
import iospdf from './asset/ios-kor.pdf';
import winpdf from './asset/windows-kor.pdf';
import macpdf from './asset/macosx-kor.pdf';
import Agreement from './Agreement';
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
            <Route path='/remote'>
              <Remote />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/'>
              <Home2 />
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
          <li>
            <Link to='/remote'>원격설치</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Home() {
  return (
    <>
      <Menu />
      <p>누리넷 설치 및 다운로드 센터에 오신것을 환영합니다.</p>
      <p>구독주소 URL을 받으신 후 설치를 진행하시기 바랍니다.</p>
      <p>
        설치메뉴얼에 보시면 구독주소로 서버 업데이트 하는법 포함되어 나옵니다.{' '}
        <br />
        일주일에 한번정도 업데이트하시면 더욱 원활하게 이용하실수 있습니다.
      </p>
      <p>마지막 업데이트 : 2021년 2월 24일</p>
    </>
  );
}

function Home2() {
  return (
    <>
      <div className='Box'>
        <Agreement />
      </div>

      <p>이용약관에 동의하며 설치를 진행합니다.</p>
      <nav>
        <ul>
          <li>
            <Link to='/home'>동의</Link>
          </li>
        </ul>
      </nav>
    </>
  );
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
        href='http://download.vmess.red/files/v2rayNG-v1.5.11-arm64.apk'
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 안드로이드 앱 다운로드 및 설치
      </a>
      <p>일주일에 한번정도 서버목록을 업데이트해주세요! (설치법 8번 참조)</p>
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
      <p>일주일에 한번정도 서버목록을 업데이트해주세요! (설치법 맨아래 참조)</p>
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
        href='http://download.vmess.red/files/Netch-check.zip'
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 윈도우용 프로그램 다운로드 (우클릭 새탭에서 열기)
      </a>
      <p>일주일에 한번정도 서버목록을 업데이트해주세요! (설치법 7번 참조)</p>
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
        href='http://download.vmess.red/files/V2rayU0old.dmg'
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 맥북/아이맥용 프로그램 다운로드(우클릭 새탭에서 열기)
      </a>
      <p>일주일에 한번정도 서버목록을 업데이트해주세요! (설치법 5번 참조)</p>
    </>
  );
}

function Remote() {
  return (
    <>
      <Menu />
      <p>원격설치는 요금결제 이후 사전에 기술팀과 예약을 해야가능합니다.</p>

      <p>TeamViewer QuickSupport 다운로드</p>
      <a
        className='App-link'
        href="https://download.teamviewer.com/download/TeamViewerQS.dmg"
        target='_blank'
        rel='noopener noreferrer'
      >
        MAC버젼 TeamViewerQS.dmg (우클릭 새탭에서 열기)
      </a>
      <a
        className='App-link'
        href="https://download.teamviewer.com/download/TeamViewerQS.exe"
        target='_blank'
        rel='noopener noreferrer'
      >
        WINDOW버젼 TeamViewerQS.exe (우클릭 새탭에서 열기)
      </a>
      <p>즉석 원격 데스크톱 지원에 최적화된 작은 고객용 모듈은 설치나 관리자 권한이 필요하지 않습니다 <br /> 간단하게 다운로드 및 더블클릭하여 기술팀에게 제공된 ID와 비밀번호를 알려주세요.
</p>
    </>
  );
}

export default App;
