import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import About from './components/About/About';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Meals from './components/Meals/Meals';
import SingleMeal from './components/SingleMeal/SingleMeal';

function App() {



  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/about",
          element:<PrivetRoute><About></About></PrivetRoute>
        },
        {
          path:"/meals",
          element:<Meals></Meals>,
          loader:()=> fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
        },
        {
          path:"/meals/:idMeal",
          element: <PrivetRoute><SingleMeal></SingleMeal></PrivetRoute>,
          loader:({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
        }
      ]
    },
    {
      path:"*",
      element:<div>404 NOT FOUND</div>
    }
  ]) 


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
