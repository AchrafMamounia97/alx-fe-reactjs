import { useContext } from 'react';
import UserContext from './UserContext';   // ✅ Import context

function UserDetails() {
  const userData = useContext(UserContext);  // ✅ Get value from Context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;