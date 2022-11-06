import styled ,{css}from "styled-components";

const center=css`
display: flex;
 justify-content: space-between;
 align-items: center;
`

export const NavbarBox=styled.div`
 width: 100%;
 border-bottom: 2px solid #aaa;
 padding: 0 20px 10px 20px;
 ${center}
`
export const Description =styled.p`
margin: ${({m})=> m ? m:'0'};
margin-left: ${({ml})=> ml &&ml};
margin-right: ${({mr})=> mr &&mr};
margin-top: ${({mt})=> mt &&mt};
margin-bottom: ${({mb})=> mb &&mb};
padding: ${({p})=> p ? p:'0'};
padding-left: ${({pl})=> pl &&pl};
padding-right: ${({pr})=> pr &&pr};
padding-top: ${({pt})=> pt &&pt};
padding-bottom: ${({pb})=> pb &&pb};
font-size: ${({fs})=>fs &&fs};
font-weight: ${({fw})=>fw &&fw};
color:${({color})=>color&&color};
`
 NavbarBox.Logo=styled.div`
 ${center}
`
NavbarBox.UL=styled.ul`
${center}
`
NavbarBox.LI=styled.li`
list-style-type: none;
margin-left: 10px;
font-size: 14px;
color:#333;
`
NavbarBox.Button=styled.button`
 padding: 6px 20px;
 background: #46A358;
 border: none;
 color: #fff;
 :hover{
    cursor: pointer;
 }
 
 :active{
    transform: scale(0.97);
 }
`