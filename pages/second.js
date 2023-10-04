import React from 'react'

import ContactMe from "./components/ContactMe";
import CustomFab from "./components/CustomFab";
import Divider from "./components/Divider";
import Experience from "./components/Experience";
import Layout from "./components/Layout";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import AnimatedBox from './components/AnimatedBox';

const second = () => {
  return (
    <>
    <AnimatedBox/>
      <Layout>
        <main className="animate-blurr">
          <Me id="me" />
          <Divider/>
          <div id="Projects">
            <Projects/>
          </div>
          <Divider/>
          <div id="Qualification">
            <Qualification/>
          </div>
          <Divider/>
          <div id="Experience">
            <Experience/>
          </div>
          <Divider/>
          <div id="Skills">
            <Skills/>
          </div>
          <Divider/>
          <div id="ContactMe">
            <ContactMe/>
          </div>
          <Divider/>

          <CustomFab />
        </main>
      </Layout>
    </>
  )
}

export default second