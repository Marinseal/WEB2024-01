import { useContext } from "react";
import { TaskContext } from "../components/Context/Context";


export const contextTask = () => {
  const context = useContext(TaskContext);
  
  if(!context){
     throw new Error("Sorry, no context") 
  }
  
  return {
    ...context
  }
}