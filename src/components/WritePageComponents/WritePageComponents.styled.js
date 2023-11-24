import styled from 'styled-components'
import check from '../../styles/images/WritePageImage/check.svg'
export const WPCategoryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  position: relative;

  & > select {
    width: 20rem;
    height: 3rem;
    font-size: 2rem;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    & > select {
      width: 13rem;
      height: 4rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`
export const WPCustomImgUseCheckBox = styled.div`
  font-size: 2rem;
  position: absolute;
  top: -3rem;
  display: flex;
  align-items: center;
  & input {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3px;
    border: 2px solid gray;
  }
  & input:checked {
    background: url(${check}) black;
    background-position: center;
    background-size: cover;
    border-color: #1c1c1c;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
export const WPCategoryFileInput = styled.div`
  display: flex;
  align-items: center;
  & input {
    display: none;
  }
  & label {
    cursor: pointer;
  }
  & span {
    margin-left: 1rem;
    font-size: 2.5rem;
    color: #6d6d6d;
  }
  @media (max-width: 500px) {
    & label {
      zoom: 0.8;
    }
    & span {
      margin-left: 0.5rem;
      font-size: 2rem;
    }
  }
`
export const WPcontainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 8rem auto 0 auto;
  width: 90%;
`

export const WPtitle = styled.input`
  font-size: 5rem;
  border: none;
  border-bottom: 1px solid #7d7d7d;
  margin-bottom: 4rem;
  outline: none;
  padding-bottom: 2rem;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`
export const WPtextarea = styled.textarea`
  font-size: 4rem;
  border: none;
  outline: none;
  resize: none;
  min-height: 40rem;
  font-family: inherit;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`

export const CompleteBtn = styled.button`
  font-size: 1.6rem;
  padding: 1.3rem 3rem;
  cursor: pointer;
  align-self: end;
  background: #1c1c1c;
  color: white;
`
