import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { MdSettings,MdMenu  } from "react-icons/md";
import { HiBell , HiBellAlert ,HiBellSlash  } from "react-icons/hi2";
import triforce from   "../assets/images/triforce.png";
const MobileHeader = ()=>{
    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    })
    return(<>{isMobile&&"모바일 헤더"}</>)
}
const DesktopHeaderStyle = styled.div`
    height: 4vh;
    color:white;
    justify-content: space-between; 
    font-size: 4.5vh;
    padding:10px;
    align-items : center;
    background-color: #3C484D;
    display:flex;
    `;
const DesktopHeader = ()=>{
    const isDesktop = useMediaQuery({
        query : "(min-width:769px)"
    })
    return (<>{isDesktop&&<DesktopHeaderStyle>
        <DTleftIcons>
            <Triforce/>
        </DTleftIcons>
        <DTrightIcons>
        <Menu></Menu>
        <Alert></Alert>
            <Setting></Setting>
        </DTrightIcons>
        </DesktopHeaderStyle>}</>);
}
const DTleftIcons=styled.div`

`
const DTrightIcons=styled.div`
display: flex;
gap:0.5vw;
`
const Setting = ()=>{
    return <MdSettings />
}
const Menu = ()=>{
    return <MdMenu></MdMenu>
}
const Alert = ()=>{
    return <HiBell></HiBell>
}
const Triforce = ()=>{
    return (<img src={triforce}/>);
}
const Name=()=>{
    return<></>
}
const Job =()=>{
    return<></>
}
const Hp = ()=>{
    return <></>
}
const Gold = ()=>{
    return <></>
}

const Header = ()=>{
    return (<div>
        <MobileHeader/>
        <DesktopHeader/>
    </div>);
}
export default Header;
