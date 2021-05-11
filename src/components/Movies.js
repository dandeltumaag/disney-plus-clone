import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0542B444AA85B0ACF8FD33B8D4FC29EE8B5C1E084863AC4D72AE50A4C57F1503/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C213A77347283CA7993BC5D842FA992358C4B39A7DD5D6B0A61447846E078419/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F112D11EB7CCD188FAB5A06F6352555E5B9AF87F330B4A9221EC6FB9B6991FF9/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0542B444AA85B0ACF8FD33B8D4FC29EE8B5C1E084863AC4D72AE50A4C57F1503/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C213A77347283CA7993BC5D842FA992358C4B39A7DD5D6B0A61447846E078419/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F112D11EB7CCD188FAB5A06F6352555E5B9AF87F330B4A9221EC6FB9B6991FF9/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div `

`

const Content = styled.div `
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));  
`

const Wrap = styled.div `
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover{
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`