# Create Next app boilerplate (with Tailwind CSS + React Query + Redux)

## ❓왜 만들게 되었나?

초기 구축마다 똑같은 구조와 라이브러리로 반복 작업을 하는 것이 지겨웠어요.<br/>
저만의 보일러플레이트를 만들어서 단순 작업들을 없애기 위해 만들었어요. :)

## ⚒기술 스택

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Next-000000?style=flat&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=TailwindCSS&logoColor=white"/> <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat&logo=daisyui&logoColor=white"/> <img src="https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=reactquery&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white"/> <img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/NPM-yellow?style=flat&logo=npm&logoColor=white"/>

## 😯어떻게 쓰나요?

### 설치 및 설정하기

```bash
# 로컬로 다운받기
$ git clone https://github.com/gingaminga/cna-boilerplate.git

# 다운받은 경로로 이동
$ cd cna-bolierplate

# 라이브러리 설치
$ npm install
```

**끝입니다!**

### 사용하기

아래 명령어들로 프로젝트를 사용할 수 있어요.

```bash
# 개발 환경으로 next 시작
$ npm run dev

# production 모드로 next build
$ npm run build

# production 모드로 next 시작
$ npm run start

# 단위 Test 하기
$ npm run test:unit

# src 하위 폴더 eslint 검사
$ npm run eslint

# src 하위 폴더 eslint 검사 및 자동 고치기
$ npm run eslint:fix

# src 하위 폴더 자동 코드 포맷팅
$ npm run prettier:write

# storybook 실행
$ npm run storybook

# storybook 배포
$ npm run build-storybook
```

> 자세한 내용은 [package.json](https://github.com/gingaminga/cna-bolierplate/blob/main/package.json)의 `script`를 확인하세요. :)

## 📁폴더 및 파일 설명

- `components` : 리액트컴포넌트를 담는 폴더
- `dist` : `src`폴더를 기준으로 트랜스파일링하여 javascript로 빌드된 폴더(`tsconfig.json`에서 변경 가능)
- `logs` : `.env` 파일로 설정하지 않았다면 생기는 폴더로, winston을 사용한 log를 쌓음
- `src` : 실제 서비스에 대한 코드가 들어있는 폴더
  - `components` : 리액트 컴포넌트를 담는 폴더
  - `hooks` : 커스텀 hook을 담는 폴더
  - `pages` : path routing을 하는 next로 구성된 폴더
  - `store` : redux store 폴더
  - `stories` : storybook components 폴더
  - `styles` : 공통 style 폴더
  - `test` : 테스트 로직 폴더
    - `unit` : 단위 테스트 폴더
  - `types` : 커스텀 타입을 설정하는 폴더
  - `utils` : 각종 유틸들

## 👍 자신의 프로젝트로 사용하기

git remote 를 변경하거나 삭제하면 돼요. :)

```bash
# 원격지 확인
$ git remote -v
# origin  https://github.com/gingaminga/cna-bolierplate.git (fetch)
# origin  https://github.com/gingaminga/cna-bolierplate.git (push)

# 기존 원격지 삭제
$ git remote rm origin

# 자신의 레포지토리를 원격지로 설정
$ git remote add origin [자신의 레포지토리 주소]
```

(해당 보일러플레이트를 사용하고 있는 상태에서) 업데이트된 소스를 반영받고 싶다면 `merge or rebase`를 통해 반영하면 돼요. :)

```bash
# 원격지 추가
$ git remote add boilerplate https://github.com/gingaminga/cna-bolierplate.git

# boilerplate repository 반영사항 가져오기
$ git fetch boilerplate main

# 반영사항을 현재 (자신의) 로컬 브랜치에 합치기
$ git rebase boilerplate/main
# or
$ git merge boilerplate/main
```
