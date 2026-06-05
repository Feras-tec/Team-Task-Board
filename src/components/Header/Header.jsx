import styles from './Header.module.css';


export default function Header({totalTasks, doneTasks}) {
  return (
    <header className={styles.header}>
      <h1>Team Task Board</h1>
      <p>{doneTasks} of {totalTasks} tasks done</p>
    </header>
  );
}