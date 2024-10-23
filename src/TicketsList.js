import React, { useEffect, useState } from 'react';
import TicketCard from './TicketCard';
import Dropdown from './Dropdown'; 
import './TicketsList.css'; 
import {getPriority, getStatus} from './functions.js';

const TicketsList = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterType, setFilterType] = useState('User');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTickets(data.tickets);
                setUsers(data.users);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const getUserById = (userId) => {
        return users.find((user) => user.id === userId);
    };

    const groupTickets = () => {
        if (filterType === 'User') {
            return users.map(user => ({
                user,
                tickets: tickets.filter(ticket => ticket.userId === user.id),
            }));
        } else if (filterType === 'Priority') {
            return Array.from({ length: 5 }, (_, i) => ({
                priority: i,
                tickets: tickets.filter(ticket => ticket.priority === i),
            }));
        } else if (filterType === 'Status') {
            const statuses = ['Todo', 'In progress', 'Backlog'];
            return statuses.map(status => ({
                status,
                tickets: tickets.filter(ticket => ticket.status === status),
            }));
        }
        return [];
    };

    const groupedTickets = groupTickets();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="tickets-list">
            <Dropdown
                options={['User', 'Priority', 'Status']}
                selectedOption={filterType}
                onSelect={setFilterType}
            />

            <div className="grouped-tickets">
                {groupedTickets.map((group, index) => (
                    <div key={index} className="ticket-group">
                        <h2>{filterType === 'User' ? group.user.name : filterType === 'Priority' ?getPriority(group.priority): getStatus(group.status)}</h2>
                        <div className="ticket-cards">
                            {group.tickets.map(ticket => (
                                <TicketCard key={ticket.id} ticket={ticket} user={getUserById(ticket.userId)} />
                            ))}
                            {group.tickets.length === 0 && <p>No tickets found</p>} {/* Message for empty groups */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketsList;
