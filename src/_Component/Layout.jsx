import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Smartphone from './Smartphone'
import Laptop from './Laptop'
import Promotion from './Promotion'

export default function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Smartphone></Smartphone>
        <Laptop></Laptop>
        <Promotion></Promotion>
    </div>
  )
}
