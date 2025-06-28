import React, { useState } from 'react';
import { useLocalStorage } from '../utility/LocalStorage';
import { useTheme } from '../components/useTheme';

const TaskManager = () => {
  const { theme, toggleTheme } = useTheme();
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // all | active | completed

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleComplete = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="w-full max-w-lg mx-auto p-4 md:p-8 rounded shadow bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Task Manager</h2>
        <button onClick={toggleTheme} className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 transition duration-300 hover:scale-110">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
      <form onSubmit={addTask} className="flex mb-4">
        <input
          className="flex-1 border rounded-l px-3 py-2 dark:bg-gray-700 dark:text-white transition"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-300 hover:scale-105">Add Task</button>
      </form>
      <div className="flex space-x-2 mb-4">
        <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded transition ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>All</button>
        <button onClick={() => setFilter('active')} className={`px-3 py-1 rounded transition ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Active</button>
        <button onClick={() => setFilter('completed')} className={`px-3 py-1 rounded transition ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Completed</button>
      </div>
      <ul>
        {filteredTasks.length === 0 && (
          <li className="text-gray-500 dark:text-gray-400">No tasks</li>
        )}
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
            <span
              onClick={() => toggleComplete(task.id)}
              className={`flex-1 cursor-pointer transition ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="ml-2 text-red-500 hover:text-red-700 transition duration-300 hover:scale-125" title="Delete">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
