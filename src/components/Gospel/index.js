import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const GospelOfDay = [
  {
    title: 'Tin Mừng Chúa Giê-su Ki-tô theo thánh Lu-ca (Lc 2,1-14)',
    Svg: require('@site/static/img/noun-holy-bible.svg').default,
    description: (
      <>
          Thời ấy, hoàng đế Au-gút-tô ra chiếu chỉ, truyền kiểm tra dân số trong khắp cả
          thiên hạ. Đây là cuộc kiểm tra đầu tiên, được thực hiện thời ông Qui-ri-ni-ô làm
          tổng trấn xứ Xy-ri. Ai nấy đều về thành của mình mà khai tên tuổi. Bởi thế, ông
          Giu-se cũng từ thành Na-da-rét, miền Ga-li-lê, lên thành vua Đa-vít gọi là
          Bê-lem, miền Giu-đê, vì ông thuộc gia đình và dòng tộc vua Đa-vít. Ông lên đó
          khai tên cùng với bà Ma-ri-a là người đã thành hôn với ông, lúc ấy bà đang có
          thai. Khi hai người đang ở đó, thì bà Ma-ri-a đã tới ngày mãn nguyệt khai hoa.
          Bà sinh con trai đầu lòng, lấy tã bọc con, rồi đặt nằm trong máng cỏ, vì hai ông
          bà không tìm được chỗ trong nhà trọ.
          Trong vùng ấy, có những người chăn chiên sống ngoài đồng và thức đêm canh giữ
          đàn vật. Bỗng sứ thần Chúa đứng bên họ, và vinh quang của Chúa chiếu toả chung
          quanh, khiến họ sợ hãi kinh hoàng. Nhưng sứ thần bảo họ : “Anh em đừng sợ. Này
          tôi loan báo cho anh em một tin mừng trọng đại, cũng sẽ là niềm vui cho toàn dân
          : Hôm nay, một Đấng Cứu Độ đã sinh ra cho anh em trong thành vua Đa-vít, Người
          là Đấng Ki-tô, là Đức Chúa. Anh em cứ dấu này mà nhận ra Người : anh em sẽ gặp
          thấy một trẻ sơ sinh bọc tã, nằm trong máng cỏ.” Bỗng có đạo binh thiên quốc
          đông đảo hợp với sứ thần cất tiếng ca tụng Thiên Chúa rằng :
          “Vinh danh Thiên Chúa trên trời, bình an dưới thế cho loài người Chúa thương.”
      </>
    ),
  },
];

function GospelTemplate({Svg, title, description}) {
  return (
    <>
      <div className={clsx('col col--8')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
      <div className={clsx('col col--4')}>
        <img src="img/gospel-pic.jpg" alt="christmas" height="500"></img>
      </div>
    </>
  );
}

export default function Gospel() {
  return (
    <section className={"features " + styles.backgrounded}>
      <div className="container">
        <div className="row">
          {GospelOfDay.map((props, idx) => (<GospelTemplate key={idx} {...props} />))}
        </div>
      </div>
    </section>
  );
}
