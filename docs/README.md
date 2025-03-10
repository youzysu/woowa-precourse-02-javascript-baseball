# 미션 - 숫자 야구

## 🚀 기능 요구 사항 분석

- 게임 시작 문구를 출력한다.
- 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.
- 사용자로부터 서로 다른 3개의 숫자를 입력받는다.
  - 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨 후 애플리케이션을 종료한다.
    - 입력한 숫자에 중복값이 있는 경우
    - 숫자를 3개 입력하지 않은 경우(3개보다 적거나 3개보다 많이 입력한 경우)
    - 숫자가 아닌 타입을 입력한 경우
- 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
  - 같은 수가 같은 자리에 있으면 `스트라이크`이다.
  - 같은 수가 다른 자리에 있으면 `볼`이다.
  - 같은 수가 전혀 없으면 `낫싱`이다.
  - 3개의 숫자를 모두 맞힐 경우 정답 문구를 출력한다.
- 게임이 끝난 경우 재시작/종료 여부를 입력 받는다.
  - 1을 입력하면 게임을 다시 시작한다.
  - 2를 입력하면 게임을 종료한다.
  - 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨 후 애플리케이션을 종료한다.

## 🔍 기능 구현 목록

- [x] App
  - [x] play method를 통해 프로그램을 실행한다.
- [x] GameController
  - [x] 전반적인 게임 로직을 구현한다.
- [x] InputView
  - [x] 사용자로부터 숫자를 입력 받는다.
  - [x] 사용자로부터 게임 재시작/종료 여부를 입력 받는다.
- [x] OutputView
  - [x] 게임 시작 문구를 출력한다.
  - [x] 사용자가 입력한 값에 대한 결과를 출력한다.
  - [x] 정답 문구를 출력한다.
- [x] Computer
  - [x] 1에서 9까지 서로 다른 임의의 수 3개로 이루어진 정답을 생성한다.
  - [x] 사용자가 입력한 값과 정답을 비교한다.
    - [x] 같은 수가 같은 자리에 있는 스트라이크 개수를 계산한다.
    - [x] 같은 수가 다른 자리에 있는 볼의 개수를 계산한다.
- [x] Validator
  - [x] 사용자가 입력한 숫자에 중복이 있는지 검증한다.
  - [x] 사용자가 숫자를 3개 입력했는지 검증한다.
  - [x] 사용자가 입력한 값이 숫자 1부터 9인지 검증한다.
  - [x] 사용자의 입력값이 1 또는 2인지 검증한다.

