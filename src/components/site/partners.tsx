import { Reveal } from './reveal';

// 12 个虚构合作伙伴，用斑马风格的字母组合表示
const partners = [
  { name: 'Nimbus', mark: 'NB' },
  { name: 'Aurora', mark: 'AU' },
  { name: 'Pixelio', mark: 'PX' },
  { name: 'OrbitOne', mark: 'O₁' },
  { name: 'Vantage', mark: 'VG' },
  { name: 'Bolt', mark: '⚡B' },
  { name: 'Magma', mark: 'MG' },
  { name: 'Caelum', mark: 'CL' },
  { name: 'Tundra', mark: 'TN' },
  { name: 'Helio', mark: 'HE' },
  { name: 'Quark', mark: 'QK' },
  { name: 'Mirage', mark: 'MI' },
  { name: 'Vertex', mark: 'VX' },
  { name: 'Cobalt', mark: 'CB' },
  { name: 'Aether', mark: 'AE' },
  { name: 'Lumen', mark: 'LM' },
];

export function Partners() {
  return (
    <section className="relative bg-zebra-ink text-zebra-bone py-20 md:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 stripes-bg-light opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 mb-10 md:mb-12">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-block px-3 py-1 border border-zebra-bone/30 text-xs font-semibold tracking-widest uppercase mb-4">
              合作伙伴
            </div>
            <h2 className="font-black text-2xl md:text-4xl leading-tight tracking-tight">
              与全球 3 万 + 优秀团队
              <br className="hidden md:block" />
              共同奔跑。
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zebra-bone/65 leading-relaxed">
            从独立开发者到上市公司，从游戏厂商到金融机构，Zebrads 与不同规模的伙伴一起跨越增长拐点。
          </p>
        </Reveal>
      </div>

      {/* 跑马灯 */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-zebra-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-zebra-ink to-transparent z-10 pointer-events-none" />

        <div className="flex marquee w-max">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 w-44 md:w-52 h-20 md:h-24 mx-3 border border-zebra-bone/15 hover:border-zebra-amber/80 transition-colors flex items-center justify-center gap-3 group"
            >
              <span className="font-display font-black text-2xl md:text-3xl text-zebra-bone/70 group-hover:text-zebra-amber transition-colors">
                {p.mark}
              </span>
              <span className="font-semibold text-sm md:text-base text-zebra-bone/60 group-hover:text-zebra-bone transition-colors">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 反向跑马灯 */}
      <div className="relative mt-4 md:mt-6 rotate-0 [transform:rotateY(180deg)]">
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-zebra-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-zebra-ink to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-slow w-max">
          {[...partners.slice().reverse(), ...partners.slice().reverse()].map(
            (p, i) => (
              <div
                key={`r-${p.name}-${i}`}
                className="shrink-0 w-44 md:w-52 h-20 md:h-24 mx-3 border border-zebra-bone/15 hover:border-zebra-amber/80 transition-colors flex items-center justify-center gap-3 group [transform:rotateY(180deg)]"
              >
                <span className="font-display font-black text-2xl md:text-3xl text-zebra-bone/70 group-hover:text-zebra-amber transition-colors">
                  {p.mark}
                </span>
                <span className="font-semibold text-sm md:text-base text-zebra-bone/60 group-hover:text-zebra-bone transition-colors">
                  {p.name}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
