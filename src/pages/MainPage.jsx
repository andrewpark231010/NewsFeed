import React from 'react'
import MainPageNavigationSection from '../components/MainPageComponents/MainPageNavigationSection'

const MainPage = () => {
  return (
    <div>
      <MainPageNavigationSection />

      <div>
        <ul>
          <li>
            <div>
              <figure>
                <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                <div>
                  <span>2023-10-10</span>
                  <span>홍길동 님</span>
                </div>
              </figure>
            </div>
            <h2>리그오브레전드 공략</h2>
            <p>리그오브레전드는 탑, 미드, 정글, 원딜, 서폿으로 이루어져있어</p>
          </li>
          <li>
            <div>
              <figure>
                <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                <div>
                  <span>2023-10-10</span>
                  <span>홍길동 님</span>
                </div>
              </figure>
            </div>
            <h2>리그오브레전드 공략</h2>
            <p>리그오브레전드는 탑, 미드, 정글, 원딜, 서폿으로 이루어져있어</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainPage
