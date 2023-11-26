import styled from 'styled-components'
export const StContainer = styled.div`
  width: 60%;
  height: auto;
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.modalBackground};
  z-index: 30;
  padding: 3.5rem 6rem;

  @media (max-width: 800px) {
    width: 90%;
    padding: 3rem;
  }
`
export const StProfileH1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 800px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`
export const StProfileImgH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`
export const StLabel = styled.label`
  display: inline-block;
  background: url(${(props) => props.$img});
  width: 5rem;
  height: 5rem;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 3rem;
    height: 3rem;
  }
`

export const StImgBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`
export const StImgInput = styled.input`
  display: none;
`
export const StImgSpan = styled.span`
  font-size: 2.5rem;
  margin-left: 1rem;
  color: #6d6d6d;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`
export const StInputDiv = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  & input {
    height: 6rem;
    font-size: 3rem;
    border: 1px solid #6d6d6d;
    outline: none;
    margin-bottom: 2rem;
    padding: 0 2rem;
    background-color: ${(props) => props.theme.inputColor};
  }

  & textarea {
    height: 15rem;
    font-size: 2.5rem;
    padding: 2rem;
    margin-bottom: 4rem;
    resize: none;
    border: 1px solid #6d6d6d;
    outline: none;
    background-color: ${(props) => props.theme.inputColor};
  }
  @media (max-width: 800px) {
    & label {
      font-size: 2rem;
      font-weight: bold;
    }
    & input {
      font-size: 2rem;
      height: 3.5rem;
      padding: 0 1rem;
    }
    & textarea {
      font-size: 2rem;
      padding: 1rem;
      margin-bottom: 3rem;
    }
  }
`
export const StcompBtn = styled.button`
  font-size: 2.5rem;
  color: #fff;
  background: #1c1c1c;
  padding: 1rem 0;
  &:hover {
    cursor: pointer;
  }
`
export const StEditForm = styled.form`
  display: flex;
  flex-direction: column;
`
