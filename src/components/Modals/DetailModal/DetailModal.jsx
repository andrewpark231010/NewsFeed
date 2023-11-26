import React from 'react'
import DetailModalContainer from './DetailModalContainer'
import ReactDOM from 'react-dom'
import BackDrop from '../BackDrop'

const DetailModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop modalMode="detail" />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <DetailModalContainer />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}
export default DetailModal
