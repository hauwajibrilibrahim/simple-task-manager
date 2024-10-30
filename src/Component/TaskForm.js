import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.inputBackground};
  border-radius: 4px;
  outline: none;
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};
`;
const Button = styled.button`
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

function TaskForm({ addTask }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTask({ id: Date.now(), text, category });
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default TaskForm;
