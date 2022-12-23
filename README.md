# 원티드 프리온보딩 1주차 첫 번째 과제

## 🤝 과제 소개 및 목적

팀원들이 수행한 선발 과제의 각자 구현 방법을 설명하고 토론했을 때,
팀 안에서 각 단위마다의 가장 효율적이라고 판단되는 것들을 정하고
단위별 Best Practice를 모아서 팀의 최종 결과물을 만들어 내기

➡️ 동료 학습, 팀으로 일하는 법에 익숙해 지는 것

## ✈️ 배포 링크

https://pre-onboarding-11th-1-1.vercel.app/

## 👨‍👩‍👧‍👦 팀 소개

<table>
<tr>
    <td align="center">
        <a href="https://github.com/hozunlee">
        <img src="https://avatars.githubusercontent.com/u/60101732?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@hozunlee</b></sub>
        <br />
        <sub><b>이호준(팀장)</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/8dong">
        <img src="https://avatars.githubusercontent.com/u/96307662?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@8dong</b></sub>
        <br />
        <sub><b>김동현</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/yesharry">
        <img src="https://avatars.githubusercontent.com/u/101863209?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@yesharry</b></sub>
        <br />
        <sub><b>노해리</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/blan19">
        <img src="https://avatars.githubusercontent.com/u/66871265?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@blan19</b></sub>
        <br />
        <sub><b>박준서</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center">
        <a href="https://github.com/gandy818">
        <img src="https://avatars.githubusercontent.com/u/67881881?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@gandy818</b></sub>
        <br />
        <sub><b>유나영</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/copiter">
        <img src="https://avatars.githubusercontent.com/u/99804262?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@copiter</b></sub>
        <br />
        <sub><b>장태경</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/homile">
        <img src="https://avatars.githubusercontent.com/u/56163157?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@homile</b></sub>
        <br />
        <sub><b>조민우</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ALSRUD29">
        <img src="https://avatars.githubusercontent.com/u/107922059?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@ALSRUD29</b></sub>
        <br />
        <sub><b>박민경</b></sub>
        </a>
    </td>
</tr>
</table>

## ⚡️ 프로젝트 실행 방법

```
npm install
npm start
```

## 🌲 src 폴더 구조

```
📦 src
├─ apis
│  └─ Api.ts
├─ components
│  ├─ auth
│  │  ├─ AuthField.tsx
│  │  └─ AuthForm.tsx
│  ├─ common
│  │  ├─ Button.tsx
│  │  └─ InputField.tsx
│  └─ todo
│     ├─ TodoCreate.tsx
│     └─ TodoList.tsx
├─ pages
│  ├─ auth
│  │  ├─ Signin.tsx
│  │  └─ Signup.tsx
│  └─ todo
│     └─ Todo.tsx
└─ Index.jsx
```

**_ Best Practice 선정 이유 _**

```
좋은 폴더구조에 대한 논의 결과, 보편적으로 많이 사용하는 구조, 다른 사람들이 쉽게 이해할 수 있는 구조,
리팩토링이 용이하고 일관성 있는 구조가 best-practice라는 결론이 나왔습니다. pages와 components
폴더를 주축으로 하고 api, hook 등 추가적으로 필요한 폴더를 추가하는 구조가 코드 리팩토링에도 용이하고,
후에 확장성에도 제약이 적을 것입니다.

또한 style관련 파일을 따로 분류하는 것에 대한 논의가 있었는데, styled-components를 사용하기로 정하였고,
따로 파일로 분리하기 보다는 각 컴포넌트 안에서 관리하는 것이 직관적이고, 유지보수가 용이하다고 판단하였습니다.

추가적으로 컴포넌트 재사용성 고려 & 명확한 프로젝트 구조 유지를 위해 아토믹 디자인 패턴을 도입하자는 의견이
있었는데, 이미 기존의 코드가 있는 상태에서 아토믹 디자인 패턴에 따른 구조를 도입하기에는 시간상 무리가 있다고
결론을 내렸습니다.
```

## 🗣️ 프로젝트 진행 과정

### 협업 도구

```
주된 커뮤니케이션 툴로 팀 노션페이지와 디스코드를 사용했습니다. 짧은 시간 내에 효율적으로 소통하기 위해 팀노션페이지를
적극적으로 활용하여, 자신의 코드를 분석하고, 다른 사람의 Best-Practice를 정리하였습니다.
이를 바탕으로 팀원들은 디스코드에서 실시간으로 만나 복잡한 코드, 로직을 잘 정리하여 피드백하며, '상대방을 이해시키는 소통'을
효과적으로 할 수 있었습니다. 이외에도 commit 컨벤션, 브랜치 전략, 네이밍 등을 명확히 공유하고,
8명의 팀원의 스케쥴링 및 목표설정 등에도 노션페이지를 적극 활용했습니다.

또한 VScode의 Live Share, 디스코드의 화면공유(Live coding)를 통해 팀원들이 함께 모여 실시간으로 작업을 진행하였습니다.
```

#### Notion

[11팀 노션 링크](https://www.notion.so/8-11-1-6a4f1765336246d59ec75d383790b981)

![7-팀노션](https://user-images.githubusercontent.com/107922059/209205791-2bf3a1b3-2479-4d7a-8773-a1b411e618d8.gif)

#### Discord

<img src="https://user-images.githubusercontent.com/101863209/209189391-4f568359-6d3a-4e17-b208-42ab6d0151f2.png" width="600" height="350">

#### Live Share

<img src="https://user-images.githubusercontent.com/101863209/209188748-bee8683d-09f0-4021-80da-cc8d803f9ad0.jpeg" width="600" height="350">

#### Live Coding

<img src="https://user-images.githubusercontent.com/101863209/209188831-f6a07095-4f7d-4123-90a7-617bbcdbdce1.jpeg" width="600" height="350">

## 🎬 기능 소개

### 1. 로그인 / 회원가입

#### ✅ Assignment1

이메일과 비밀번호의 유효성 검사 기능을 구현해주세요.

- 이메일 조건 : @ 포함
- 비밀번호 조건 : 8자 이상
- 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록

![1-회원가입](https://user-images.githubusercontent.com/107922059/209198460-a4577825-c484-4400-a181-b6ad70b3aeea.gif)

**_ Best Practice 선정 이유 _**

```
회원가입/로그인 폼에서 input에 입력되는 값에따라 유효성 검사의 결과를 바로 알 수 있는 점과
아직 회원이 아니라면 회원가입 경로로 유도하는 방식이 사용자 측면에서 좋은 것 같아
Best Practice로 선정했습니다.
```

#### ✅ Assignment2

로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요

- 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
- 응답 받은 JWT는 로컬 스토리지에 저장해주세요

![2-로그인](https://user-images.githubusercontent.com/107922059/209198480-5eb966bd-c607-4e12-bca8-e8559074ab41.gif)

#### ✅ Assignment3

로그인 여부에 따른 리다이렉트 처리를 구현해주세요

- 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
- 로컬 스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

![3-리다이렉트](https://user-images.githubusercontent.com/107922059/209198498-723d2804-cfec-4aa3-aca2-fffa4cd7dff4.gif)

**_ Best Practice 선정 이유 _**

```
처음 Context API를 사용하여 리다이렉트 하는 것과 고민을 많이 했지만
최대한 상태 관리는 안하는 쪽으로 가자는 의견으로 localStorage에 있는
토큰을 가져와 useEffect로 처리하는 방식을 Best Practice로 선정했습니다.
```

### 2. 투두리스트

#### ✅ Assignment4

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.

![6-투두리스트 완료](https://user-images.githubusercontent.com/107922059/209204036-600eb38f-ce7b-47da-b02d-ef8264d4a29e.gif)

**_ Best Practice 선정 이유 _**

```
TodoList의 목록을 불러오는 getTodo API 는 추가 시, 수정 시, 삭제 시에 쓰이므로
꽤 자주 쓰인다고 할 수 있습니다.

todoList에 변동이 있을 때(추가, 수정, 삭제) 마다 getTodo API를 호출하기로 한 상태에서
모든 컴포넌트마다 계속 API 호출 구문을 쓰는 것은 비효율적이라고 판단됐습니다.
때문에 컴포넌트가 아닌 pages의 Todo.tst 에서 api를 호출하고 각각 컴포넌트에 props로
보내주는 방식을 선정했습니다.

가독성과 직관성을 높이기 위해 보여지는 목록은 reverse함수를 사용해서 최신에 추가된 항목이
제일 첫번째로 오도록 설계했습니다.
```

- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

![4-투두추가](https://user-images.githubusercontent.com/107922059/209202294-398a397c-f7ea-48c6-aa5b-272516e0e6d8.gif)

**_ Best Practice 선정 이유 _**

```
TodoCreate부분은 todoList와 성질이 다르다고 생각하여 분리를 시켰습니다.
성공적으로 createTodo API와 통신하면 새 할 일이 추가된 목록을 getTodo API로 호출해서
보여지는 방식을 선정했습니다.
API를 호출하지 않고 프론트단에서 기존 todoList 배열에서 createTodo API 에서 받은 값을
추가하는 방법도 있었는데, 저희 팀은 getTodo api를 바로 호출하는 것이 서버와 동기화가
잘 된다는 이점을 가지고 있어 이 방식을 best-paractice로 선정하게 되었습니다.
```

#### ✅ Assignment5

투두 리스트의 수정, 삭제 기능을 구현해주세요

- 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
- 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요

![5-투두수정](https://user-images.githubusercontent.com/107922059/209198528-56199095-9456-41db-8755-db62cd34aad1.gif)

**_ Best Practice 선정 이유 _**

```
우선 기능은
- 체크박스 클릭 시 updateTodo API 타서 완료된 항목으로 처리
- 수정 모드일 때 역시 수정된 체크박스 값과 text 값 반영
- 수정 모드 일 때는 기존의 [수정] 버튼과 [삭제] 버튼이 사라지고 [수정 완료] 버튼과 [수정 취소] 버튼이 나타남
이렇게 세가지의 기능이 동작하도록 설계했습니다.

위의 세가지 기능이 모두 들어가 있어야 todoList의 완성도를 높일 수 있다고 판단됐기 때문입니다.
예를 들어 수정 모드 일 때 text 값만 바뀌고 체크 박스 값이 바뀌지 않는다던지, 혹은 수정 모드가 아닐 때
체크박스를 눌러도 완료처리가 되지 않는다면 완벽한 TodoList라고 할 수 없겠죠?
```

- 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

![5-투두삭제](https://user-images.githubusercontent.com/107922059/209198540-cd7d0adb-bc04-4ff8-84b5-d6df9870bcf8.gif)

**_ Best Practice 선정 이유 _**

```
deleteTodo부분 역시 삭제 API 호출에 성공하면 getTodo를 통해 서버에서 새 목록을 불러와 뿌려주는 방식을
best practice로 선정하여 개발했습니다.

물론 삭제가 완료되면 해당 todoItem의 인덱스를 활용하여 화면에서 지워주는 방식도 있었지만 추가, 삭제 부분과
통일성을 맞추자는 의견과 이 역시 API를 호출하는 것이 서버와 동기처리가 훨씬 더 좋다는 의견을 반영해
이 방법을 사용하게 되었습니다.
```

### 3. API

**_ Best Practice 선정 이유 _**

```
axios 인스턴스를 생성하여 api를 따로 분리시킨 코드를 best-practice로 선정하였습니다. api instance를
사용하여 코드의 재사용성을 높이고 api 로직을 따로 관리하는 것이 좋다는 것에 모두 동의하였습니다.
더불어, 불필요한 코드의 중복과 낭비를 막기 위해 axios interceptor를 사용하였습니다.

추가로 api를 todo와 auth로 따로 분리하는 것에 대한 논의가 있었는데, api의 양이 많지 않았기 때문에
간결하고 깔끔한 파일 구성을 위하여 하나의 파일에서 관리하기로 하였다.
```

### 4. 린트, 프리티어

**_ Best Practice 선정 이유 _**

```
처음 각자의 코드를 설명하는 시간을 가질 때, 전부 다른 스타일의 코드들을 보니 읽기도 어렵고
이해하기 어려운 부분이 생겨 협업의 능률을 올리기 위해 지난 세션에서 배운 린트와 프리티어를
적용하였습니다.
```

## 💡 추가 구현 사항

- API 호출 시 올바른 응답을 받지 못 하는 경우 받는 에러코드와 에러메세지를 활용하여 에러창을 띄웁니다. 에러가 나는 경우는 다음과 같습니다.

  - 이미 가입이 되어있는 이메일로 회원가입을 시도할 경우

  - 가입되어 있지 않은 이메일로 로그인을 시도할 경우

  - 로그인시 이메일과 비밀번호가 일치하지 않을 경우

  - 투두리스트에 빈 값을 추가하는 경우

  - 투두리스트 개별 아이템 수정 시 빈값으로 수정하는 경우

- 로그아웃

  - 로그아웃 시 로컬스토리지에 있는 토큰을 지우고, 로그인화면으로 redirect합니다.

## 📝 Commit message Convention & branch 전략

- commit message

  - **feat : 새로운 기능 추가**
  - **fix : 버그 수정**
  - **docs : 문서 수정**
  - **style : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우**
  - **refactor : 코드 리팩터링**
  - **test : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)**
  - **chore : 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)**
  - **design : CSS 등 사용자 UI 디자인 변경**
  - **comment : 필요한 주석 추가 및 변경**
  - **rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우**
  - **remove : 파일을 삭제하는 작업만 수행한 경우**
  - **!BREAKING CHANGE : 커다란 API 변경의 경우**
  - **!HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우**
  - 추가규칙
    - 타입 : 제목
      본문
      꼬리말
    - 본문과 꼬리말은 생략 가능하다(선택사항)
    - 타입은 위 13가지로 한정한다
    - 제목은 고유어를 제외하고 한글로 쓴다
    - 타입의 첫글자는 소문자로 사용하고, 콜론 앞뒤로 한칸씩 띄운다

- branch 전략
  - `main`, `dev`, `feat` branch만 사용
    - `main`: 배포 및 최종본, 출시 버전 브랜치
    - `dev`: 개발용 브랜치
    - `feat/` : 세부기능 개발용 브랜치
      - feat/auth
      - feat/todo
      - feat/docs
    - `design/` : 스타일링 브랜치
      - design/auth
      - design/todo

## ⚒️ 기술 스택 / 라이브러리

```
TypeScript, React, Styled-Components, axios, react-router
```
