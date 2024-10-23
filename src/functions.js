
import Priority0 from './static/priority0.svg';
import Priority1 from './static/priority1.svg';
import Priority2 from './static/priority2.svg';
import Priority3 from './static/priority3.svg';
import Priority4 from './static/priority4.svg';
import './Ticketcard.css';
import Todo from './static/To-do.svg';
import Done from './static/Done.svg';
import Inprogress from './static/in-progress.svg';
import Cancelled from './static/Cancelled.svg';
import Backlog from './static/Backlog.svg';

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case 0:
            return Priority0;
        case 1:
            return Priority1;
        case 2:
            return Priority2;
        case 3:
            return Priority3;
        case 4:
            return Priority4;
        default:
            return Priority0; 
    }
};

export const getPriorityType = (priority) => {
    switch (priority) {
        case 0:
            return "No Priority";
        case 1:
            return "Low";
        case 2:
            return "Medium";
        case 3:
            return "High";
        case 4:
            return "Urgent";
        default:
            return "No Priority";
    }
};
 export const getPriority = (priority) => {
    return(
        <div className="priority-block"><img 
        src={getPriorityIcon(priority)} 
        alt={`Priority ${priority}`} 
        className="priority-icon" 
        /> {getPriorityType(priority)}</div>
    )
 }

export const getStatusIcon = (status) => {
    switch (status) {
        case "Todo":
            return Todo;
        case "In progress":
            return Inprogress;
        case "Backlog":
            return Backlog;
        case "Canclled":
            return Cancelled;
        case "Done":
            return Done;
        default:
            return Todo; 
    }
};

export const getStatus = (status) => {
    return(
        <div className="priority-block"><img 
        src={getStatusIcon(status)} 
        alt={`Priority ${status}`} 
         
        /> {status}</div>
    )
}

