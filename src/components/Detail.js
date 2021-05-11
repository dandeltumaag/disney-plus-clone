import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="data:image/jpeg;base64,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" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 . 7m . Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, tenetur? Sunt cupiditate labore quae, ipsam voluptatum incidunt nostrum tenetur eos.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div `
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  span{
    color: black;
  }
`

const Background = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div `
  height: 30vh;
  min-height: 170px;
  width: 35vh;
  min-width: 200px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
  }
`

const Controls = styled.div `
  display: flex;
  align-items: center;  
`

const PlayButton = styled.div `
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 24.2px;
  letter-spacing: 1.80px;
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
  }

  span{
    color: black;
  }
`

const TrailerButton = styled(PlayButton) `
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  span{
    color: white;
  }
`

const AddButton = styled.div `
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  margin-right: 16px;

  span{
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
  
`

const GroupWatchButton = styled(AddButton) `
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div `
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div `
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`
