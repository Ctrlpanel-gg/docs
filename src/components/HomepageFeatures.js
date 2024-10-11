import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/1.svg').default,
    description: (
      <>
        Ctrlpanel is a software designed to be easy for you and your clients to easily manage your Pterodactyl servers.
      </>
    ),
  },
  {
    title: 'Simple but Powerful',
    Svg: require('../../static/img/2.svg').default,
    description: (
      <>
Perfect for your clients. Your clients can buy a server within 2 minutes. That's what we call efficiency. 
      </>
    ),
  },
  {
    title: 'Customizable and feature-packed',
    Svg: require('../../static/img/3.svg').default,
    description: (
      <>
         This is ready for anyone to use for their hosting company. It comes packed with many features including invoices, Discord interigation, multiple differnet payment options and full translation in multiple languages. Our community also makes lots of themes and addons that enhances your clients expierence using Ctrlpanel.
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
