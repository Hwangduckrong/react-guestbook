import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './views/Test';

function App() {
return (
<div>
<BrowserRouter>
<Routes>

<Route path='/test' element={<Test />} />
</Routes>
</BrowserRouter>
</div>
);
}
export default App;