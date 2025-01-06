import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './routes/home/home.component'
import Layout from './layout';
import CompletedTasks from './routes/completed-tasks/completed-tasks.component';
import DeletedTasks from './routes/deleted-tasks/deleted-tasks.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='completed' element={<CompletedTasks/>}/>
          <Route path='deleted' element={<DeletedTasks/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
