import styled from 'styled-components'

export const StCardLi = styled.li`
  display: flex;
  flex-direction: column;
  height: 32rem;
  width: 23rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.$img});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  transition: 0.5s;
  border: ${(props) => props.theme.cardBorder};
  padding: 1.5rem;
  color: #fff;
  cursor: pointer;
  & h2 {
    font-size: 2.8rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1.1rem 0;
  }
`
export const StCardLiFirstLine = styled.div`
  display: flex;
  & img {
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 50%;
    object-fit: cover;
  }
`
export const StCardLiFirstLineText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  & > span:first-child {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  & > span:last-child {
    font-size: 1.8rem;
  }
`
export const StContentContainerDiv = styled.div`
  position: relative;
  font-size: 1.2rem;
  height: 18rem;
  overflow: hidden;
  line-height: 2rem;
  & > p {
    word-wrap: break-word;
  }

  &::after {
    content: '';
    position: absolute;
    top: 13rem;
    width: 100%;
    height: 5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  }
`
