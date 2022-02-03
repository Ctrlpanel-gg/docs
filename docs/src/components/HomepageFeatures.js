import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/fullscreen.svg').default,
    description: (
      <>
        Everything you need to see in one View. Nice, sleek and clean
      </>
    ),
  },
  {
    title: 'Simple but powerful Webinterface',
    Svg: require('../../static/img/servers.svg').default,
    description: (
      <>
For your clients to use. Using this Panel, its just a 2 minute Route from Paying to Playing
      </>
    ),
  },
  {
    title: 'Customizable and feature-packed',
    Svg: require('../../static/img/custom.svg').default,
    description: (
      <>
         With Invoices, Discord Integration, multiple payment-gateways and full translation to multiple languages you are ready to start your hosting company.
          With the support of our great community, we offer a variety of themes for you to use
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
