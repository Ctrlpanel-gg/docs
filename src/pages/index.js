import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepagePartners from '../components/HomepagePartners';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="../../img/controlpanel.png" height="125" width="125" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.contianer}>
        <div className={styles.buttons}>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Documentation ️👀
            </Link>
          </div>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="https://market.ctrlpanel.gg/">
              Theme / Extension Hub ️🛒
            </Link>
          </div>
          <div>
            <Link
                className="button button--secondary button--lg"
                to="https://github.com/orgs/Ctrlpanel-gg/projects/1">
              Roadmap 🛣️
            </Link>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CtrlPanel's Dashboard is a free and open-source management panel for pterodactyl with credit based billing and customization.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepagePartners />
      </main>
    </Layout>
  );
}
