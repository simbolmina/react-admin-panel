import React from 'react';
import './FeaturedInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="feturedTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$222</span>
          <span className="featuredMoneyRate">
            -22 <ArrowDownwardIcon className="featuredIcon negative" />{' '}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="feturedTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$555</span>
          <span className="featuredMoneyRate">
            +11 <ArrowDownwardIcon className="featuredIcon positive" />{' '}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="feturedTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$666</span>
          <span className="featuredMoneyRate">
            +22 <ArrowUpwardIcon className="featuredIcon " />{' '}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
