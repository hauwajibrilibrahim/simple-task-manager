import React from 'react';
import styled from 'styled-components';

const TaskCard = styled.div`
  background: ${(props) => props.theme.taskBackground};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background: ${(props) => props.theme.buttonBackground};
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.buttonHover};
  }
`;

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <div>
            <strong>{task.text}</strong>
            <p>Category: {task.category}</p>
          </div>
          <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
        </TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
