import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks, onDeleteTask, onToggleStatus }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center my-10 p-6 bg-base-100 rounded-xl shadow-inner max-w-md mx-auto">
        <p className="text-lg font-medium text-base-content/60">
          Keine Aufgaben vorhanden.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 my-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}
