import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Home from './components/Home'
import Posts from './components/Posts'
import Error from './components/Error'
import About from './components/About';
// import Contact from './components/Contact'

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
errorElement: <Error/>, 
children: [
    {
        index: true, 
        element: <Home/>
    },
    {
        path: 'posts', 
        element: <Posts/>,
    }, 
    {
        path: 'about',
        element: <About/>,
    }
]
}])
ReactDOM.createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
);