
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Lotterypage from './LotteryGame/Lotterypage';
import Header from './Header/Header';
import FlipGame from './components/FlipGame';
import LoginForm from './LoginForm';
import Board from './Board.js';
function App() {
  return (
 
<Router>
<div>
        <Header />
<Routes>
<Route path="/login" element={<LoginForm/>} />
  <Route path="/" element={<Homepage />} />

  <Route path="/lotterygame" element={<Lotterypage />} />
 
  <Route path="/flipgame" element={<FlipGame/>}/>
  <Route path="/boardgame" element={<Board/>}/>
 
</Routes>
</div>
</Router>

  );
}

export default App;
