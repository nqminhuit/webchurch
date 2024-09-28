import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Gospel from '@site/src/components/Gospel';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

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
      </main>
    </Layout>
  );
}
