import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    {
      id: Date.now(),
      detail: "제육볶음 먹기",
      status: false,
    },
    {
      id: Date.now() + 1,
      detail: "운동하기",
      status: true,
    }
  ]);

  const addList = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;

    const newList = {
      id: Date.now(),
      detail: value,
      status: false,
    };
    setList([...list, newList]);
    setValue("");
  };

  const toggleStatus = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setList(updatedList);
  };

  const handleDelete = (id) => {
    const removeList = list.filter((item) => item.id !== id);
    setList(removeList);
  }

  return (
    <>
      <form onSubmit={addList}>
        <h2>할 일 등록</h2>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">등록</button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span style={{
              textDecoration: item.status ? "line-through" : "none"
            }}>{item.detail}</span>
            <button onClick={() => toggleStatus(item.id)}>
              {item.status ? "취소" : "완료"}
            </button>
            <button type='button' onClick={() => handleDelete(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
