import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Zebrads | 智能获客方案，覆盖全球10亿+用户',
    template: '%s | Zebrads',
  },
  description:
    'Zebrads 是面向全球市场的多源广告平台，提供弹窗、推送、问卷等多形式广告，结合反欺诈算法与智能出价，助力开发者、电商与品牌方实现高效用户增长。',
  keywords: [
    'Zebrads',
    '广告平台',
    '全球获客',
    '多源广告',
    '弹窗广告',
    '推送广告',
    '反欺诈',
    '智能出价',
    '联盟营销',
    '移动增长',
  ],
  authors: [{ name: 'Zebrads Team' }],
  generator: 'Zebrads',
  openGraph: {
    title: 'Zebrads | 智能获客方案，覆盖全球10亿+用户',
    description:
      '多源广告平台 · 反欺诈精准触达 · 195+ 国家与地区 · 日展示量超 120 亿次。',
    siteName: 'Zebrads',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className="antialiased bg-background text-foreground">
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
