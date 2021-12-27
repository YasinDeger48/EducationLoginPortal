import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from '../../components/Header'
import PropTypes from 'prop-types'
import './PageLayout.sass'

export const PageLayout = ({ children }) => (
  <div className='container-fluid'>
      <Header />

  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
