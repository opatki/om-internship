const SkeletonHC = () => (
  <div className="item-container col-lg-3 col-md-6 col-sm-6 col-xs-12">
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


const SkeletonNI = () => (
  <div className="item-container col-lg-3 col-md-6 col-sm-6 col-xs-12">
    <div className="nft__item">
      <div className="author_list_pp">
          <div className="lazy pp-coll skeleton-img"></div>
          <i className="fa fa-check"></i>
      </div>

      <div className="nft__item_wrap">
        <div className="lazy pp-coll skeleton-wrap taller-skeleton"></div>
      </div>
      <div className="nft__item_info">
        <h3 className="skeleton-title">Big Placeholder</h3><br/>
        <h4 className="skeleton-title nft__price-skeleton">PHolder</h4>
        <h4 className="nft__item_like skeleton-title nft__likes-skeleton">hold</h4>
      </div>
    </div>
  </div>
);

const SkeletonTS = () => (
  <li>
    <div className="author_list_pp">
        <div className="lazy pp-author skeleton-img"></div>
        <i className="fa fa-check"></i>
    </div>
    <div className="author_list_info">
      <h4 className="skeleton-title top__seller--title">Placeholder</h4><br/>
      <h4 className="skeleton-title top__seller--title">hold</h4>
    </div>
  </li>
);

const SkeletonExplore = () => (
  <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
    style={{ display: "block", backgroundSize: "cover" }}>
      <div className="skeleton-wrap skeleton__explore nft__item">

      </div>
  </div>
);



export { SkeletonHC, SkeletonNI, SkeletonTS, SkeletonExplore }