import styled from 'styled-components'
export const StContainer = styled.div`
  width: 60%;
  height: auto;
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 30;
  padding: 3.5rem 6rem;
`
export const StProfileH1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`
export const StProfileImgH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`
export const StLabel = styled.label`
  display: inline-block;
  background: url(${(props) => props.$img});
  width: 5rem;
  height: 5rem;
  background-position: center;
  background-size: cover;

  &:hover {
    cursor: pointer;
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
    padding-left: 2rem;
  }

  & textarea {
    height: 15rem;
    font-size: 2.5rem;
    padding: 2rem;
    margin-bottom: 4rem;
    resize: none;
    border: 1px solid #6d6d6d;
    outline: none;
  }
`
export const StcompBtn = styled.button`
  font-size: 2.5rem;
  color: #fff;
  background: #1c1c1c;
  padding: 1rem 0;
`
export const StEditForm = styled.form`
  display: flex;
  flex-direction: column;
`
