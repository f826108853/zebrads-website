import {
  Gamepad2,
  Users,
  Clapperboard,
  ArrowUpRight,
} from 'lucide-react';
import { Reveal } from './reveal';

const solutions = [
  {
    icon: Gamepad2,
    title: '游戏',
    desc: '从休闲小游戏到中重度手游，全周期投放策略——冷启动激活、留存回捞与长线 LTV 一站打通。',
    metric: 'CPI 下降 38%',
  },
  {
    icon: Users,
    title: '社交',
    desc: '基于兴趣图谱与行为聚类的精准触达，帮社交平台跑通拉新、匹配与内容分发的完整增长闭环。',
    metric: '次留 +22%',
  },
  {
    icon: Clapperboard,
    title: '短剧',
    desc: '短剧场景专属素材模板 + 智能出价，抓住用户前 3 秒的注意力，把点击稳稳转成付费与追更。',
    metric: 'ROAS 平均 3.9',
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative bg-zebra-mist py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-1/3 stripes-bg-soft pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <Reveal className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-zebra-ink text-zebra-bone text-xs font-semibold tracking-widest uppercase mb-5">
              行业解决方案
            </div>
            <h2 className="font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-zebra-ink">
              每一个行业，
              <br />
              都值得专属的奔跑路线。
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <p className="text-base md:text-lg text-zebra-stone leading-relaxed">
              我们与超过 3 万个广告主合作的经验沉淀，凝结成 3 套垂直行业的开箱即用策略包。选择你的行业，剩下的交给 Zebrads。
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zebra-ink/15">
          {solutions.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="group relative bg-white border-r border-b border-zebra-ink/15 p-7 md:p-9 hover:bg-zebra-ink hover:text-zebra-bone transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 border-2 border-current flex items-center justify-center group-hover:bg-zebra-amber group-hover:text-zebra-ink group-hover:border-zebra-amber transition-colors duration-500">
                  <s.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <ArrowUpRight
                  className="h-6 w-6 opacity-30 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-bold text-xl md:text-2xl mb-3">{s.title}</h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="font-display text-sm font-semibold text-zebra-amber">
                {s.metric}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
