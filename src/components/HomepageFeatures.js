import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/1.svg').default,
    description: (
      <>
        Everything you need for easy game server management. Simple, sleek, and clean designed, ready for you and your clients.
      </>
    ),
  },
  {
    title: 'Simple but Powerful interface',
    Svg: require('../../static/img/2.svg').default,
    description: (
      <>
Simple interface for your clients to use at ease. It takes only 2 minutes from paying to playing.
      </>
    ),
  },
  {
    title: 'Customizable and feature-packed',
    Svg: require('../../static/img/3.svg').default,
    description: (
      <>
         Features of the web hosting service to start a hosting company: invoices, Discord integration, multiple payment options and full translation into several languages. The community also provides several addons that you can find in our market.
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
