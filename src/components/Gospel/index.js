import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tin Mừng Chúa Giê-su Ki-tô theo thánh Lu-ca. Lc 9,18-22',
    Svg: require('@site/static/img/holy-bible-yesterday.svg').default,
    description: (
      <>
        Hôm ấy, Đức Giê-su cầu nguyện một mình. Các môn đệ cũng ở đó
        với Người, và Người hỏi các ông rằng : “Dân chúng nói Thầy
        là ai ?” Các ông thưa : “Họ bảo Thầy là ông Gio-an Tẩy Giả,
        nhưng có kẻ thì bảo là ông Ê-li-a, kẻ khác lại cho là một
        trong các ngôn sứ thời xưa đã sống lại.” Người lại hỏi :
        “Còn anh em, anh em bảo Thầy là ai ?” Ông Phê-rô thưa :
        “Thầy là Đấng Ki-tô của Thiên Chúa.” Nhưng Người nghiêm
        giọng truyền các ông không được nói điều ấy với ai.
        Người còn nói : “Con Người phải chịu đau khổ nhiều, bị các
        kỳ mục, thượng tế cùng kinh sư loại bỏ, bị giết chết, và
        ngày thứ ba sẽ trỗi dậy.”
      </>
    ),
  },
  {
    title: 'Tin Mừng Chúa Giê-su Ki-tô theo thánh Lu-ca.',
    Svg: require('@site/static/img/holy-bible-today.svg').default,
    description: (
      <>
        Khi ấy, đang lúc mọi người còn bỡ ngỡ về tất cả các việc
        Đức Giê-su làm, thì Người nói với các môn đệ rằng : “Phần
        anh em, hãy lắng tai nghe cho kỹ những lời sau đây : Con
        Người sắp bị nộp vào tay người đời.” Nhưng các ông không
        hiểu lời đó, vì đối với các ông, lời đó còn bí ẩn, đến nỗi
        các ông không nhận ra ý nghĩa. Nhưng các ông sợ không dám
        hỏi lại Người về lời ấy.
      </>
    ),
  },
  {
    title: 'Tin Mừng Chúa Giê-su Ki-tô theo thánh Mác-cô. Mc 9,38-43.45.47-48',
    Svg: require('@site/static/img/holy-bible-tomorrow.svg').default,
    description: (
      <>
        Khi ấy, ông Gio-an nói với Đức Giê-su rằng : “Thưa Thầy,
        chúng con thấy có người lấy danh Thầy mà trừ quỷ. Chúng con
        đã cố ngăn cản, vì người ấy không theo chúng ta.” Đức Giê-su
        bảo : “Đừng ngăn cản người ta, vì không ai lấy danh nghĩa
        Thầy mà làm phép lạ, rồi ngay sau đó lại có thể nói xấu về
        Thầy. Quả thật, ai không chống lại chúng ta là ủng hộ chúng
        ta.
        “Ai cho anh em uống một chén nước vì lẽ anh em thuộc về Đấng
        Ki-tô, thì Thầy bảo thật anh em, người đó sẽ không mất phần
        thưởng đâu.
        “Ai làm cớ cho một trong những kẻ bé mọn đang tin đây phải
        sa ngã, thì thà buộc cối đá lớn vào cổ nó mà ném xuống biển
        còn hơn. Nếu tay anh làm cớ cho anh sa ngã, thì chặt nó đi ;
        thà cụt một tay mà được vào cõi sống còn hơn là có đủ hai
        tay mà phải sa hoả ngục, phải vào lửa không hề tắt. Nếu chân
        anh làm cớ cho anh sa ngã, thì chặt nó đi ; thà cụt một chân
        mà được vào cõi sống còn hơn là có đủ hai chân mà bị ném vào
        hoả ngục. Nếu mắt anh làm cớ cho anh sa ngã, thì móc nó đi ;
        thà chột mắt mà được vào Nước Thiên Chúa còn hơn là có đủ
        hai mắt mà bị ném vào hoả ngục, nơi giòi bọ không hề chết và
        lửa không hề tắt.”
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Gospel() {
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
