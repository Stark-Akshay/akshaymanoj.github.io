import ContactMe from "./components/ContactMe";
import CustomFab from "./components/CustomFab";
import Divider from "./components/Divider";
import Experience from "./components/Experience";
import Layout from "./components/Layout";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";




export default function Home() {

 
  return (
    <>
      <Layout>
        <main>
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
