(function initAISearchDemo() {
  const root = document.querySelector('.ai-search-demo');
  if (!root) return;

  const promptEl = root.querySelector('.search-prompt');
  const statusEl = root.querySelector('.search-status');
  const filtersEl = root.querySelector('.search-filters');
  const resultsEl = root.querySelector('.search-results');
  const detailBodyEl = root.querySelector('.search-detail-body');

  const scenarios = [
    {
      prompt: '帮我找美国 TikTok 汽车博主，粉丝量大，适合新能源车品牌合作，优先男性受众。',
      status: 'MATCHED 3 / 48',
      filters: ['市场：美国', '平台：TikTok', '垂类：汽车', '需求：品牌合作'],
      results: [
        { rank: '01', name: 'Daniel Mac', handle: '@itsdanielmac · 豪车采访 / 高净值车主内容', tags: ['14M 粉丝', '美国受众强', '汽车品牌适配高'], score: 96, reason: '受众与汽车消费决策高度相关，适合品牌曝光与讨论制造。' },
        { rank: '02', name: 'Supercar Blondie', handle: '@supercarblondie · 豪车 / 概念车 / 科技感内容', tags: ['20M+ 粉丝', '全球影响力', '高端品牌适配'], score: 93, reason: '适合高端车型发布、技术亮点传播与国际市场声量放大。' },
        { rank: '03', name: 'Vehicle Virgins', handle: '@vehiclevirgins · 性能车评测 / 购车内容', tags: ['车迷纯度高', '转化意图强', '测评合作适配'], score: 89, reason: '内容偏测评导向，适合深度种草和性能卖点传达。' }
      ]
    },
    {
      prompt: '找美国母婴类 TikTok 创作者，预算 1 万美金内，最好能同时做短视频和直播转化。',
      status: 'MATCHED 4 / 63',
      filters: ['市场：美国', '垂类：母婴', '预算：$10K', '目标：直播转化'],
      results: [
        { rank: '01', name: 'Nara Smith', handle: '@naraaziza · 家庭 / 育儿 / 高互动生活方式', tags: ['母婴适配', '家庭消费', '直播潜力'], score: 94, reason: '适合高信任度家庭消费品内容植入与长期品牌合作。' },
        { rank: '02', name: 'Maia Knight', handle: '@maiaknight · 双胞胎育儿 / 高频家庭内容', tags: ['家庭场景强', '互动高', '转化友好'], score: 91, reason: '内容场景天然适合母婴品类展示与实用型种草。' },
        { rank: '03', name: 'Mommyfarmer', handle: '@mommyfarmer · 家庭日常 / 生活方式', tags: ['中产家庭', '生活方式', '品牌融合自然'], score: 88, reason: '适合中高客单母婴、家居与家庭类品牌合作。' }
      ]
    },
    {
      prompt: '帮我筛选美国游戏主播，适合新游冷启动，优先男性 18-34 岁用户，能做短视频切片传播。',
      status: 'MATCHED 3 / 57',
      filters: ['市场：美国', '垂类：游戏', '目标：冷启动', '受众：男性 18-34'],
      results: [
        { rank: '01', name: 'Typical Gamer', handle: '@typicalgamer · 游戏娱乐 / 主播切片内容', tags: ['男性受众', '传播效率高', '新游冷启适配'], score: 95, reason: '适合新游上线初期的高频曝光与短视频切片扩散。' },
        { rank: '02', name: 'Nickmercs', handle: '@nickmercs · 硬核竞技 / 社区影响力强', tags: ['核心玩家', '男性受众强', '社区号召力'], score: 92, reason: '适合竞技类和重度游戏用户心智建立。' },
        { rank: '03', name: 'CouRageJD', handle: '@couRageJD · 娱乐型游戏内容 / 品牌合作成熟', tags: ['品牌经验足', '泛游戏传播', '商业化成熟'], score: 89, reason: '适合兼顾圈层传播与品牌安全性的合作需求。' }
      ]
    }
  ];

  let idx = 0;

  function renderScenario(s) {
    promptEl.textContent = s.prompt;
    statusEl.textContent = s.status;
    filtersEl.innerHTML = s.filters.map(f => `<span>${f}</span>`).join('');
    resultsEl.innerHTML = s.results.map((r, i) => `
      <div class="search-result-card${i === 0 ? ' active' : ''}" data-reason="${r.reason.replace(/"/g, '&quot;')}">
        <div class="search-rank">${r.rank}</div>
        <div class="search-meta">
          <div class="search-name-row">
            <div class="search-name">${r.name}</div>
            <div class="search-score-inline">${r.score}</div>
          </div>
          <div class="search-handle">${r.handle}</div>
          <div class="search-tags">${r.tags.map(t => `<span>${t}</span>`).join('')}</div>
          <div class="search-reason">AI 推荐理由：${r.reason}</div>
        </div>
        <button class="search-action" type="button">查看建议</button>
      </div>
    `).join('');
    detailBodyEl.textContent = `AI 推荐理由：${s.results[0].reason} 下一步建议：发起首轮合作沟通，结合预算与品牌调性生成邀约话术，并同步输出达人优先级列表。`;
  }

  renderScenario(scenarios[idx]);

  root.addEventListener('click', (e) => {
    const action = e.target.closest('.search-action');
    const card = e.target.closest('.search-result-card');
    if (!card) return;
    resultsEl.querySelectorAll('.search-result-card').forEach(el => el.classList.remove('active'));
    card.classList.add('active');
    if (action || card) {
      const reason = card.dataset.reason || '';
      detailBodyEl.textContent = `AI 推荐理由：${reason} 下一步建议：输出合作方式、预算区间、内容形式和执行排期，供运营团队直接推进。`;
    }
  });

  setInterval(() => {
    idx = (idx + 1) % scenarios.length;
    renderScenario(scenarios[idx]);
  }, 4200);
})();
