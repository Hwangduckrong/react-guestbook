import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './views/Test';
import AddList from './views/AddList';
import DeleteForm from './views/DeleteForm';
import Error from './views/Error';

function App() {
return (
<div>
<BrowserRouter>
<Routes>

<Route path='/test' element={<Test />} />
<Route path='/addlist' element={<AddList />} />
<Route path='/deleteform' element={<DeleteForm />} />
<Route path='/error' element={<Error />} />
</Routes>
</BrowserRouter>
</div>
);
}
export default App;