import React, { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import ShopAll from "./pages/shopAll/ShopAll"
import Blog from "./pages/blog/Blog"
import About from "./pages/about/About"
import SingleItem from "./pages/single-item/SingleItem"
import NotFound from "./pages/not-found/NotFound"

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shopAll" element={<ShopAll />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="shopAll/:id" element={<SingleItem />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App
