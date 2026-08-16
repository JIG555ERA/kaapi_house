import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./components/pages/HomePage'))
const PageNotFound = lazy(() => import('./components/pages/PageNotFound'))

import Loader from './components/ui/Loader'

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
