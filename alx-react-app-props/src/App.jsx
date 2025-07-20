import ProfilePage from './ProfilePage';
import UserContext from './UserContext';   // ✅ Import context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // ✅ Wrap ProfilePage inside UserContext.Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

