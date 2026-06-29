import { Quote, Star } from 'lucide-react';
import { Reveal } from './reveal';

const testimonials = [
  {
    initials: 'CK',
    name: '陈凯文',
    role: '增长负责人',
    company: 'MediaBridge 媒介代理',
    role2: '中介代理',
    accent: 'amber',
    text: 'Zebrads 让我们的客户在一个面板里跑通了 12 个国家的获客投放。反欺诈表现远超预期，月省 30% 无效流量预算。',
    rating: 5,
  },
  {
    initials: 'LM',
    name: 'Lisa M.',
    role: 'Top Affiliate Marketer',
    company: 'GlobalAffiliate Hub',
    role2: '联盟营销者',
    accent: 'ink',
    text: '我同时跑十几个 Offer，Zebrads 的智能轮换让我不用再盯素材了。自动化规则配置完，半夜也在赚钱。',
    rating: 5,
  },
  {
    initials: 'WX',
    name: '王晓琳',
    role: 'CMO',
    company: '橙果美妆',
    role2: '品牌方',
    accent: 'amber',
    text: '我们用问卷广告精准找到对成分敏感的用户群，配合电商 Feed，ROAS 从 1.8 提升到 4.7。客户经理非常专业。',
    rating: 5,
  },
  {
    initials: 'JR',
    name: 'James R.',
    role: 'Head of UA',
    company: 'PixelForge Games',
    role2: '游戏发行',
    accent: 'ink',
    text: '弹窗覆盖广告 + 视频素材的组合，让我们一款休闲游戏在欧美市场单日拿到 6 万安装，CPI 控制在预期之内。',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-zebra-bone py-24 md:py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <Reveal className="lg:col-span-8">
            <div className="inline-block px-3 py-1 bg-zebra-amber text-zebra-ink text-xs font-semibold tracking-widest uppercase mb-5">
              客户怎么说
            </div>
            <h2 className="font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-zebra-ink">
              他们已经
              <br />
              和 Zebrads 一起奔跑。
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={150}>
            <div className="flex items-center gap-4">
              <div className="font-display text-5xl md:text-6xl font-black text-zebra-amber">
                4.9
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-zebra-amber text-zebra-amber"
                    />
                  ))}
                </div>
                <div className="text-xs text-zebra-stone">
                  基于 3,200+ 真实客户评分
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => {
            const isAmber = t.accent === 'amber';
            return (
              <Reveal
                key={t.name}
                delay={i * 100}
                className={`relative p-8 md:p-10 border-2 ${
                  isAmber
                    ? 'bg-white border-zebra-ink'
                    : 'bg-zebra-ink text-zebra-bone border-zebra-ink'
                } transition-all duration-300 hover:-translate-y-1 hover:shadow-hard`}
              >
                <Quote
                  className={`absolute top-6 right-6 h-12 w-12 ${
                    isAmber ? 'text-zebra-amber/50' : 'text-zebra-amber/40'
                  }`}
                  strokeWidth={1}
                />
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-zebra-amber text-zebra-amber"
                    />
                  ))}
                </div>
                <p
                  className={`text-base md:text-lg leading-relaxed mb-8 ${
                    isAmber ? 'text-zebra-ink' : 'text-zebra-bone/90'
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-current/15">
                  <div
                    className="relative w-12 h-12 flex items-center justify-center font-display font-bold text-base shrink-0 overflow-hidden"
                    aria-hidden
                  >
                    <span
                      className={`absolute inset-0 ${
                        isAmber ? 'stripes-bg' : 'bg-zebra-amber'
                      }`}
                    />
                    <span
                      className={`relative z-10 ${
                        isAmber ? 'text-zebra-bone' : 'text-zebra-ink'
                      }`}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base">
                      {t.name}
                    </div>
                    <div
                      className={`text-xs md:text-sm ${
                        isAmber ? 'text-zebra-stone' : 'text-zebra-bone/60'
                      }`}
                    >
                      {t.role} · {t.company}
                    </div>
                  </div>
                  <span
                    className={`ml-auto text-[10px] font-display tracking-widest uppercase px-2 py-1 border ${
                      isAmber
                        ? 'border-zebra-ink/30 text-zebra-ink'
                        : 'border-zebra-bone/30 text-zebra-bone/80'
                    }`}
                  >
                    {t.role2}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
