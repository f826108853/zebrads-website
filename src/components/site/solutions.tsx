import {
  Wrench,
  AppWindow,
  UserPlus,
  ShoppingBag,
  Smartphone,
  Banknote,
  ArrowUpRight,
} from 'lucide-react';
import { Reveal } from './reveal';

const solutions = [
  {
    icon: Wrench,
    title: '移动工具类应用',
    desc: '从清理大师到 VPN，工具类 App 的下载与激活全链路优化方案。',
    metric: '装机成本 ↓42%',
  },
  {
    icon: AppWindow,
    title: '软件',
    desc: '面向 SaaS、桌面软件的多触点投放策略，覆盖试用、付费、续费场景。',
    metric: '试用转化 ↑3.2×',
  },
  {
    icon: UserPlus,
    title: '潜在客户线索',
    desc: '问卷广告 + 表单深度链接，定向收集高意向 Leads，自动同步至 CRM。',
    metric: 'CPL 行业最低区间',
  },
  {
    icon: ShoppingBag,
    title: '电商',
    desc: '商品 Feed 自动生成素材，结合受众画像与购物意图模型，复购更稳。',
    metric: 'ROAS 平均 4.6',
  },
  {
    icon: Smartphone,
    title: '移动 App',
    desc: '从冷启动激活到长线 LTV，全周期投放策略，配合归因平台一键打通。',
    metric: '次留 +18%',
  },
  {
    icon: Banknote,
    title: '金融',
    desc: '合规优先的金融行业方案，从信用卡、借贷到投资理财，触达高净值人群。',
    metric: '注册成本可控',
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
              我们与超过 3 万个广告主合作的经验沉淀，凝结成 6 套垂直行业的开箱即用策略包。选择你的行业，剩下的交给 Zebrads。
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
