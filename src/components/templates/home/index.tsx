import React from 'react'
import Slider from '../../slider'
import Reason from '../../molecules/reason'
import Activities from '../../molecules/activities'
import PopularCauses from '../../molecules/popularCauses'
import CounterArea from '@/components/molecules/counterArea'
import Volunteer from '@/components/molecules/volunteer'
import News from '@/components/molecules/news'
import Donation from '@/components/molecules/donation'
import About from '@/components/molecules/about'
const HomeTemplate = () => {
  return (
    <div>
      <Slider />
      <About />
      <Reason />
      <CounterArea />
      {/* <Activities /> */}
      <PopularCauses />
      <Volunteer />
      <News />
      <Donation />
    </div>
  )
}

export default HomeTemplate