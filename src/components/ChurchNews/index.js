import Heading from '@theme/Heading';
import styles from './styles.module.css';

const News = [
  {
    Pic: require('@site/static/img/icons8-news.svg').default,
    date: '23/09/2024',
    title: 'Thánh lễ Tạ ơn và khai giảng Nhà Ứng Sinh Chủng Viện - Năm tìm hiểu Ơn Thiên Triệu 2024-2025',
    description: 'Chúng ta phải đi trên con đường Thánh giá. Nếu chúng ta quên điều đó thì sẽ đi chệch đường, sẽ không thể trở thành linh mục của Chúa được.'
  },
  {
    Pic: require('@site/static/img/icons8-news.svg').default,
    date: '20/09/2024',
    title: 'Giáo hạt Tân Sơn Nhì: Thường huấn lần 3, năm 2024',
    description: '"Linh đạo Sinh thái - Linh đạo của “ Sự sống còn” là chủ đề của buổi thường huấn lần thứ 3 năm 2024 cho tất cả quý chức trong giáo hạt Tân Sơn Nhì, được tổ chức vào lúc 8g00 thứ Ba ngày 17-09-2024 tại giáo xứ Phú Thọ Hòa - TGP Sài Gòn.'
  },
  {
    Pic: require('@site/static/img/icons8-news.svg').default,
    date: '10/09/2024',
    title: 'Giáo Hạt Thủ Thiêm: Chia sẻ Mục Vụ Thánh Nhạc',
    description: '“Ca hát, chơi đàn, sáng tác, chỉ huy, làm nên âm nhạc trong Hội Thánh là một trong những thứ tuyệt vời nhất để vinh danh Thiên Chúa” (Đức Giáo Hoàng Phanxico)'
  }
]

function NewsTemplate({Pic, date, title, description}) {
  return (
    <div className="container hvrGrow">
      <Pic className={styles.featureSvg} role="img" />
      <div>
        <Heading as="h4">{title}</Heading>
        {date} <br/>
        {description}
      </div>
    </div>
  );
}

export default function ChurchNews() {
  return(
    <section className="features">
      <div className="container">
        <Heading as="h1">Tin Tức</Heading>
        <div className="row">
          {News.map((props, idx) => (<NewsTemplate key={idx} {...props} />))}
        </div>
      </div>
    </section>
  );
}
