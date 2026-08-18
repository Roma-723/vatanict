import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/loading/Loading';

// import Page404 from './components/404/Page404';
// import Admin from './components/Admin/Admin';
// import Layout from './components/Layout/Layout';

// import MainPage from './components/MainPage/MainPage';
// import AboutCompany from './components/AboutCompany/AboutCompany';
// import Projects from './components/Projects/Projects';
// import ProjectCard from './components/ProjectCard/ProjectCard';
// import Solutions from './components/Solutions/Solutions';
// import Services from './components/Services/Services';
// import Career from './components/Career/Career';
// import CareerCard from './components/CareerCard/CareerCard';
// import News from './components/News/News';
// import NewsCard from './components/NewsCard/NewsCard';
// import Contact from './components/Contact/Contact';

const Layout = lazy(() => import('./pages/layout/Layout'));
const Admin = lazy(() => import('./pages/admin/Admin'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Page404 = lazy(() => import('./pages/404/Page404'));

const MainPage = lazy(() => import('./pages/mainPage/MainPage'));
const AboutCompany = lazy(() => import('./pages/aboutCompany/AboutCompany'))
const Projects = lazy(() => import('./pages/projects/Projects'))
const Services = lazy(() => import('./pages/services/Services'))
const ProjectCard = lazy(() => import('./pages/projectCard/ProjectCard'))
const Solutions = lazy(() => import('./pages/solutions/Solutions'))
const Career = lazy(() => import('./pages/career/Career'))
const CareerCard = lazy(() => import('./pages/careerCard/CareerCard'))
const News = lazy(() => import('./pages/news/News'))
const NewsCard = lazy(() => import('./pages/newsCard/NewsCard'))
const Contact = lazy(() => import('./pages/contact/Contact'))

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/admin/login' element={<Suspense fallback={<Loading/>}><AdminLogin/></Suspense>}/>
        <Route path='/admin/:section?' element={<Suspense fallback={<Loading/>}><Admin/></Suspense>}/>
        <Route path='/' element={<Suspense fallback={<Loading/>}><Layout/></Suspense>}>
          <Route index element={<Suspense fallback={<Loading/>}><MainPage/></Suspense>}/>
          <Route path='/aboutcompany' element={<Suspense fallback={<Loading/>}><AboutCompany/></Suspense>}/>
          <Route path='/projects' element={<Suspense fallback={<Loading/>}><Projects/></Suspense>}/>
          <Route path='/project/:id' element={<Suspense fallback={<Loading/>}><ProjectCard/></Suspense>}/>
          <Route path='/solutions' element={<Suspense fallback={<Loading/>}><Solutions/></Suspense>}/>
          <Route path='/services' element={<Suspense fallback={<Loading/>}><Services/></Suspense>}/>
          <Route path='/career' element={<Suspense fallback={<Loading/>}><Career/></Suspense>}/>
          <Route path='/career/:id' element={<Suspense fallback={<Loading/>}><CareerCard/></Suspense>}/>
          <Route path='/news' element={<Suspense fallback={<Loading/>}><News/></Suspense>}/>
          <Route path='/news/:id' element={<Suspense fallback={<Loading/>}><NewsCard/></Suspense>}/>
          <Route path='/contact' element={<Suspense fallback={<Loading/>}><Contact/></Suspense>}/>

          <Route path='*' element={<Suspense fallback={<Loading/>}><Page404/></Suspense>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
