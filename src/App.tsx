import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import Apn from './pages/Apn/Apn'
import Journey from './pages/Journey/Journey'
import OpenSource from './pages/OpenSource/OpenSource'
import Articles from './pages/Articles/Articles'
import NyondoCaseStudy from './pages/ProjectDetails/NyondoCaseStudy'
import ParkEaseCaseStudy from './pages/ProjectDetails/ParkEaseCaseStudy'
import UgslCaseStudy from './pages/ProjectDetails/UgslCaseStudy'
import NotFound from './pages/NotFound/NotFound'
import ProblemBeforeTechnology from './pages/Articles/ProblemBeforeTechnology'
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
      path: '*',
      element: <NotFound />,
    },
    {
      path: 'articles/problem-before-technology',
      element: <ProblemBeforeTechnology />,
   },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App