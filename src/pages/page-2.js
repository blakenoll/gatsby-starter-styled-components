import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Container>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
