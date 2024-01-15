import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
        <button>Filter</button>
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {/* <div className="bg-white p-3 flex justify-center items-center font-semibold rounded-md text-2xl">
            <p>there is no task pending</p>
           </div> */}
           <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
           <TodoCard />
           <TodoCard />
           </div>
      </div>
    </div>
  );
};

export default TodoContainer;
