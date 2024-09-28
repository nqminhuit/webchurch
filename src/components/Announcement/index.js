import Heading from '@theme/Heading';
import styles from './styles.module.css';

const Items = [
  {
    Pic: require('@site/static/img/announce-voice-svgrepo-com.svg').default,
    date: '28/09/2024',
    title: 'Công bố Lời Chúa',
    description: 'Trong tuần lễ từ 29/09 - 05/10, Giáo họ Martino sẽ phụ trách việc đọc sách các Thánh Lễ trong tuần.'
  },
  {
    Pic: require('@site/static/img/announce-voice-svgrepo-com.svg').default,
    date: '12/09/2024',
    title: 'Thư kêu gọi các đoàn thể tôn giáo trong Tổng Giáo phận Sài Gòn',
    description: 'Hãy hành động chung tay cứu trợ các nạn nhân bão và lũ lụt tại các tỉnh miền Bắc.'
  },
  {
    Pic: require('@site/static/img/announce-voice-svgrepo-com.svg').default,
    date: '16/08/2024',
    title: 'Thông báo về việc Lạc quyên cho quỹ "Đồng tiền Thánh Phêrô"',
    description: '"Đồng tiền Thánh Phêrô" là nguồn trợ giúp tài chính của các tín hữu cho Đức Thánh Cha'
  }
]

function AnnTemplate({Pic, date, title, description}) {
  return (
    <div className="container hvrGrow">
      <Pic className={styles.featureSvg} role="img" />
      <div className="">
        <Heading as="h4">{title}</Heading>
        {date} <br/>
        {description}
      </div>
    </div>
  );
}

export default function Announcement() {
  return(
    <section className={"features " + styles.backgrounded}>
      <div className="container">
        <Heading as="h1">Thông báo</Heading>
        <div className="row">
          {Items.map((props, idx) => (<AnnTemplate key={idx} {...props} />))}
        </div>
      </div>
    </section>
  );
}
