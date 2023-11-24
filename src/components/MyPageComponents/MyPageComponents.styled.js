import styled from 'styled-components'
import { editIcon } from '../../styles/images'

// 프로필 - 이미지,닉네임,수정버튼,이메일,소개글
export const MyBox = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 22rem;
  width: 60%;
  margin: 5rem auto 0 auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    width: 90%;
    height: auto;
  }
`
export const MyImgWrapper = styled.figure`
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
`
export const MyProfileImg = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  object-fit: cover;
`

export const MyProfileBox = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 1000px) {
    margin: 2rem 0 0 0;
    align-items: center;
  }
`

export const NickNameAndBtnWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
export const MyProfileNickName = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`

export const MyEditBtn = styled.button`
  background-image: url(${editIcon});
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
  object-fit: cover;
  cursor: pointer;
`
export const MyEmail = styled.span`
  font-size: 1.4rem;
  color: #8a8e94;
  margin-bottom: 3rem;
`
export const Intro = styled.p`
  font-size: 2rem;
  word-break: break-all;
  line-height: 3rem;
  overflow-y: scroll;
  max-height: 15rem;
  white-space: pre-line;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }
`
// My 작성글
export const MyPostWrapper = styled.div`
  width: 90%;
  min-height: 20rem;
  margin: 3rem auto 0 auto;
  border: 4px solid #b9bdc4;
  border-radius: 30px;
  position: relative;
  padding: 7rem 0 2rem 0;
`

export const MyPost = styled.span`
  position: absolute;
  left: 4rem;
  top: 2rem;
  font-size: 2.5rem;
  text-decoration: black solid underline 3px;
  text-underline-position: under;
  font-weight: bold;
  & span {
    font-weight: normal;
  }
  @media (max-width: 1000px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`
export const MyPostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  grid-gap: 2rem 0;
  justify-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
