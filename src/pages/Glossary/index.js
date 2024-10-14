import React, { useEffect } from 'react'
import GlossaryBanner from './GlossaryBanner'
import GlossaryTabs from './GlossaryTabs'

const index = () => {
  document.title = " Glossary- Young Maestro";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
}, []);
  return (
    <>
        <GlossaryBanner/>
        <GlossaryTabs/>
    </>
  )
}

export default index