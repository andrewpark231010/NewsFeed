import styled from 'styled-components'

export const StDiv = styled.div`
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
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem;
  & > span {
    font-weight: bold;
  }
`
export const StModalForm = styled.form`
  margin: 8.5rem 0 5rem 0;
  width: 80%;
  height: 6rem;
  background-color: transparent;
  border: #888888 3px solid;
  position: relative;

  & > input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: none;
    font-size: 3rem;
    padding: 0 5em 0 0.5em;
  }
  & > button {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 1rem;
    background: #292929;
    color: white;
    cursor: pointer;
  }
`
export const StLoginModalSocialAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    margin: 2.5rem;
  }
`
export const StLoginModalSocialButtonDiv = styled.div`
  display: flex;
  margin-bottom: 8rem;
  & > button {
    cursor: pointer;
    margin: 2.5rem;
    background: none;
  }
`
export const StModeChangeDiv = styled.div`
  font-size: 2rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  & > button {
    font-weight: bold;
    background: none;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`
