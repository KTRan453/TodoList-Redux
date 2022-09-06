import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState(""); //các state con dùng để lấy dữ liệu nhậP vào và set cho state chung  trong store
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector); //useSelector nhậN vào callback đc đ/n sẵn thay vì đ.n trực tiếp trong này ((state) =>state.filters.search)
  //nhận vào callback chứ k nhận vào 1 value
  // const searchText = useSelector(searchTextSelector) //lấy state filter về (filter dc set lên từ comp Filters)
  console.log(todoList);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    //value này trả trực tiếp nhờ Select trong antDesign.ko cần trỏ từ e
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo, index) => (
          <Todo
            id={todo.id}
            key={index}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>

      {/* phần input dưới cùng */}
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
