const HomePage = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>Welcome</div>
      <div
        style={{
          paddingTop: "60px",
          display: "flex",
          maxWidth: "1200px",
          justifyContent: "space-around",
        }}
      >
        <div className='home-title-box'>Om-tillbyggnad</div>
        <div className='home-title-box'>Trädgård</div>
      </div>
    </>
  );
};
export default HomePage;
