import { UserContext, useUserContext } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

let name;
let nickName;

const ContextQ2Form = (addUser) => {
  const [ users ] = useUserContext();
  


  return (
    <div>
      <h1>Q2Form</h1>
      <input placeholder="name" onChange={(e) => name = e.target.value}/>
      <input placeholder="nick-name" onChange={(e) => nickName = e.target.value}/>
      <button onSubmit={() => addUser(name, nickName)}>추가</button>
      <ContextQ2Form2 />
    </div>
  );
};
export default ContextQ2Form;
