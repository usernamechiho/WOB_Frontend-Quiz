# WOB_Frontend-Quiz

## 🚀 배포
https://chiho-frontend-quiz.netlify.app/

## 자바스크립트, 리액트를 공부할 수 있는 퀴즈 앱입니다.

### 작업 기간

6월 4일 17:00 시작 ~ 6월 5일 16:00 종료

### 파일 구조
```
├── GNB
├── assets
│   ├── images
│   ├── jsons
│   └── svgs
├── hooks
│   └── worker
├── routes
│   ├── QuizCard
│   ├── QuizSelect
│   ├── ResultPage
│   ├── WrongAnswer
│   └── _components
│       ├── Button
│       ├── QuizBoxContainer
│       ├── QuizCardLayout
│       └── SubmitButton
├── services
├── states
├── styles
│   ├── base
│   ├── constants
│   └── mixins
├── types
│   └── react-reveal
└── utils
```

### 기능

![메인페이지](https://user-images.githubusercontent.com/87627359/172036691-e729ca42-6d39-438c-af25-a8221b12b671.gif)


- 메인 페이지입니다.
- 자바스크립트, 리액트 퀴즈 선택 버튼이 있습니다.
- 해당 버튼을 클릭하면 카테고리에 맞는 질문이 나오게됩니다.

![퀴즈페이지](https://user-images.githubusercontent.com/87627359/172036692-c4da98ab-1101-49c9-9988-7404983a3bfe.gif)


- 퀴즈 페이지입니다.
- 사지선다 형식입니다.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/87627359/173246684-f895c441-377a-454d-a713-1a33321d1c77.png">


- 정답률을 나타냅니다.

![오답페이지](https://user-images.githubusercontent.com/87627359/173246729-dacc3d05-dbfd-48ef-aca9-ef148ce4a161.gif)

- 오답을 선택한 질문들이 노출됩니다.
- Continue 버튼을 누를 시 메인 페이지로 이동합니다.
