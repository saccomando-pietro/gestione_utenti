const TaskList = ({ tasks }) => {
  if (!tasks.length) return <p>Seleziona un progetto per vedere le task</p>;

  return (
    <div className="task-list">
      <h2>Task</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
