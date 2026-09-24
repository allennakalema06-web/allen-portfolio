import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import Apn from './pages/Apn/Apn'
import Journey from './pages/Journey/Journey'
import OpenSource from './pages/OpenSource/OpenSource'
import Articles from './pages/Articles/Articles'

import NyondoCaseStudy from './pages/ProjectDetails/NyondoCaseStudy'
import ParkEaseCaseStudy from './pages/ProjectDetails/ParkEaseCaseStudy'
import UgslCaseStudy from './pages/ProjectDetails/UgslCaseStudy'

import ArticleDetail from './pages/Articles/ArticleDetail'

import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'open-source',
        element: <OpenSource />,
      },
      {
        path: 'apn',
        element: <Apn />,
      },
      {
        path: 'journey',
        element: <Journey />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'work/nyondo-stock-system',
        element: <NyondoCaseStudy />,
      },
      {
        path: 'work/ugsl-ai-practice-coach',
        element: <UgslCaseStudy />,
      },
      {
        path: 'work/parkease',
        element: <ParkEaseCaseStudy />,
      },
      {
        path: 'articles/:slug',
        element: <ArticleDetail />,
    },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App