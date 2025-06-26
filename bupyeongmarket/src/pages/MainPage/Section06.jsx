function Section06 () {

  return (
    <section className="section06">
      <div className="container">
        <div className="row">
          <div className="col-md-6 notice">
            <div className="title">
              <h3>공지사항</h3>
              <button onClick={() => (window.location.href = 'assets/pages/notice_list.html')}>
                자세히보기 &gt;
              </button>
            </div>
            {[
              {
                title: '설·추석엔 잠깐 쉬어요! 시장 휴무랑 운영 시간 알려드려요',
                date: '2024-12-23',
              },
              {
                title: '주차 걱정 끝! 주차장 이용 꿀팁과 요금 안내 드려요',
                date: '2024-11-13',
              },
              {
                title: '신나고 즐거운 시장 축제, 일정 미리 알려드릴게요',
                date: '2024-10-11',
              },
              {
                title: '우리 시장 새 친구 찾고 있어요! 상인 모집 소식',
                date: '2024-07-25',
              },
              {
                title: '시설 점검해요! 이용에 참고해 주세요~',
                date: '2024-04-21',
              },
            ].map(({ title, date }, idx) => (
              <a href="assets/pages/notice.html" key={idx}>
                <div className="content">
                  <div className="col-md-8 head">
                    <h3>{title}</h3>
                  </div>
                  <div className="col-md-4 date">
                    <p>{date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="col-md-6 map">
            <div className="title">
              <h3>오시는길</h3>
              <button onClick={() => (window.location.href = 'assets/pages/map.html')}>
                자세히보기&gt;
              </button>
            </div>
            <div id="map" style={{ width: '100%', height: '350px' }}></div>
            <p>
              <button onClick={setCenter}></button>
              <button onClick={panTo}></button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Section06;