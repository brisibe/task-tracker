import { useState, useEffect, memo } from "react";
import "./style.css";
import DeleteIcon from "../../assets/delete-icon.svg";
import moment from "moment";
import { randomColor } from "../../helper/random-color";

let Task = ({ task, onDelete }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    let colorCode = randomColor();
    setColor(colorCode);
  }, []);

  return (
    <div className="card-wrapper">
      <div className="colored-block" style={{ backgroundColor: color }}></div>
      <div className="content">
        <div className="content-details">
          <p>{task.task}</p>
          <div className="task-date">
            <p>{task.date && moment(task.date).format("lll")}</p>
            {task.reminder && <BellIcon color={color} />}
          </div>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img src={DeleteIcon} alt="text" />
        </button>
      </div>
    </div>
  );
};

Task = memo(Task);
export default Task;

function BellIcon({ color }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 14H9.33333C9.33333 14.3536 9.19286 14.6928 8.94281 14.9428C8.69276 15.1929 8.35362 15.3333 8 15.3333C7.64638 15.3333 7.30724 15.1929 7.05719 14.9428C6.80714 14.6928 6.66667 14.3536 6.66667 14ZM14 12.6667V13.3333H2V12.6667L3.33333 11.3333V7.33333C3.33333 5.26667 4.68667 3.44667 6.66667 2.86V2.66667C6.66667 2.31305 6.80714 1.97391 7.05719 1.72386C7.30724 1.47381 7.64638 1.33333 8 1.33333C8.35362 1.33333 8.69276 1.47381 8.94281 1.72386C9.19286 1.97391 9.33333 2.31305 9.33333 2.66667V2.86C11.3133 3.44667 12.6667 5.26667 12.6667 7.33333V11.3333L14 12.6667ZM11.3333 7.33333C11.3333 6.44928 10.9821 5.60143 10.357 4.97631C9.7319 4.35119 8.88405 4 8 4C7.11594 4 6.2681 4.35119 5.64298 4.97631C5.01786 5.60143 4.66667 6.44928 4.66667 7.33333V12H11.3333V7.33333ZM13.1667 2.12667L12.22 3.07333C12.7838 3.63028 13.2315 4.29362 13.5371 5.02488C13.8426 5.75615 14 6.5408 14 7.33333H15.3333C15.3333 5.38 14.56 3.5 13.1667 2.12667ZM0.666666 7.33333H2C2 5.73333 2.64 4.2 3.78 3.07333L2.83333 2.12667C2.14525 2.80771 1.59938 3.61871 1.22743 4.51254C0.855476 5.40637 0.664864 6.3652 0.666666 7.33333V7.33333Z"
        fill={color}
      />
    </svg>
  );
}
