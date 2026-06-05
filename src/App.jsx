import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("myTasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
      );
      if (!response.ok) throw new Error("Fehler beim Laden der Aufgaben.");
      const data = await response.json();
      const transformedTasks = data.map((todo) => ({
        id: todo.id,
        title: todo.title,
        description: "Imported demo task",
        assignee: "Demo User",
        status: todo.completed ? "done" : "open",
      }));
      setTasks(transformedTasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (tasks.length === 0) {
      const timer = setTimeout(() => {
        loadTasks();
      }, 0);

      return () => clearTimeout(timer);
    }
    // only run when loadTasks reference changes or when tasks length is 0
  }, [loadTasks, tasks.length]);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("myTasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleStatus = (id) => {
    const statusOrder = {
      open: "in-progress",
      "in-progress": "done",
      done: "open",
    };
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: statusOrder[task.status] } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "open") return task.status === "open";
    if (filter === "in-progress") return task.status === "in-progress";
    if (filter === "done") return task.status === "done";
    return true;
  });

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <Header
        totalTasks={tasks.length}
        doneTasks={tasks.filter((t) => t.status === "done").length}
        openTasks={tasks.filter((t) => t.status === "open").length}
        inProgressTasks={tasks.filter((t) => t.status === "in-progress").length}
      />
      <TaskForm onAddTask={handleAddTask} />
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />

      {isLoading && <p className="text-center my-6">Lade Aufgaben...</p>}
      {error && <p className="text-center text-error my-6">{error}</p>}

      {!isLoading && !error && (
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onToggleStatus={handleToggleStatus}
        />
      )}
    </div>
  );
}

export default App;
