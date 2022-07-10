import CategoriesContext from "./CategoriesContext";
import TasksContext from "./TasksContext";
import PathContext from "./PathContext";
import UserContext from "./UserContext";

interface Props {
  children?: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return (
    <CategoriesContext>
      <TasksContext>
        <PathContext>
          <UserContext>{children}</UserContext>
        </PathContext>
      </TasksContext>
    </CategoriesContext>
  );
}

export default ContextProvider;
