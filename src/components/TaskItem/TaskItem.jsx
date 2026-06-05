export default function TaskItem({ task, onDeleteTask, onToggleStatus }) {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "open":
        return "badge-warning";
      case "in-progress":
        return "badge-info";
      case "done":
        return "badge-success";
      default:
        return "badge-ghost";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "open":
        return "Offen";
      case "in-progress":
        return "In Arbeit";
      case "done":
        return "Erledigt";
      default:
        return status;
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300">
      <div className="card-body">
        <div className="flex justify-between items-start gap-2">
          <h3 className="card-title text-lg font-bold truncate">
            {task.title}
          </h3>
          <span
            className={`badge ${getStatusBadgeClass(task.status)} whitespace-nowrap`}
          >
            {getStatusLabel(task.status)}
          </span>
        </div>

        <p className="text-sm text-base-content/70 my-2 min-h-10">
          {task.description}
        </p>

        <div className="text-xs font-semibold text-base-content/60 my-1">
          <span>Verantwortlich: </span>
          <span className="text-base-content">
            {task.assignee || "Nicht zugewiesen"}
          </span>
        </div>

        <div className="card-actions justify-end mt-4 gap-2">
          <button
            onClick={() => onToggleStatus(task.id)}
            className="btn btn-xs btn-outline btn-secondary"
          >
            Status ändern
          </button>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="btn btn-xs btn-error text-white"
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}
