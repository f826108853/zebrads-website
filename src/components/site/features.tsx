import {
  ShieldCheck,
  Globe2,
  Target,
  BarChart3,
} from 'lucide-react';
import { Reveal } from './reveal';

const features = [
  {
    icon: ShieldCheck,
    title: '受众质量',
    desc: '内置三层反欺诈算法，实时过滤虚假流量，确保每一次曝光都触达真实、高价值的目标用户。',
    tag: '反欺诈',
  },
  {
    icon: Globe2,
    title: '流量能力强大',
    desc: '日均广告展示超 120 亿次，覆盖 195+ 国家与地区，无论本地还是出海，都能找到你的下一位用户。',
    tag: '全球网络',
  },
  {
    icon: Target,
    title: '广告效果',
    desc: '支持自定义受众、兴趣标签与行为定向，配合素材智能生成系统，让每一个创意都跑在最佳赛道。',
    tag: '精准定向',
  },
  {
    icon: BarChart3,
    title: '数据分析',
    desc: '流量预估、胜率统计、A/B 智能轮换——一块仪表盘看清整个投放链路的每一帧数据。',
    tag: '实时洞察',
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-zebra-bone py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 stripes-bg-soft pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <Reveal className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-zebra-ink text-zebra-bone text-xs font-semibold tracking-widest uppercase mb-5">
              为什么选择 Zebrads
            </div>
            <h2 className="font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-zebra-ink">
              一群斑马，
              <br />
              <span className="relative inline-block">
                覆盖整个草原。
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-zebra-amber/40 -z-0"
                />
              </span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={200}>
            <p className="text-base md:text-lg text-zebra-stone leading-relaxed">
              我们用十年时间打磨出一套面向全球的广告基础设施。无论你是独立开发者还是上市品牌，Zebrads
              都能让你的预算落到每一次真实点击上。
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className="group relative bg-white border border-black/10 p-7 md:p-8 transition-all duration-300 hover:border-zebra-ink hover:-translate-y-1 hover:shadow-hard"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="relative w-12 h-12 bg-zebra-ink text-zebra-bone flex items-center justify-center group-hover:bg-zebra-amber group-hover:text-zebra-ink transition-colors duration-300">
                  <f.icon className="h-6 w-6" strokeWidth={1.75} />
                  <span
                    aria-hidden
                    className="absolute -bottom-1 -right-1 w-12 h-12 border border-zebra-ink/30 -z-10"
                  />
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-zebra-stone uppercase border border-zebra-stone/40 px-2 py-1">
                  {f.tag}
                </span>
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-zebra-ink mb-3">
                {f.title}
              </h3>
              <p className="text-sm md:text-base text-zebra-stone leading-relaxed">
                {f.desc}
              </p>
              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-zebra-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
