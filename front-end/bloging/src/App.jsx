
import './App.css'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import { Nav } from './components/nav';
import { Home } from './components/home/home';
import { TrendingBlogs } from './components/trendingBlogs/trendingTopBlogs';
import { DisplayBlogs } from './components/explore/displayAllBlogs';
import { UploadBlog } from './components/uploadBlogs/upload';
import { Signup } from './components/Signup-register/signup';
import { SignIn } from './components/Signup-register/signin';
import { Footer } from './components/footer';

function App() {


  return (
    <>
    <BrowserRouter>

    <Routes>

      
<Route path='/signUp' element={<Signup/>} />
<Route path='/signIn' element={<SignIn/>} />


    </Routes>
    <Nav/>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path='/trending' element={<TrendingBlogs/>} />
<Route path='/explore' element={<DisplayBlogs/>} />
<Route path='/create' element={<UploadBlog/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
