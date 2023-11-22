import styled from 'styled-components'
// import { MyProfileUploadImg } from '../../styles/images'
import { MyProfileUploadImg } from '../../styles/images'
export const WPCategoryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  & input {
    /* display: none; */
  }
  & label {
    background: url(${MyProfileUploadImg});
    width: 5rem;
    height: 5rem;
  }

  & > select {
    width: 20rem;
    height: 3rem;
    font-size: 2rem;
    cursor: pointer; /* 마우스를 올렸을 때 포인터로 변경 */
  }
`
export const WPcontainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 13rem;
`

export const WPtitle = styled.input`
  font-size: 5rem;
  border: none;
  border-bottom: 1px solid #7d7d7d;
  margin-bottom: 4rem;
  outline: none;
  padding-bottom: 2rem;
`
export const WPtextarea = styled.textarea`
  font-size: 4rem;
  border: none;
  outline: none;
  resize: none;
`

export const CompleteBtn = styled.button`
  font-size: 1.6rem;
  padding: 1.3rem 3rem;

  cursor: pointer;
  align-self: end;
`
// export const MyProfileUploadImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
