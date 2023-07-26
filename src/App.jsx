import { styled } from 'styled-components'
import Images from './components/faqImage'
import AskAndAnswer from './components/burgerQuests'

const App = () => {
  return (
    <Body>
      <BgColor>
        <Images />
        <AskAndAnswer />
      </BgColor>
    </Body>
  )
}

export default App

const Body = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`
const BgColor = styled.div`
  background-color: #FFF;
  border-radius: 2.3rem;
  width: 90%;
  margin: 12rem 0 4rem 0;
  max-width: 68rem;

  @media (min-width: 955px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 92rem;
    overflow: hidden;
  }
`