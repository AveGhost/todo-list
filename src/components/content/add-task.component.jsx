import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext, useState } from 'react';
import { ModalStateContext } from '../../context/modal-state.context';
import { TasksContext } from '../../context/tasks.context';
import { Icon } from '@iconify/react/dist/iconify.js';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

const AddTask = () => {
    const { isTaskOpen, setIsTaskOpen } = useContext(ModalStateContext)
    const {tasks,setTasks} = useContext(TasksContext)
    const [task,setTask] = useState('')
    const [type,setType] = useState('')
    const [description,setDescription] = useState('')
    const [priority,setPriority] = useState('')
    const [date,setDate] = useState(dayjs())
    const [completed,setCompleted] = useState(false)
    const id = uuid()
    const [isValid, setIsValid] = useState('')
    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePriority = (e) => {
        setPriority(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!task || !priority || !date){
            setIsValid('Please fill all required fields')
            return
        }

        setTasks([...tasks, {id:id,task,type,description,priority,date,completed}])   
        setIsTaskOpen(!isTaskOpen)
    }

    return (
        <div className='fixed inset-0 bg-opacity-70 bg-black z-0'>
            <div className="task-card fixed inset-0 max-w-[700px] p-4 mx-auto max-h-fit -translate-y-1/2 top-1/2 z-10">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-lg font-medium">Add new task</h2>
                    <Icon icon="material-symbols:close" className='cursor-pointer' width="18" height="18" style={{color: '#fff'}} onClick={() => setIsTaskOpen(!isTaskOpen)} />
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label>Task name</label>
                        <input type="text" name="task" value={task} onChange={handleTask} placeholder="Task name" className="bg-transparent border border-slate-700 rounded-lg !p-2 placeholder:px-2 placeholder:text-[.8rem]" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Task type (optional)</label>
                        <input type="text" name="type" value={type} onChange={handleType} placeholder="eg. Home staff" className="bg-transparent border border-slate-700 rounded-lg !p-2 placeholder:px-2 placeholder:text-[.8rem]" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Short description (optional)</label>
                        <textarea name="description" value={description} onChange={handleDescription} placeholder="Short description" className="bg-transparent border border-slate-700 rounded-lg !p-2 placeholder:px-2 placeholder:text-[.8rem]" />
                    </div>
                    <FormControl>
                        <InputLabel id="prority-label" className='!text-[.8rem] !text-gray-400 !pl-1'>Prority</InputLabel>
                        <Select required value={priority} labelId='prority-label' id="prority-select" label="Prority" className="bg-transparent border border-slate-700 !rounded-lg !text-[.8rem]" sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white' } }} onChange={handlePriority}>
                            <MenuItem value={'primary'}>Primary</MenuItem>
                            <MenuItem value={'non-primary'}>Non-primary</MenuItem>
                        </Select>
                    </FormControl>
                    <time className="flex flex-col gap-2">
                        <span>Due date</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{
                                textField: {
                                    className: '',
                                    InputProps: {
                                        className: '!border !border-slate-700 !text-white !rounded-lg !pl-2',
                                    },
                                },
                                name: 'date',
                                required: true
                            }}
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                        />
                        </LocalizationProvider>
                    </time>
                    <button type='submit' className="bg-orange-600 rounded-lg p-2 font-medium">Add task</button>
                    {isValid && <p className="text-red-500 text-[.8rem]">{isValid}</p>}
                </form>
            </div>
        </div>
    )
}

export default AddTask