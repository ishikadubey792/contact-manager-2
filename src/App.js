import './App.css';
import { Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ContactList from './components/contacts/contactList/ContactList';
import AddContact from './components/contacts/addContact/AddContact';
import ViewContact from './components/contacts/viewContact/ViewContact';
import EditContact from './components/contacts/editContact/EditContact';

const App = ()=> {
  return (
    <> 
        <Navbar/>
        <Routes>
            <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
            <Route path={'/contacts/list'} element={<ContactList/>}/>
            <Route path={'*'} element={<Navigate to={'/contacts/list'}/>}/>
            <Route path={'/contacts/add'} element={<AddContact/>}/>
            <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
            <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
        </Routes>
    </>
  );
}

export default App;
