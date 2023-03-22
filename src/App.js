import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './App.css';

import Main from './Layout/Main';
import AboutUSOne from './pages/AboutUS/AboutUSOne';
import AboutUsTow from './pages/AboutUS/AboutUsTow';
import BlogDetails from './pages/Blog/BlogDetails';
import OurBlogOne from './pages/Blog/OurBlogOne';
import FAQ from './pages/FAQ/FAQ';
import HomeOne from './pages/Home/HomeOne';
import HomeTwo from './pages/Home/HomeTwo';
import Mission from './pages/OurMission/Mission';
import OurProtfolio from './pages/OurProtfolio/OurProtfolio';
import OurProtfolioTwo from './pages/OurProtfolio/OurProtfolioTwo';
import ProtfolioDetails from './pages/OurProtfolio/ProtfolioDetails';
import ProtfolioDetailsTwo from './pages/OurProtfolio/ProtfolioDetailsTwo';
import ServicesOne from './pages/Serveices/ServeicesOne';
import ServicesTow from './pages/Serveices/ServeicesTow';
import ServicesDetails from './pages/Serveices/ServicesDetails';
import ServicesDetailsTwo from './pages/Serveices/ServicesDetailsTwo';
import TeamDetails from './pages/TeamMember/TeamDetails';
import TeamMember from './pages/TeamMember/TeamMember';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <HomeOne />
        },
        {
          path: '/homeTwo',
          element: <HomeTwo />
        },
        {
          path: '/about',
          element: <AboutUSOne />
        },
        {
          path: '/about-2',
          element: <AboutUsTow />
        },
        {
          path: '/services',
          element: <ServicesOne />
        },
        {
          path: '/services-2',
          element: <ServicesTow />
        },
        {
          path: '/services-details',
          element: <ServicesDetails />
        },
        {
          path: '/services-details-2',
          element: <ServicesDetailsTwo />
        },
        {
          path: '/team',
          element: <TeamMember />
        },
        {
          path: '/team-details',
          element: <TeamDetails />
        },
        {
          path: '/blog',
          element: <OurBlogOne />
        },
        {
          path: '/blog-details',
          element: <BlogDetails />
        },
        {
          path: '/portfolio',
          element: <OurProtfolio />
        },
        {
          path: '/portfolio-2',
          element: <OurProtfolioTwo />
        },
        {
          path: '/portfolio-details',
          element: <ProtfolioDetails />
        },
        {
          path: '/portfolio-details-2',
          element: <ProtfolioDetailsTwo />
        },
        {
          path: '/faq',
          element: <FAQ />
        },
        {
          path: '/mission',
          element: <Mission />
        },
      ]
    }
  ])

  return (
    <div className="overflow-x-hidden">
      
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
