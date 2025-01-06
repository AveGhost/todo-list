import { Icon } from '@iconify/react'
import dayjs from 'dayjs'
import { TasksContext } from '../../context/tasks.context'
import { ModalStateContext } from '../../context/modal-state.context'
import { useContext } from 'react'

const TaskCard = ({id, title, description, type, priority ,date, status, deleted, tasksArray}) => {
    const {removeTask,completeTask,undoTask,setIsTaskEdit} = useContext(TasksContext)
    const {isTaskOpen,setIsTaskOpen} = useContext(ModalStateContext)
    const handleRemove = () => {
        removeTask(id)
    }

    const handleCompleted = () => {
        completeTask(id)
    }

    const handleUndoTask = () => {
        undoTask(tasksArray,id)
    }

    return (
        <div className='relative'>
            {status ?
                <div className="flex justify-center flex-col gap-4 items-center absolute inset-0">
                    <span className='text-green-400 uppercase text-lg block'>Completed</span>
                    <button className='text-[.8rem] text-red-800 border border-red-800 p-2 rounded-lg hover:bg-red-800 hover:text-white transition duration-300' onClick={handleUndoTask}>Mark as incomplete</button>
                </div>
                :
                <div className="flex justify-center flex-col gap-4 items-center absolute inset-0">
                    <span className='text-rose-400 uppercase text-lg block'>Deleted</span>
                    <button className='text-[.8rem] text-green-800 border border-green-800 p-2 rounded-lg hover:bg-green-800 hover:text-white transition duration-300' onClick={handleUndoTask}>Return</button>
                </div>
            }
            <div className={`task-card p-4 min-h-[250px] flex flex-col relative ${status || deleted ? 'opacity-30 pointer-events-none' : ''}`}>
                <div className='flex justify-between items-center'>
                    <h2 className="text-lg font-medium">{title}</h2>
                </div>
                <p className='text-[.8rem] py-4'>{description}</p>
                <div className="flex mt-auto text-[.8rem] gap-2">
                    <span className={`${priority} max-w-fit p-2 rounded-lg`}>{priority}</span> 
                    {type && <span className={`bg-purple-700 max-w-fit p-2 rounded-lg`}>{type}</span>}
                </div>
                <div className='flex gap-2 text-[.8rem] items-center mt-2'>
                    <Icon icon="solar:calendar-line-duotone" width="18" height="18" />
                    <span>{dayjs(date).format('DD.MM.YYYY')}</span>
                </div>
                <div className='flex gap-2 absolute bottom-4 right-4'>
                    <Icon icon="material-symbols:check" width="28" height="28" style={{ color: 'green' }} className='cursor-pointer hover:bg-green-950 rounded-lg transition duration-300 p-1' onClick={handleCompleted} />
                    <Icon icon="material-symbols:delete" width="28" height="28" style={{ color: 'red' }} className='cursor-pointer hover:bg-red-950 rounded-lg transition duration-300 p-1' onClick={handleRemove} />
                </div>
            </div>
        </div>
    )
}

export default TaskCard