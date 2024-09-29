import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Giáo xứ Hy Vọng',
  favicon: 'img/icons8-church-100.png',

  url: 'https://nqminhuit.github.io',
  baseUrl: '/webchurch',
  organizationName: 'nqminhuit',
  projectName: 'webchurch',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {},
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Giáo Xứ Hy Vọng',
        logo: {
          alt: 'Site Logo',
          src: 'img/icons8-church-100.png',
        },
        items: [
          {to: '/announcement', label: 'Thông báo', position: 'left'},
          {to: '/community', label: 'Cộng Đồng', position: 'left'},
          {to: '/hymns', label: 'Thánh Ca', position: 'left'},
          {to: '/about', label: 'About', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Giờ Thánh Lễ',
            items: [
              {html: `Thứ Hai - Thứ Bảy: 05:00 | 18:00`},
              {html: `Chúa Nhật: 05:30 | 07:30 |  17:00 | 18:30`},
            ],
          },
          {
            title: 'Liên Hệ',
            items: [
              {html: `Địa chỉ: 69 Phan Huy Ích, P.15, Q. Tân Bình`},
              {html: `Điện thoại: 3815 1700`},
            ],
          },
        ],
        logo: {
          alt: 'Site Logo',
          src: 'img/icons8-church-100.png',
          href: '/',
          width: 82,
          height: 72,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Ban Truyền Thông Giáo Xứ Hy Vọng.`,
      },
    }),
};

export default config;
