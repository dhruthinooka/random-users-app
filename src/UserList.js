import React, { useState, useEffect } from 'react';
import './index.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const toggleUserDetails = (index) => {
    setExpandedUser(expandedUser === index ? null : index);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img 
              src={user.picture.medium} 
              alt={`${user.name.first} ${user.name.last}`} 
            />
            <p 
              onClick={() => toggleUserDetails(index)}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              {`${user.name.first} ${user.name.last}`}
            </p>
            {expandedUser === index && (
              <div className="user-details">
                <p>Gender: {user.gender}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;