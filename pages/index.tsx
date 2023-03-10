import Head from 'next/head';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkingExperience from '../components/WorkingExperience';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joffrey`s portfolio</title>
      </Head>
      <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
        {/* header */}
        <Header />

        {/* Introduction */}
        <section id='introduction' className='snap-start'>
          <Introduction/>
        </section>

        {/* About */}
        <section id='about' className="snap-center">
          <About />
        </section>

        {/* Experience */}
        <section id='experience' className='snap-center'>
          <WorkingExperience />
        </section >

        {/* skills */}
        <section id='skills' className='snap-start'>
          <Skills />
        </section>

        {/* projects */}
        <section id='projects' className='snap-center'>
        <Projects />
        </section>

        {/* Contact Me */}
        <section id='contacts' className='snap-start'>
          <Contacts />
        </section>

      </main>
    </>
  )
}
