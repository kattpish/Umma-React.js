import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: auto;
`

const Title = styled.h1`
  font-size: 3em;
  margin-top: 10rem;
  text-align: center;
`
class App extends React.Component {
    render(){
        return(
            <Wrapper>
                <Title>Hello World</Title>
            </Wrapper >
        )
    }
}

export default App