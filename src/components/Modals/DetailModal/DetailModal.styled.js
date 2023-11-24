import styled from 'styled-components'

export const StDiv = styled.div`
  position: relative;
  min-width: 35rem;
  max-width: 77rem;
  width: 80%;
  height: auto;
  background-color: #fff;
  z-index: 20;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 4.5rem;
  height: 4.5rem;
  background-color: transparent;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 3rem;
    height: 0.5rem;
    transform: translate(-50%, -50%) rotate(45deg);
    border: 1px solid white;
    border-radius: 2px;
    transition: 0.5s;
  }
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 3rem;
    height: 0.5rem;
    transform: translate(-50%, -50%) rotate(-45deg);
    border: 1px solid white;
    border-radius: 2px;
    transition: 0.5s;
  }
  &:hover,
  &:active {
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
      background-color: white;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
      background-color: white;
    }
  }
`
export const StFirstDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$backgroundImage});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  color: white;
  align-items: start;
  width: 100%;
  border-radius: 20px 20px 0 0;
  border-bottom: 5px solid #858585;
`
export const StDetailModalTitle = styled.h1`
  margin: 5.5rem 0 3.5rem 0;
  font-size: 4rem;
  font-weight: bold;
`
export const StFirstLineUserInfo = styled.div`
  display: flex;
  margin-bottom: 3rem;
  & div {
    display: flex;
    flex-direction: column;
    margin-left: 1.3rem;
  }
  & img {
    border-radius: 50%;
    width: 6.5rem;
    height: 6.5rem;
    object-fit: cover;
  }
`
export const StDetailModalDate = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`
export const StDetailModalUserName = styled.h2`
  font-size: 3rem;
`
export const StSecondLineContent = styled.p`
  padding: 4rem;
  font-size: 2.5rem;
  height: 30rem;
  border-radius: 0 0 20px 20px;
  background-color: #fff;
  overflow-y: scroll;
  white-space: pre-line;
  line-height: 4rem;
  letter-spacing: 0.1rem;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }
`
