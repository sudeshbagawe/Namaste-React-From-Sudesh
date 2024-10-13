const Shimmer = () => {
    return (
      <div className="shimmer-ui">
        <div className="shimmer-card-container">
          {Array(10).fill("").map((_, index) => (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-img"></div>
              <div className="shimmer-title"></div>
              <div className="shimmer-desc"></div>
              <div className="shimmer-rating"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  
