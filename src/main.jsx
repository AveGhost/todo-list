import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ModalStateProvider } from './context/modal-state.context.jsx'
import { TasksProvider } from './context/tasks.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalStateProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </ModalStateProvider>
  </StrictMode>,
)
