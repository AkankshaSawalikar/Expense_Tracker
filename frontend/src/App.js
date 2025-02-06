// import React, {useState, useMemo} from 'react'
// import styled from "styled-components";
// import bg from './img/bg.png'
// import {MainLayout} from './styles/Layouts'
// import Orb from './Components/Orb/Orb'
// import Navigation from './Components/Navigation/Navigation'
// import Dashboard from './Components/Dashboard/Dashboard';
// import Income from './Components/Income/Income'
// import Expenses from './Components/Expenses/Expenses';
// import { useGlobalContext } from './context/globalContext';


// function App() {
//   const [active, setActive] = useState(1)

//   const global = useGlobalContext()
//   console.log(global);

//   const displayData = () => {
//     switch(active){
//       case 1:
//         return <Dashboard />
//       case 2:
//         return <Dashboard />
//       case 3:
//         return <Income />
//       case 4: 
//         return <Expenses />
//       default: 
//         return <Dashboard />
//     }
//   }

//   const orbMemo = useMemo(() => {
//     return <Orb />
//   },[])

//   return (
//     <AppStyled bg={bg} className="App">
//       {orbMemo}
//       <MainLayout>
//         <Navigation active={active} setActive={setActive} />
//         <main>
//           {displayData()}
//         </main>
//       </MainLayout>
//     </AppStyled>
//   );
// }

// const AppStyled = styled.div`
//   height: 100vh;
//   background-image: url(${props => props.bg});
//   position: relative;
//   main{
//     flex: 1;
//     background: rgba(252, 246, 249, 0.78);
//     border: 3px solid #FFFFFF;
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     &::-webkit-scrollbar{
//       width: 0;
//     }
//   }
// `;

// export default App;
// App.js
import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation"; // Import Navigation
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import Signup from "./Components/homepage/SignUp";
import Login from "./Components/homepage/Login";
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import { useAuth } from "./context/AuthContext";

// ProtectedRoute for authenticated users
const ProtectedRoute = ({ element }) => {
  const { token } = useAuth();
  return token ? element : <Navigate to="/login" />;
};

function App() {
  const orbMemo = useMemo(() => <Orb />, []);

  return (
    <Router>
      <AuthProvider>
        <AppStyled bg={bg}>
          {orbMemo}
          <Navigation /> {/* Place Navigation here */}
          <Routes>
            {/* Routes for SignUp and Login */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes for authenticated users */}
            <Route 
              path="/dashboard" 
              element={<ProtectedRoute element={<MainLayout><Dashboard /></MainLayout>} />} 
            />
            <Route 
              path="/income" 
              element={<ProtectedRoute element={<MainLayout><Income /></MainLayout>} />} 
            />
            <Route 
              path="/expenses" 
              element={<ProtectedRoute element={<MainLayout><Expenses /></MainLayout>} />} 
            />

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </AppStyled>
      </AuthProvider>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Make content flow vertically */
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
