import './App.scss';
import { Fragment, useState } from 'react'
import Header from './components/header'
import SearchBar from './components/search-bar';
import { Router } from '@reach/router';
import Home from './pages/home';
import SearchResult from './pages/search-result';
import ProductDetail from './pages/product-detail';
import ProductBreadcrumbContext from './context/product-breadcrumb-context';

function App() {
  const [productBreadcrumb, setProductBreadcrumb] = useState([])
  return (
    <>
      <Header>
        <SearchBar></SearchBar>
      </Header>
      <div className="container">
        <ProductBreadcrumbContext.Provider value={productBreadcrumb}>
          <Router primary={false} component={Fragment}>
            <Home path="/" setBreadcrumb={setProductBreadcrumb}></Home>
            <SearchResult path="/items" setBreadcrumb={setProductBreadcrumb}></SearchResult>
            <ProductDetail path="/items/:id"></ProductDetail>
          </Router>
        </ProductBreadcrumbContext.Provider>
      </div>
    </>
  );
}

export default App;
