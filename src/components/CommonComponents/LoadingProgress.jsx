import React from 'react'
import styled from 'styled-components'
import { SyncLoader } from 'react-spinners'

const LoadingProgress = ({ loading }) => {
  return (
    <ProgressBarContainer>
      <SyncLoader color="black" loading={loading} />
    </ProgressBarContainer>
  )
}

const ProgressBarContainer = styled.div`
  display: inline-block;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default LoadingProgress
