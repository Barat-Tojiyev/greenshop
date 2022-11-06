import styled from "styled-components";

export const Cards=styled.div`
width: 90%;
margin: 20px auto;
display: grid;
grid-template-columns: repeat(3,auto);

`
export const CardBox =styled.div`
width: 200px;
;
margin: 20px;
border: 2px solid #999;
border-radius: 10px;
overflow: hidden;
padding: 10px;
transition: 0.5s all ease;

:hover{
   transform: scale(1.05);
}
`
export const ImageBox=styled.div`
height: 150px;
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
display: ${({d})=>d&&d};
background: ${({bg})=>bg&&bg};
color: ${({color})=>color&&color};
border:${({border})=>border&&border};
width: ${({w})=>w&&w};
height: ${({h})=>h&&h};
border-radius:${({radius})=>radius&&radius};
display:${({d})=>d&&d};
justify-content: ${({justify})=>justify&&justify};
align-items: ${({align})=>align&&align};
text-align:${({text})=>text&&text};
cursor: ${({cursor})=>cursor&&cursor};

`
export const  ImgBox=styled.img`
width: 100%;
height: 100%;
`
 CardBox.Button=styled.button`
 width: 200px;
 border: none;
 height:30px;
 background: #7431F8;
 color:#fff;
 border-radius: 5px;
 display: flex;
 justify-content :space-between ;
 align-items: center;

 :hover{
    cursor: pointer;
 }
 `
 CardBox.Top=styled.div`
 display: flex;
 justify-content: space-between;
 padding: 10px 20px;
 ` 
