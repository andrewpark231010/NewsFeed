import styled from 'styled-components'

export const MainNavSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 1rem 3.3rem 1rem;
  & > select {
    background-color: ${(props) => props.theme.mainBackgroundColor};
    width: 20rem;
    height: 3rem;
    font-size: 2rem;
    color: ${(props) => props.theme.mainColor};
    border: 2px solid ${(props) => props.theme.mainColor};
    transition: 0.5s;
  }
  @media (max-width: 500px) {
    & > select {
      width: 13rem;
      height: 3rem;
      font-size: 1.5rem;
    }
  }
`

export const MainCardListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  grid-gap: 2rem 0;
  justify-items: center;
  margin-bottom: 2rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const MainNavSortItem = styled.span`
  font-size: 2rem;
  transition:
    color 0.5s,
    border 0.1s;
  border-bottom: 4px solid
    ${(props) =>
      props.$isSelected === props.value
        ? `${props.theme.mainColor}`
        : 'transition'};
  cursor: pointer;
  color: ${(props) => props.theme.mainColor};

  &:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`

export const MainCardListNoListMessage = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 10rem;
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
`
