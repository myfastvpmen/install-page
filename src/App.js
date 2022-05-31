import logo2 from './asset/noori-logo2.png';
import sdrapp from './asset/sdrapp.png';
import fakeapp from './asset/fakeapp.png';
import andpng from './asset/2022/android-install.pdf';
import iospng from './asset/iso-new-install.pdf';
import winpng from './asset/2020/Window-install.pdf';
import macpng from './asset/noori-mac-kor.png';
// import winapp from './asset/Netch182.zip';
// import macapp from './asset/V2rayU-stable.dmg';
// import andapp from './asset/v2rayNG-v1.5.11-arm64.apk';
import Agreement from './Agreement';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo2} className='App-logo' alt='logo' />
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
      <h3>꼭 먼저 설명서를 읽어보세요~!</h3>
      <p>사용할 기기를 위해서 선택하시면 됩니다.</p>
      <p>구독주소 URL을 받으신 후 설치를 진행하시기 바랍니다.</p>

      <p>마지막 업데이트 : 2022년 6월 1일 (안드로이드 및 윈도우 프로그램 업데이트)</p>
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

      {/* <a
        className='App-link'
        href={andapp}
        rel='noopener noreferrer'
        target='_blank'
        download='v2rayNG-v1.5.11-arm64.apk'
      >
        1. 안드로이드 앱 다운로드 및 설치
      </a> */}
      <a
        className='App-link'
        href='https://ss.noori2020.com/andos'
        rel='noopener noreferrer'
        target='_blank'
        download
      >
        1. 안드로이드 앱 다운로드 및 설치
      </a>
      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href={andpng}
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 안드로이드 설치 메뉴얼 보기
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
        아니요: 결제가능한 앱스토어 한국계정이 있습니까?(또는 미국,홍콩 등)
        <br />
        네: 한국계정에서 어플 구입 및 다운로드 후 2번으로 이동
        <br />
        아니요: 관리자에게 어플 다운방법 문의
      </p>
      <p>짝퉁어플 주의!! </p>
      <img src={fakeapp} className='App-img' alt='logo' />
      <p>중국앱스토어에 나오는 짝퉁 어플 입니다. 불꽃부분이 조금 다릅니다.</p>

      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href={iospng}
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 아이폰 설치 메뉴얼 보기
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
      {/* <a
        className='App-link'
        href={winapp}
        rel='noopener noreferrer'
        target='_blank'
        download='Netch.zip'
      >
        1. 윈도우용 프로그램 다운로드
      </a> */}
      <a
        className='App-link'
        href='https://ss.noori2020.com/winos'
        rel='noopener noreferrer'
        target='_blank'
        download
      >
        1. 윈도우용 프로그램 다운로드
      </a>
      <p>
        - 위험파일이라도 뜰수도 있으나, 정상이니, 계속 또는 확인을 눌러서 다운 받으시면 됩니다.
      </p>
      <p>
        - 다운이 안되실 경우 우클릭 해서 새창으로 링크열기 시도.
      </p>
      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href={winpng}
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 윈도우 설치 메뉴얼 보기
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
      {/* <a
        className='App-link'
        href={macapp}
        rel='noopener noreferrer'
        target='_blank'
        download='V2rayU.dmg'
      >
        1. 맥북/아이맥용 프로그램 다운로드
      </a> */}
      <a
        className='App-link'
        href='https://ss.noori2020.com/macos'
        rel='noopener noreferrer'
        target='_blank'
        download
      >
        1. 맥북/아이맥용 프로그램 다운로드
      </a>
      <p>2. 구독주소(URL) 복사 준비</p>
      <a
        className='App-link'
        href={macpng}
        target='_blank'
        rel='noopener noreferrer'
      >
        3. 맥 설치 메뉴얼 보기
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
        href='https://download.teamviewer.com/download/TeamViewerQS.dmg'
        target='_blank'
        rel='noopener noreferrer'
        download
      >
        MAC버젼 TeamViewerQS.dmg (우클릭 새탭에서 열기)
      </a>
      <a
        className='App-link'
        href='https://download.teamviewer.com/download/TeamViewerQS.exe'
        target='_blank'
        rel='noopener noreferrer'
        download
      >
        WINDOW버젼 TeamViewerQS.exe (우클릭 새탭에서 열기)
      </a>
      <p>
        즉석 원격 데스크톱 지원에 최적화된 작은 고객용 모듈은 설치나 관리자
        권한이 필요하지 않습니다 <br /> 간단하게 다운로드 및 더블클릭하여
        기술팀에게 제공된 ID와 비밀번호를 알려주세요.
      </p>
      <p></p>
      <p>다른 다운로드 링크</p>
      <a
        className='App-link'
        href='https://usvip2.vmess.red/files/2022/Noori-Netch-Installer-192.exe'
        rel='noopener noreferrer'
        target='_blank'
        download
      >
        윈도우 다운로드2
      </a>
      <a
        className='App-link'
        href='https://ss.noori2020.com/macos'
        rel='noopener noreferrer'
        target='_blank'
        download
      >
        맥 다운로드2
      </a>
      <a
        className='App-link'
        href='https://ss.noori2020.com/andos'
        rel='noopener noreferrer'
        target='_blank'
        download
      >
        안드로이드 다운로드2
      </a>
    </>
  );
}

export default App;
