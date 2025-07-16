import { useMemo } from "react";
import { getVisibleDates, daysBetween } from "../utils/dateUtils";

const TaskList = ({ tasks }) => {
  const visibleDates = useMemo(() => getVisibleDates("2024-12-01", 365), []); // 6 mesi

  if (!tasks.length) return <p className="task-empty">Seleziona un progetto per vedere le task</p>;

  const getBarStyle = (startDate, duration) => {
    const startIndex = visibleDates.indexOf(startDate);
    const left = startIndex >= 0 ? startIndex * 20 : 0; // 20px per giorno
    const width = (duration) * 20;

    return {
      left: `${left}px`,
      width: `${width}px`,
    };
  };

  return (
    <div className="task-gantt">
      <div className="gantt-header">
        <div className="task-label-header">Task</div>
        <div className="gantt-dates">
          {visibleDates.map((date) => (
            <div key={date} className="gantt-date">
              {date.slice(5)} {/* MM-DD */}
            </div>
          ))}
        </div>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="gantt-row">
          <div className="task-label">{task.name}</div>
          <div className="gantt-bar-container">
            <div
              className="gantt-bar"
              style={getBarStyle(task.startDate, task.duration)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
