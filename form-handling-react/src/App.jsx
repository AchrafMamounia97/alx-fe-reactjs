import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import './App.css';


function App() {
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h1>React Form Handling Demo</h1>
      <RegistrationForm />
      <hr style={{ margin: '2rem 0' }} />
      <FormikForm />
    </div>
  );
}

export default App
