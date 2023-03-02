import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { rootReducer } from "../../../../store";
import { logger } from "redux-logger";
import { rootReducer } from "../store";

export const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development" &&
      composeWithDevTools(applyMiddleware(logger))
  );
// composeWithDevTools가 DevTools를 사용했다라는 의미이고 applyMiddleware()가 미들웨어 적용시킴.