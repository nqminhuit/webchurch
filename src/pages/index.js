import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Gospel from '@site/src/components/Gospel';
import ChurchNews from '@site/src/components/ChurchNews';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import Announcement from '@site/src/components/Announcement';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">Lễ vọng Giáng Sinh</Heading>
        Ngày 24 Tháng 12
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <Gospel />
        <Announcement />
        <ChurchNews />
      </main>
    </Layout>
  );
}
