const SkeletonCard = () => (
  <div id="container" className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
    <div className="nft_coll">
      <div className="nft_wrap skeleton-wrap">
      </div>
      <div className="nft_coll_pp">
          <div className="lazy pp-coll skeleton-img"></div>
        <i className="fa fa-check"></i>
      </div>
      <div className="nft_coll_info">
          <h4 className="skeleton-title">Placeholder</h4><br/>
          <h4 className="skeleton-title">PHolder</h4>
      </div>
    </div>
  </div>
);

export default SkeletonCard;