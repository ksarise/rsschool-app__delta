import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Plot from './Plot';

ReactDOM.render(
  <React.StrictMode>
      {/* an attempt to recreate the original rssapp design and dom structure. */}
      <div className="ant-layout">
      <main className="ant-layout-content">
        <div className="ant-spin-container">
          <div className="ant-card">
            <div className="ant-card-head">
              <div className="ant-card-head-wrapper">
                <div className="ant-card-head-title">
                  <h2 className="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-nllxry">Your Stats</h2>
                </div>
              </div>
            </div>
            <div className="ant-card-body">
              <div className="ant-card-grid">
                <div className="ant-image">
                  <img className="ant-image-img" src="images/im-fine.svg" alt="" />
                </div>
              </div>
              <div className="ant-cart-grid">
                <div className="ant-card-info">
                  <div className="ant-card-stats">
                    <span className="ant-typography ant-typography-secondary css-nllxry">
                      <span role="img" aria-label="trophy" className="anticon anticon-trophy">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="trophy" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                          <path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z">
                          </path>
                        </svg>
                      </span>
                      Position
                    </span>
                    <span className="ant-typography css-nllxry position-block">
                      {/* Position value */}
                       <strong className='position'>1532/1888</strong>
                      {/* Diffs block start*/}
                      <span className='diffs'>
                        <span className="arrows">
                          {/* Beautiful svg arrows :3 */}
                          <img className="arrow down-arrow" src="images/down-arrow.svg" alt="" />
                          <img className="minus show" src="images/minus.svg" alt="" />
                          <img className="arrow up-arrow" src="images/up-arrow.svg" alt="" />
                        </span>
                        <span className='delta'></span>
                      </span>
                      {/* Diffs block end */}
                    </span>
                  </div>
                  <div className="ant-card-stats">
                    <span className="ant-typography ant-typography-secondary css-nllxry">
                    <span role="img" aria-label="fire" className="anticon anticon-fire">
                      <svg viewBox="64 64 896 896" focusable="false" data-icon="fire" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z">
                        </path>
                      </svg>
                    </span>
                    Total score
                    </span>
                    <span className="ant-typography css-nllxry">
                      {/* Score value */}
                      <strong className='score'>369/1373</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* !!!!!!!!!!!!!!!!!
          new widjet plot start
          !!!!!!!!!!!!!!!!! */}
          <div className="ant-card">
            <div className="ant-card-head">
              <div className="ant-card-head-wrapper">
                <div className="ant-card-head-title">
                  <h2 className="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-nllxry">
                  Statistics</h2>
                </div>
              </div>
            </div>
            <div className="ant-card-body" >
              <div id = 'plot' >
                <Plot/>
              </div>
            </div>
          </div>
          {/* !!!!!!!!!!!!!!!!!
          new widjet plot end
          !!!!!!!!!!!!!!!!! */}
        </div>
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);