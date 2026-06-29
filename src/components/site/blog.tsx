import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { Reveal } from './reveal';

const posts = [
  {
    tag: '行业报告',
    title: '2025 全球广告趋势：从 Cookie-less 到 AI 创意全面爆发',
    excerpt:
      '我们调研了 1,200 位广告主，整理出未来 12 个月最值得关注的 7 个增长信号。',
    date: '2025 · 03 · 12',
    read: '8 分钟',
    color: 'amber',
  },
  {
    tag: '产品更新',
    title: 'Zebrads 4.0 上线：智能出价 V2 与素材生成系统',
    excerpt:
      '全新一代出价模型让转化提升 18%，配合 AI 素材生成，把创意工序压缩 60%。',
    date: '2025 · 02 · 28',
    read: '5 分钟',
    color: 'ink',
  },
  {
    tag: '策略指南',
    title: '电商出海第一课：如何用问卷广告筛出高客单用户',
    excerpt:
      '一个让 ROAS 直接翻倍的小技巧——把问卷投到投放链路的最前端。',
    date: '2025 · 02 · 14',
    read: '6 分钟',
    color: 'mist',
  },
  {
    tag: '案例研究',
    title: 'PixelForge：用 Zebrads 把休闲游戏推到欧美 Top 50',
    excerpt:
      '从冷启动到长尾运营，看一款手游如何在 90 天内完成市场穿透。',
    date: '2025 · 02 · 02',
    read: '7 分钟',
    color: 'mist',
  },
  {
    tag: '技术深读',
    title: '反欺诈是怎么炼成的：Zebrads 三层流量过滤揭秘',
    excerpt:
      '一次完整披露：从指纹识别到行为模型，我们如何拦截 23% 的虚假流量。',
    date: '2025 · 01 · 20',
    read: '10 分钟',
    color: 'ink',
  },
  {
    tag: '运营技巧',
    title: '推送广告冷启动指南：前 7 天必须做对的 5 件事',
    excerpt:
      '推送格式入门必看：用户分桶、频次控制、素材轮换的实操清单。',
    date: '2025 · 01 · 08',
    read: '4 分钟',
    color: 'amber',
  },
];

export function Blog() {
  return (
    <section
      id="insights"
      className="relative bg-zebra-bone py-24 md:py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <Reveal className="lg:col-span-8">
            <div className="inline-block px-3 py-1 bg-zebra-ink text-zebra-bone text-xs font-semibold tracking-widest uppercase mb-5">
              数据洞察
            </div>
            <h2 className="font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-zebra-ink">
              来自一线投放的
              <br />
              真实数据与思考。
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 flex lg:justify-end" delay={150}>
            <a
              href="#all-posts"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-zebra-ink border-b-2 border-zebra-ink pb-1 hover:text-zebra-ember hover:border-zebra-ember transition-colors"
            >
              查看全部洞察
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((p, i) => {
            const isHero = i === 0;
            return (
              <Reveal
                key={p.title}
                delay={i * 80}
                className={`group relative flex flex-col bg-white border border-zebra-ink/15 hover:border-zebra-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-hard cursor-pointer ${
                  isHero ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                {/* 配图占位（条纹/纯色） */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${
                    p.color === 'amber'
                      ? 'bg-zebra-amber'
                      : p.color === 'ink'
                        ? 'bg-zebra-ink'
                        : 'bg-zebra-mist'
                  }`}
                >
                  <div
                    aria-hidden
                    className={`absolute inset-0 ${
                      p.color === 'amber'
                        ? 'stripes-bg-thin opacity-40 text-zebra-ink'
                        : p.color === 'ink'
                          ? 'stripes-bg-light opacity-40'
                          : 'stripes-bg-soft'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-semibold tracking-widest uppercase ${
                        p.color === 'ink'
                          ? 'bg-zebra-amber text-zebra-ink'
                          : 'bg-zebra-ink text-zebra-bone'
                      }`}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 ${
                        p.color === 'ink'
                          ? 'bg-zebra-bone text-zebra-ink'
                          : 'bg-zebra-ink text-zebra-bone'
                      } group-hover:rotate-12 transition-transform duration-500`}
                    >
                      <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6 md:p-7 flex flex-col">
                  <h3
                    className={`font-bold leading-snug text-zebra-ink mb-3 group-hover:text-zebra-ember transition-colors ${
                      isHero ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base text-zebra-stone leading-relaxed mb-5 ${
                      isHero ? '' : 'line-clamp-2'
                    }`}
                  >
                    {p.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-4 text-xs text-zebra-stone font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {p.read}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
