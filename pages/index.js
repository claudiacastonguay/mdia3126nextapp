import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';
import ChildrenContainer from '../comps/Content';

export default function Home() {
  const[contentColor, setContentColor] = useState(false);
  const[bgimage, setBackgroundImage] = useState(false);
  const[help, setHelpTags] = useState(false);


  const HandleMenu = (str) =>{
    //capture what happened in the menu and change the page state based on it
    
    if(str==='bg'){
      setContentColor("#DCA877");
    }if(str==='img'){
      setBackgroundImage('url(/background.jpg)');
    }if(str==='help'){
      setHelpTags('flex');
    }
  }

  return <div className='home'>
    
    <div className='content'>
      <Content bgcolor={contentColor} bgimg={bgimage} helpsection={help}>

    <ChildrenContainer children='This is the help section' helpsection={help}/>

        </Content>
    </div>
    <div className='menu'>
      <Menu onMenuSelect={HandleMenu} />
    </div>
  </div>
   
  
}