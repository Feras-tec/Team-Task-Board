import styles from "./Header.module.css";

export default function Header({
  totalTasks,
  doneTasks,
  openTasks,
  inProgressTasks,
}) {
  return (
    <header className={styles.header}>
      <h1>Team Task Board</h1>
      <div className="stats shadow my-4 bg-base-200 w-full flex justify-center">
        <div className="stat">
          <div className="stat-title text-xs">Gesamt</div>
          <div className="stat-value text-xl">{totalTasks}</div>
        </div>
        <div className="stat">
          <div className="stat-title text-xs">Offen</div>
          <div className="stat-value text-xl text-warning">{openTasks}</div>
        </div>
        <div className="stat">
          <div className="stat-title text-xs">In Arbeit</div>
          <div className="stat-value text-xl text-info">{inProgressTasks}</div>
        </div>
        <div className="stat">
          <div className="stat-title text-xs">Erledigt</div>
          <div className="stat-value text-xl text-success">{doneTasks}</div>
        </div>
      </div>
    </header>
  );
}
