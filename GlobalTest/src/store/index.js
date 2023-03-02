/* redux의 rootReducer를 정의하세요 */
import { combineReducers } from 'redux';
import reducer from './4_redux';

// 비어있는 reducer들의 집합장소 생성 combineReducers()
// 그리고 만든 reducer를 '객체'에 담아 넣어준다
export const rootReducer = combineReducers({ reducer })

// rootReducer에서 만든 거 사용할 땐 해당 파일 가서 useSelector((state) => state.reducer)