import styled , {keyframes} from 'styled-components'


const translate = keyframes`
    from{
    transform: translateX(0);
    }
    
    to{
    transform: translateX(120vw);
    }
`

const ride = keyframes`
  from{
  transform: translateX(0
  );
  }
  to{
  transform: translateX(100vw);
  }
`

export const Warp = styled.div`
    background: #61dafb;
    height: 40vh;
`;

export const Grass = styled.div`
    background: darkolivegreen;
    height: 20vh;
`

export const Route = styled.div`
    background: #282c34;
    height: 40vh;
    border-top: #bfc7d3 5vh;
    position: relative;
    display: flex;
    align-items: center;
      
`

export const Cloud = styled.img`
  margin: 10vw;
  position: absolute;
  top: 0; 
  left: -20vw;
  height: 10vh;
  width: 20vw; 
  margin: 0;    
  animation: ${translate}; 
  animation-duration: 15s; 
  animation-direction: reverse;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
filter: drop-shadow(30px 10px 4px #4444dd);
`

export const Line = styled.div`
    border-bottom: grey 5vh dashed;
    width: 100vw;
    position : absolute;
    top:-5%;
        
`

export const Mario = styled.img`
  height: 20vh;
  width: 30vw; 
  animation: ${ride} 5s infinite alternate-reverse;
  
   
`