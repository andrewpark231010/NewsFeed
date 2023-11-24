import styled from 'styled-components'
import { editIcon } from '../../styles/images'

// 프로필 - 이미지,닉네임,수정버튼,이메일,소개글
export const MyBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`
export const MyImgWrapper = styled.div`
  width: 22rem;
  height: 22rem;
  border-radius: 70%;
  overflow: hidden;
  margin-left: 1rem;
`
export const MyProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const MyProfileBox = styled.div`
  margin-top: 2.6rem;
  margin-left: 3rem;
`

export const NickNameAndBtnWrapper = styled.div`
  display: flex;
`

export const MyProfileNickName = styled.h2`
  font-size: 3rem;
  height: 1.4rem;
`

export const MyEditBtn = styled.button`
  background-image: url(${editIcon});
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`

export const MyEmailAndIntroWrapper = styled.div`
  margin-top: 1.3rem;
  /* width: 100%; */

  height: 20rem;
`
export const MyEmail = styled.p`
  font-size: 1.4rem;
  color: #8a8e94;
`
export const Intro = styled.p`
  margin-top: 2rem;
  font-size: 2rem;
  width: 50rem;
  height: 15rem;
  word-break: normal;
  overflow: hidden;
`
// My 작성글
export const MyPostWrapper = styled.div`
  width: 100rem;
  height: 40rem;
  margin-left: 11rem;
  border: 4px solid #b9bdc4;
  border-radius: 3rem;
`

export const MyPost = styled.p`
  font-size: 2.5rem;
  margin-left: 7rem;
  margin-top: 4rem;
  text-decoration: black solid underline 3px;
  text-underline-position: under;
`
