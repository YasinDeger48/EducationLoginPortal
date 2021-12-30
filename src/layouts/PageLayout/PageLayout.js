import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PropTypes from 'prop-types'
import '../../styles/PageLayout.sass'

export const PageLayout = ({ children }) => (
  <div>
      <Header />
      {children}
      {/* <Footer/> */}
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
