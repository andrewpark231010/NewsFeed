import styled from 'styled-components'

export const StHeader = styled.header`
  position: relative;
  width: 100%;
  height: 10rem;
  border-bottom: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`
export const StHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & img {
    content: url(${(props) => props.theme.logoImage});
    height: 8rem;
  }
  @media (max-width: 1000px) {
    zoom: 0.8;
  }
`
export const StHeaderHiddenTitle = styled.h1`
  overflow: hidden;
  display: block;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  color: transparent;
  text-indent: -99999px;
`

export const StHeaderForm = styled.form`
  position: absolute;
  width: 50rem;
  height: 5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > span {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translate(0, -50%);
    display: inline-block;
    height: 60%;
    padding-right: 1rem;
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    border-right: 2px solid black;
  }
  & > input {
    width: 100%;
    height: 100%;
    padding: 0 5rem 0 8rem;
    font-size: 2rem;
    border: none;
    background-color: #d9d9d9;
    border-radius: 16px;
  }
  & > button {
    position: absolute;
    right: 5rem;
    top: 0;
    bottom: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
  & > button:last-child {
    right: 1rem;
  }
  @media (max-width: 1000px) {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    width: 90%;
    height: 4rem;
    margin-bottom: 1rem;
    & > input {
      border-radius: 10px;
    }
  }
`
export const StHeaderNavArea = styled.div`
  display: flex;
`
export const StHeaderMobileToggleButton = styled.button`
  display: none;
  margin: 0 1rem;
  background: none;
  border: none;
  cursor: pointer;
  & svg {
    color: ${(props) => props.theme.mainColor};
    transition: 0.5s;
  }
  @media (max-width: 1000px) {
    display: block;
  }
`
export const StHeaderModeChangeButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
`

export const StHeaderButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3rem;
  background: transparent;
  transition: 0.5s;
  @media (max-width: 1000px) {
    background: ${(props) => props.theme.btnToggleAreaBackground};
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 10rem;
    height: ${(props) => (props.$isToggled ? '20rem' : '0')};
    margin-right: unset;
    padding: ${(props) => (props.$isToggled ? '2rem 0' : '0')};
    border-bottom: ${(props) => (props.$isToggled ? '2px' : '0')} solid black;
    overflow: hidden;
    z-index: 1;
  }
`
export const StHeaderButton = styled.button`
  font-size: 2rem;
  padding: 0.8rem 1rem;
  background-color: #d9d9d9;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;
  @media (max-width: 1000px) {
    width: 80%;
    background-color: inherit;
    &:hover,
    &:active {
      background-color: gray;
    }
  }
`
