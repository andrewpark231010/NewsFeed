import styled from 'styled-components'

export const MainNavSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 1rem 3.3rem 1rem;
  & > select {
    width: 20rem;
    height: 3rem;
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    & > select {
      width: 13rem;
      height: 3rem;
      font-size: 2rem;
    }
  }
`

export const MainCardListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  grid-gap: 2rem 0;
  justify-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const MainNavSortItem = styled.span`
  font-size: 2rem;
  border-bottom: ${(props) =>
    props.$isSelected === props.value ? '4px solid black' : 'none'};
  cursor: pointer;
  transition: border 0.1s;

  &:first-child {
    margin-right: 1rem;
  }
`
