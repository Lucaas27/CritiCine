import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from '@layout'
import { Home } from '@pages/Home'
import { MovieDetails } from '@pages/MovieDetails'
import { NotFound } from '@pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/movie/:tmdbID'
          element={
            <Layout>
              <MovieDetails />
            </Layout>
          }
        />
        <Route
          path='*'
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
