import { categories } from '../categories/information';
import Section from '../components/Section';
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '300'
})

export default function Home() {
  
  const content= categories.map(category=>category.content)
  return (
    <main  className={rajdhani.className}>
        {categories.map((item, i)=>(<Section key={i} $isOdd= {i %2 ==0} id= {item.content}>{item.component}</Section>))}
    </main>
  )
}
