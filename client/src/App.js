import {Route, Routes} from 'react-router-dom'
import { Header } from './containers/Public';
import { Home, Login } from './containers/Public';
import { path } from './ultils/constant';
function App() {
  return (
    <div className="h-screen w-screen bg-primary ">
     <Routes>
    <Route path= {path.HOME} element={<Home/>}>
    <Route path= {path.LOGIN} element={<Login/>}></Route>
    </Route>
     </Routes>
    </div>
  );
}

export default App;
