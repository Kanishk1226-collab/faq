import React from 'react'
import './MainArea.css'
import {MdHistory, MdHome, MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater} from 'react-icons/md'
import { FaFutbol, FaGripfire, FaMusic, FaNewspaper } from 'react-icons/fa'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'

import { Collapse } from 'antd';

const { Panel } = Collapse;
function MainArea(){
    return(
        
        <div className="MainArea">
            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey"fontSize="3rem"/>
                        <div>BUTTON 1</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey"fontSize="3rem"/>
                        <div>BUTTON 2</div>
                    </div>
                </div>
                <div className="Library">
                    
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="grey"fontSize="3rem"/>
                        <div>BUTTON 3</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey"fontSize="3rem"/>
                        <div>BUTTON 4</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdWatchLater color="grey"fontSize="3rem"/>
                        <div>BUTTON 5</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="grey"fontSize="3rem"/>
                        <div>BUTTON 6</div>
                    </div>
                    </div>
                    <div className="More_From_Youtube">
                    <div className="Quick_Icon">
                        <GiGamepad color="grey"fontSize="3rem"/>
                        <div>BUTTON 7</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="grey"fontSize="3rem"/>
                        <div>BUTTON 9</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaFutbol color="grey"fontSize="3rem"/>
                        <div>BUTTON 10</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="grey"fontSize="3rem"/>
                        <div>BUTTON 11</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="grey"fontSize="3rem"/>
                        <div>BUTTON 12</div>
                    </div>
                    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
                </div>
            </div>



            <div className="Main">    
            <div class="block faqBlock">       
        <div className="container-fluid">
            <Collapse defaultActiveKey={['1']}>
                <Panel header="How do I prevent Select Dropdown DatePicker TimePicker Popover Popconfirm scrolling with the page?" key="1">
                    <p> Use Select getPopupContainer={trigger => trigger.parentElement} (API reference) to render a component inside the scroll area. If you need to config this globally in your application, try ConfigProvider getPopupContainer={trigger => trigger.parentElement} (API reference)
And make sure that parentElement is position: relative or position: absolute.  </p>
                </Panel>
                <Panel header="Will you provide Sass/Stylus(etc.) style files in addition to the Less style files currently included?" key="2">
                    <p>There is currently no plan to add support for Sass/Stylus(etc.) style files, but using tools on Google you can easily convert the provided Less files to your desired style format.</p>
                </Panel>
                <Panel header="Select Dropdown DatePicker TimePicker Popover Popconfirm disappears when I click another popup component inside it. How do I resolve this?" key="3">
                    <p>This is an old bug that has been fixed since v3.11.x. If you're using an older version, you can use Select getPopupContainer={trigger => trigger.parentElement} to render a component inside Popover. (Or other getXxxxContainer props)</p>
                </Panel> 
                <Panel header="How do I modify Menu/Button(etc.)'s style?" key="4">
                    <p>While you can override a component's style, we don't recommend doing so. antd is not only a set of React components, but also a design specification as well.</p>
                </Panel>     
                <Panel header="It doesn't work when I change defaultValue dynamically." key="5">
                    <p>The defaultXxxx (e.g. defaultValue) of Input/Select(etc...) only works on the first render. It is a specification of React. Please read React's documentation.</p>
                </Panel>        
                <Panel header="Why does modifying props in mutable way not trigger a component update?" key="6">
                    <p>antd use shallow compare of props to optimize performance. You should always pass the new object when updating the state. Please ref React's document</p>
                </Panel>        
                <Panel header="antd overrides my global styles" key="7">
                    <p>Yes, antd is designed to help you develop a complete background application. To do so, we override some global styles for styling convenience, and currently these cannot be removed or changed. More info at https://github.com/ant-design/ant-design/issues/4331 .</p>
                </Panel>        
                <Panel header="antd doesn't work well in mobile." key="8">
                    <p>Please check And Design Mobile as a possible solution, as antd has not been optimized to work well on mobile. You can also try the react-component repositories which start with 'm-' 'rn-', which are also designed for mobile.</p>
                </Panel>        
                <Panel header="When I set mode to DatePicker/RangePicker, why can I not select a year or month anymore?" key="9">
                    <p>In a real world development, you may need a YearPicker, MonthRangePicker or WeekRangePicker. You are trying to add mode to DatePicker/RangePicker expected to implement those pickers. However, the DatePicker/RangePicker cannot be selected and the panels won't close now.

Reproduction link: https://codesandbox.io/s/dank-brook-v1csy

Same issues：#15572, #16436, #11938, #11735, #11586, #10425, #11053

Like the explaination explains, this is because DatePicker mode="year" / does not equal the YearPicker, nor is RangePicker mode="month" / equal to MonthRangePicker. The mode property was added to support showing time picker panel in DatePicker in antd 3.0, which simply controls the displayed panel, and won't change the original date picking behavior of DatePicker/RangePicker (for instance you will still need to click date cell to finish selection in a DatePicker, whatever the mode is).</p>
                </Panel>        
            </Collapse>
        </div>
        </div> 
                


        </div>
        </div>

        
    )
}
export default MainArea