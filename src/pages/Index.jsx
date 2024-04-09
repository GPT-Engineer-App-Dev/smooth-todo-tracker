import { useState } from "react";
import { Box, Heading, Input, Button, Flex, List, ListItem, IconButton } from "@chakra-ui/react";
import { FaPlus, FaCheck, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" margin="auto" p={4}>
      <Heading as="h1" mb={8}>
        Todo App
      </Heading>
      <Flex mb={8}>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
        <Button onClick={addTodo} colorScheme="green">
          <FaPlus />
        </Button>
      </Flex>
      <List spacing={4}>
        {todos.map((todo, index) => (
          <ListItem key={index} p={4} borderWidth={1} borderRadius="md" backgroundColor={todo.completed ? "green.100" : "white"}>
            <Flex align="center">
              <Box flex={1}>{todo.text}</Box>
              <IconButton icon={<FaCheck />} onClick={() => toggleTodo(index)} mr={4} />
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
