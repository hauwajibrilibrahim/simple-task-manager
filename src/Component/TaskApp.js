import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleButton = styled.button`
  background: ${(props) => props.theme.buttonBackground};
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.buttonHover};
  }
`;

function TaskApp({ onToggleTheme }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const filteredTasks = filter === 'All' ? tasks : tasks.filter((task) => task.category === filter);

  return (
    <Container>
      <Header>
        <h1>Task Manager</h1>
        <ToggleButton onClick={onToggleTheme}>Switch Theme</ToggleButton>
      </Header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="All">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </Container>
  );
}

export default TaskApp;
