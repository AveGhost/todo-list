import TaskCard from "../../components/content/task-card.component"
import AddTask from "../../components/content/add-task.component"
import { ModalStateContext } from "../../context/modal-state.context"
import { TasksContext } from "../../context/tasks.context"
import { useContext } from "react"

const CompletedTasks = () => {
    const { isTaskOpen } = useContext(ModalStateContext)
    const {completedTasks} = useContext(TasksContext)
  
    return (
      <div className='grid grid-cols-4 gap-4'>
          {completedTasks && completedTasks.map((task, index) => {
          return <TaskCard key={index} id={task.id} title={task.task} description={task.description} priority={task.priority} type={task.type} date={task.date} status={task.completed} tasksArray={completedTasks} />
          })}
          {isTaskOpen && <AddTask />}
      </div>
    )
}

export default CompletedTasks