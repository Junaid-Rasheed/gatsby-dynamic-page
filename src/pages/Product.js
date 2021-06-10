import React from "react"
import { Router } from "@reach/router"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import Main from "../components/Main"
import Product1 from "../components/Product1"
import Product2 from "../components/Product2"

const Product = () => {
  return (
    <Layout>
      <div>
        <Link to="/Product/page1">Page 1</Link>
        <Link to="/Product/page2">Page 2</Link>
      </div>
      <Router basepath="/Product">
        <Main path="/" />
        <Product1 path="/page1" />
        <Product2 path="/page2" />
      </Router>
    </Layout>
  )
}

export default Product
