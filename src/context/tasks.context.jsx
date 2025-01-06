import { createContext } from "react";
import useLocalStorageState from 'use-local-storage-state';

const TasksContext = createContext();

const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useLocalStorageState('tasks', {defaultValue: []})
    const [deletedTasks, setDeletedTasks] = useLocalStorageState('deletedTasks', {defaultValue: []})
    const [completedTasks, setCompletedTasks] = useLocalStorageState('completedTasks', {defaultValue: []})

    const removeTask = (id) => {
        setDeletedTasks([...deletedTasks, tasks.find((task) => task.id === id)])
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const completeTask = (id) => {
        const completedTask = tasks.find((task) => task.id === id)
        setCompletedTasks([...completedTasks, {...completedTask, completed: true}])
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const undoTask = (tasksArray,id) => {
        const task = tasksArray.find((task) => task.id === id)
        if(task.completed) {
            setCompletedTasks(completedTasks.filter((task) => task.id !== id))
        } else {
            setDeletedTasks(deletedTasks.filter((task) => task.id !== id))
        }
        setTasks([...tasks, {...task, completed: false}])
    }

    return (
        <TasksContext.Provider value={{tasks, setTasks, removeTask, completeTask, undoTask, deletedTasks, completedTasks}}>
            {children}
        </TasksContext.Provider>
    )
}

export {TasksContext, TasksProvider}