const ShimmerCard = () => {
  return (
    <div className="conatiner">
      <div className="pic shimmer"></div>
      <div className="text">
        <div className="text1 shimmer"></div>
        <div className="text2 shimmer"></div>
        <div className="text2 shimmer"></div>
        <div className="text2 shimmer"></div>
      </div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="con-body">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
