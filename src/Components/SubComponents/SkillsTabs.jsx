import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import JavascriptProgress from '../SkillProgress/JavascriptProgress'
import LanguagesProgress from '../SkillProgress/LanguagesProgress'
import WebDevelopmentProgress from '../SkillProgress/WebDevelopmentProgress'
import ToolsProgress from '../SkillProgress/ToolsProgress'

function SkillsTabs() {
  return (
    <div>
    <Tabs isManual isFitted variant="unstyled" defaultIndex={0} flexWrap={"wrap"}>
            <TabList flexWrap={"wrap"}>
              <Tab p={"10px 25px"} _hover={{border:"1px solid rgb(46, 89, 186)"}} _selected={{ color: 'rgb(46, 89, 186)', border: '1px solid rgb(46, 89, 186)' }} 
              textTransform={"uppercase"} fontSize={{base:"0.5em",lg:"0.7em"}}
              letterSpacing={"0.05em"}
              fontWeight={700}
              color={"#646464"}
              >javascript</Tab>
              <Tab p={"10px 25px"} _hover={{border:"1px solid rgb(46, 89, 186)"}} _selected={{ color: 'rgb(46, 89, 186)', border: '1px solid rgb(46, 89, 186)' }} 
              textTransform={"uppercase"} fontSize={{base:"0.5em",lg:"0.7em"}}
              letterSpacing={"0.05em"}
              fontWeight={700}
              color={"#646464"}>languages</Tab>
              <Tab p={"10px 25px"} _hover={{border:"1px solid rgb(46, 89, 186)"}} _selected={{ color: 'rgb(46, 89, 186)', border: '1px solid rgb(46, 89, 186)' }} 
              textTransform={"uppercase"} fontSize={{base:"0.5em",lg:"0.7em"}}
              letterSpacing={"0.05em"}
              fontWeight={700}
              color={"#646464"}>web development</Tab>
              <Tab p={"10px 25px"} _hover={{border:"1px solid rgb(46, 89, 186)"}} _selected={{ color: 'rgb(46, 89, 186)', border: '1px solid rgb(46, 89, 186)' }} 
              textTransform={"uppercase"} fontSize={{base:"0.5em",lg:"0.7em"}}
              letterSpacing={"0.05em"}
              fontWeight={700}
              color={"#646464"}>tools</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={"30px 0px 0px 0px"}>
                <JavascriptProgress/>
              </TabPanel>
              <TabPanel p={"30px 0px 0px 0px"}>
                <LanguagesProgress/>
              </TabPanel>
              <TabPanel p={"30px 0px 0px 0px"}>
                <WebDevelopmentProgress/>
              </TabPanel>
              <TabPanel p={"30px 0px 0px 0px"}>
                <ToolsProgress/>
              </TabPanel>
            </TabPanels>
          </Tabs>
    </div>
  )
}

export default SkillsTabs