import React from 'react';
import './Ticketcard.css';
import { getPriorityIcon, getPriorityType, getStatusIcon } from './functions';

const TicketCard = ({ ticket, user }) => {
    return (

            <div className="ticket-card">
                <div className="ticket-header">
                    <p className="ticket-id">{ticket.id}</p>
                    {/* Use Image of user */}
                </div>
                <div className='flex'>
                    <span><img src={getStatusIcon(ticket.status)} alt={ticket.status}/></span>
                    <span><h5>{ticket.title}</h5></span>
                </div><br></br>
                <div className="ticket-info">
                    <span><img src={getPriorityIcon(ticket.priority)} alt={getPriorityType(ticket.priority)}/></span>
                    <span className="ticket-tag">{ticket.tag[0]}</span>
                </div>
            </div>
        



    );
};

export default TicketCard;



