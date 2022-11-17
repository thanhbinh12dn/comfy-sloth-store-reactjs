import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Fragment } from 'react';
import { publicRoutes } from './routes'
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component;

              return (
                <Route 
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              )
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
