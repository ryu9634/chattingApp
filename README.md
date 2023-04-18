# chattingApp

### 커밋시 날짜 및 커밋파일 기록해두기
</br>
</br>
<h3>23.04.03 구현기능 목록</h3>
<ul>· 회원가입 > 핸드폰 본인인증</ul>
<ul>· 이름으로 친구추가</ul>
<ul>· ID/PW 찾기</ul>
<ul>· google api 전화번호 동기화</ul>
<ul>· 친구 리스트 + 검색</ul>
<ul>· 채팅</ul>
<ul>· chatGPT 사용 > GPT 랑 대화하기</ul>
<ul>· 프로필사진 + 상태메시지</ul>
<ul>· 친구 숨김 + 차단</ul>
<ul>· 메세지 답장</ul>
<ul>· 이모티콘</ul>
<ul>· QR 로그인</ul>
<ul>· 채팅 내 공지</ul>
</br>
</br>
</br>
2023.03.29
 -  깃 레파지토리 생성 및 프로젝트 생성 </br>
    (open jdk 1.8 ver 사용하려했으나 빌드 과정에서 gradle 과 버전 충돌나서 해결중)
</br>
 - 자바 버전 jdk 17 로 변경해서 해결 </br>
 - SDK - 17 (Oracle Open JDK version 17.0.1
 - 언어수준 - SDK 디폴트 (17)
</br>


## Front

### 2023-04-16 react CRA PWA 프로젝트로 변경 (정운만)
1. 추가된 디렉토리
<ul>api => api 관련 js 모음 </ul>
<ul>components => react Components js 모음</ul>
<ul>components/css => components 관련 css 모음</ul>
<ul>images => 잡다한 이미지 넣기</ul>
<ul>images/logo => logo 이미지 모음 (규격에 맞는)</ul>


### 2023-04-17 1차 Commit 회원 인증 단계 (정운만)
1. 추가된 디렉토리
<ul>store => redux 쓸 때 store 모아둘 디렉토리</ul>
<ul>images/buttons => >나< 처럼 버튼 역할을 하는 img 모음 디렉토리</ul>

2. 추가된 js파일
<ul>Authentication.js => 회원번호 입력하는 파일 (아직 보완 필요)</ul>
<ul>StartScreen.js => 첫화면</ul>

3. 추가된 css 파일
<ul>components/css/ 파일들은 js 파일명과 같음 매칭</ul>
<ul>main.css => 최상위 css파일로 만들려 했으나 굳이...? 나중에 확인해보도록 하겠음.</ul>
<ul>styled-components 사용 고려 중</ul>

4. 다음으로 할 것.
<ul>AuthenticationModal 만들기<ul>
<ul>분기 지어서 화면 뿌리기 (일부완성 - 2023-04-17)\</ul>
<ul>css 분리하고, 동적 화면 만들기 (진행중)\</ul>
<ul>회원가입 및 로그인 인증 화면 (진행중)</ul>


### 2023-04-18 Commit 회원 인증 단계 (UI, 기능 구현 완료) (정운만)

1. 나중에 기능 개선할 것들
- 국가코드 다양화
- 번호 입력 후 인증 번호 입력 페이지로 넘어갈 때 번호 입력했는지 검증 => URL GET방식으로 접속 방지
- redux toolkit으로 state 저장

2. 커밋한 파일
- reactfront\package-lock.json
- reactfront\package.json
- reactfront\src\index.js
- reactfront\src\routes\css\elements\alerts.css
- reactfront\src\routes\css\Verification.css
- reactfront\src\routes\Verification.js
- reactfront\src\store.js
- reactfront\src\store\store.js
- reactfront\src\store\timeSlice.js

3. 다음으로 할 것.
- Authentication.js, Verification.js ajax 도입
- ChatList 화면 구성
