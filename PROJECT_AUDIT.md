# 项目排查记录

排查日期：2026-10-14（America/Los_Angeles）。

## 结论与验证范围

当前本地项目可以正常开发运行、构建和启动生产预览。类型检查、完整 ESLint 检查和生产构建均通过；开发首页返回 HTTP 200，生产首页返回 HTTP 200。浏览器已验证移动菜单展开/收起、关于我们导航、广告形式切换，以及 390px / 1440px 宽度下无页面横向溢出。检查时没有浏览器警告、运行错误或 hydration 错误。

当前业务是静态营销官网，流程为页面访问 → 查看广告及行业方案 → 联系 Telegram 商务。没有站内登录、开户、数据库、API 或表单提交功能。安装了数据库和存储 SDK 不等于已经接入服务。

## 真实域名与线上部署

Vercel 项目 `zebrads-website`（`prj_YsiAHNTCPKI1YOAKJN9tjIK4XzwG`）返回的域名包含 `www.zebrads.com` 与 `zebrads.com`，最新生产部署为 `READY`，运行时设置为 Node.js 24.x。

`http://127.0.0.1:3001` 是本次排查的本地开发地址，不是生产域名，也不会修改 DNS。本记录是发布前的检查快照，正式发布通过 GitHub main 分支触发 Vercel 生产部署，最终状态应以对应提交的部署记录为准。

联网读取工具能够获取 [www.zebrads.com 官网内容](https://www.zebrads.com/)，但结果标示为两周前抓取；本机直接 HTTPS 请求和内置浏览器访问超时，根域名在联网读取工具中也未成功访问。因此不能把缓存页面或 Vercel 的 READY 状态当作实时端到端可用性验证，尚未确认 DNS、证书及根域名跳转是否正常。

Vercel 连接器读取团队 `f826108853-9605s-projects` 下的详细域名配置返回 403，明确提示当前凭据没有该团队的访问权限；本地也没有 Vercel CLI。进一步核对线上环境变量和详细部署配置需要具有该团队读取权限的连接。不要将此问题视为网站本身返回 403。

## 环境与权限

- 本次本地运行：Node.js 24.19.0 / pnpm 11.25.0；发布配置已统一为 Node.js 24.x / pnpm 11.25.0，避免本地与线上包管理器版本不同。
- 构建和启动需要允许 Node.js 创建子进程并绑定本地端口。沙箱内的第一次 Turbopack 构建因 `Operation not permitted` 失败；授权后使用原生构建流程成功，没有切换替代构建器。
- 依赖查询、下载和安全审计需要官方包仓库网络权限；已使用 `registry.npmjs.org`。
- 本工作区现有依赖使用 `.pnpm-store/v11`。新增依赖若使用默认缓存会出现 `ERR_PNPM_UNEXPECTED_STORE`；本次沿用 `--store-dir .pnpm-store`，没有修改全局 pnpm 配置。
- pnpm 曾阻止 esbuild 的安装脚本，已经针对 esbuild 授权并执行成功，授权保存在 `pnpm-workspace.yaml`。
- 当前业务代码不读取任何自定义环境变量；唯一的环境判断是框架提供的 NODE_ENV。本地没有发现 `.env*` 或 `.vercel` 绑定目录。没有使用模拟密钥、模拟数据库或生产环境变量替代值，也没有为未调用的服务额外索取密钥。
- 页面依赖 `fonts.googleapis.cn` / `fonts.gstatic.cn` 外部字体，以及 `t.me/ZebradsJason` 商务链接。实际字体 CSS 请求成功；没有发送商务消息。

## 已完成修复

- Next.js 16.1.1 → 16.4.0，React / React DOM 19.2.3 → 19.3.0；同步 eslint-config-next，更新 AWS SDK、Drizzle ORM 和有补丁的传递依赖。
- 将 drizzle-kit 移入开发依赖。
- 安装限制脚本改用 pnpm，移除 npx 调用；固定生产使用的 Node.js 主版本和 pnpm 版本，并补齐 workspace 的 packages 字段。
- 修复“关于我们”悬空锚点，将广告预览中无响应的“立即查看”按钮连接至商务入口；补充菜单状态与广告选择状态的无障碍属性。
- robots.txt 不再禁止搜索引擎访问页面所需的 `_next` 和静态资源。
- 增补环境文件与本地 pnpm 缓存的 Git 忽略规则，修正文档中的默认端口和环境说明。
- 禁止 Next.js 自动追加项目规范，保留原有 AGENTS.md。next-env.d.ts 的变化由新版 Next.js 自动生成。

## 安全审计结果与剩余事项

最终生产依赖审计为 **0 条已知漏洞**；初次生产审计为 66 条，其中 3 critical、31 high。此数字是依赖公告匹配结果，不是对业务代码安全的全面保证。

全部依赖最终剩余 3 条，均在开发工具依赖路径：

| 依赖 | 级别 | 状态 |
| --- | --- | --- |
| esbuild（drizzle-kit 的旧 loader 路径） | moderate | 现有上游版本范围仍带入旧版本；没有强制跨版本覆盖 |
| esbuild（开发工具路径） | low | 公告针对 Windows 上的开发服务器；当前为 macOS，兼容范围内仍有旧版本 |
| braces | high | 当前审计公告没有可用补丁；开发工具的 glob/模式解析路径仍依赖该库 |

对应官方公告：[esbuild 开发服务器问题](https://github.com/advisories/GHSA-67mh-4wv8-2f99)、[esbuild Windows 文件读取问题](https://github.com/advisories/GHSA-g7r4-m6w7-qqqr)、[braces 嵌套模式拒绝服务](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)。

另外，ESLint 9 与 Recharts 2 出现维护状态警告，需要后续单独评估主版本升级；本次没有为了消除提示而强制替换组件库。已有 CSP 保留 unsafe-inline / unsafe-eval，图片优化允许任意 HTTPS 来源，后续可依据业务需求收紧。项目暂未提供 sitemap、canonical、分享图片，以及专门的隐私/条款页面；这些不是当前启动阻塞项。

发布前仍需完成生产部署、生产团队权限核对和真实域名的实时访问检查；本地构建成功不代表此次修复已经上线。
