import { ZebradsLogo } from './logo';
import { Github, Twitter, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';
import { NewsletterForm } from './newsletter-form';

const links = {
  产品: [
    { label: '弹窗广告', href: '#ad-formats' },
    { label: '页面内推送', href: '#ad-formats' },
    { label: '推送提醒', href: '#ad-formats' },
    { label: '弹窗覆盖广告', href: '#ad-formats' },
    { label: '问卷调查广告', href: '#ad-formats' },
  ],
  解决方案: [
    { label: '移动工具类', href: '#solutions' },
    { label: '软件 / SaaS', href: '#solutions' },
    { label: '电商', href: '#solutions' },
    { label: '游戏', href: '#solutions' },
    { label: '金融', href: '#solutions' },
  ],
  公司: [
    { label: '关于我们', href: '#about' },
    { label: '客户案例', href: '#testimonials' },
    { label: '数据洞察', href: '#insights' },
    { label: '合作伙伴', href: '#partners' },
    { label: '加入我们', href: '#careers' },
  ],
  支持: [
    { label: '帮助中心', href: '#help' },
    { label: '开发者文档', href: '#docs' },
    { label: '联系销售', href: '#contact-sales' },
    { label: '服务状态', href: '#status' },
    { label: '法律条款', href: '#legal' },
  ],
};

export function SiteFooter() {
  return (
    <footer
      id="about"
      className="relative bg-zebra-ink text-zebra-bone overflow-hidden"
    >
      {/* 顶部条纹切割 */}
      <div
        aria-hidden
        className="relative h-3 stripes-bg"
        style={{ transform: 'skewY(-1deg)', transformOrigin: 'right top' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 mb-14">
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center text-zebra-bone">
              <ZebradsLogo className="h-8 w-auto" />
            </a>
            <p className="mt-5 text-sm md:text-base text-zebra-bone/60 leading-relaxed max-w-sm">
              Zebrads 是面向全球市场的多源广告平台。我们用十年时间，把"精准触达"做成了一门可被信赖的科学。
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-zebra-bone/70">
                <Mail className="h-4 w-4 mt-0.5 text-zebra-amber shrink-0" />
                <span>hello@zebrads.com</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-zebra-bone/70">
                <MapPin className="h-4 w-4 mt-0.5 text-zebra-amber shrink-0" />
                <span>北京 · 上海 · 香港 · 新加坡 · 伦敦</span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {[Twitter, Linkedin, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#social"
                  aria-label="社交媒体"
                  className="w-10 h-10 border border-zebra-bone/20 flex items-center justify-center hover:bg-zebra-amber hover:text-zebra-ink hover:border-zebra-amber transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6">
            {Object.entries(links).map(([title, list]) => (
              <div key={title}>
                <div className="text-xs font-display font-semibold tracking-widest text-zebra-amber uppercase mb-4">
                  {title}
                </div>
                <ul className="space-y-2.5">
                  {list.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-zebra-bone/70 hover:text-zebra-bone hover:underline underline-offset-4 decoration-zebra-amber decoration-2 transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 订阅栏 */}
        <div className="border-t border-b border-zebra-bone/10 py-7 md:py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="flex-1">
            <div className="font-semibold text-base md:text-lg">
              订阅 Zebrads 每月行业简报
            </div>
            <div className="text-xs md:text-sm text-zebra-bone/55 mt-1">
              每月一封，只发干货：投放案例、行业数据、新功能动态。
            </div>
          </div>
          <NewsletterForm />
        </div>

        {/* 底部版权 */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-zebra-bone/50">
          <div>
            © {new Date().getFullYear()} Zebrads Inc. 保留所有权利 · 京 ICP 备 2025xxxxxx 号
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#terms" className="hover:text-zebra-bone transition-colors">
              服务条款
            </a>
            <a href="#privacy" className="hover:text-zebra-bone transition-colors">
              隐私政策
            </a>
            <a href="#cookies" className="hover:text-zebra-bone transition-colors">
              Cookie 政策
            </a>
            <a href="#sitemap" className="hover:text-zebra-bone transition-colors">
              网站地图
            </a>
          </div>
        </div>
      </div>

      {/* 大字水印 */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden -mb-4 md:-mb-8"
      >
        <div className="font-display font-black text-[20vw] leading-none text-zebra-bone/[0.04] tracking-tighter text-center whitespace-nowrap">
          ZEBRADS
        </div>
      </div>
    </footer>
  );
}
