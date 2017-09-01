import React from 'react'
import { NavLink } from 'react-router-dom'

const TopicsFilterComponent = () => (
  <div>
    <ul>
      <li><NavLink to='/topics/all' activeClassName='active'>全部</NavLink></li>
      <li><NavLink to='/topics/good' activeClassName='active'>精华</NavLink></li>
      <li><NavLink to='/topics/share' activeClassName='active'>分享</NavLink></li>
      <li><NavLink to='/topics/ask' activeClassName='active'>问答</NavLink></li>
      <li><NavLink to='/topics/job' activeClassName='active'>招聘</NavLink></li>
      <li><NavLink to='/topics/dev' activeClassName='active'>测试</NavLink></li>
    </ul>
  </div>
)

export default TopicsFilterComponent
