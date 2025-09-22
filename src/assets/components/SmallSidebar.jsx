import React from 'react'
import Wrapper from '../wrappers/SmallSidebar'
import { useDashboardContext } from '../../pages/DashboardLayout'

const SmallSidebar = () => {
   const data = useDashboardContext();
   console.log(data);




  return (
    <Wrapper>
      <h1>Small Sidebar</h1>
    </Wrapper>
  )
}

export default SmallSidebar
