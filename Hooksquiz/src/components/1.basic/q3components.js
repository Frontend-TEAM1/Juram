import { useEffect } from "react";

function Q3components({count, setCount}) {
  let render;

  useEffect(() => {

    render = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log(count);
    }, 1000)
    
    return () => {
      clearInterval(render);
    setCount(0)
  }
  }, [])

  return <div> πββοΈ μ€λκΈ° ... ing </div>;
}
export default Q3components;
