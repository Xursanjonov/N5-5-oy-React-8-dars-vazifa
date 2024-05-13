import React from 'react'
import loadImg from '../../assets/images/hero-img.png'
import BlogPageCards from './components/BlogPageCards'
import { BlogPageCard } from './components/BlogPageCards'
import './blog.scss'

const Blog = () => {
  const cards = true;

  return (
    <section className='blog'>
      <h1>Blog Posts</h1>
      <BlogPageCards cards={cards} key={1} />
      <BlogPageCards cards={!cards} key={2} />
      <BlogPageCard />
    </section>
  )
}

export default Blog