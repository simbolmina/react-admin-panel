import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../dummyData';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="ActiveUser" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
