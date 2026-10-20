(function () {
  'use strict';

  var configs = {
    sport: {
      title:'体育', tagline:'强健体魄，磨炼意志，享受运动乐趣', icon:'sport.389ecf7.png', banner:'banner-sport.png', accent:'#34a874', dark:'#23805a', soft:'#e8f7ef', heroStart:'#effbf4', heroEnd:'#d5f3e3',
      categories:[
        ['health','体育与健康',['科学热身与运动准备','运动后的整理与恢复','体质健康测试指导','青少年科学健身方法','营养与运动健康','预防运动损伤']],
        ['ball','球类运动',['校园足球基础训练','篮球运球与传球','排球垫球入门','乒乓球正反手练习','羽毛球步法训练','团队战术与协作']],
        ['track','田径体操',['短跑起跑技术','耐久跑节奏训练','立定跳远动作要领','趣味田径练习','广播体操规范动作','核心力量基础训练']],
        ['traditional','民族传统体育',['校园武术基础','跳绳进阶训练','踢毽子技巧','传统体育游戏','健身气功体验','龙狮运动赏析']],
        ['events','校园赛事',['班级运动会组织','阳光体育大课间','校园足球联赛','趣味运动挑战赛','运动安全与裁判规则','体育精神与团队合作']]
      ]
    },
    aesthetic: {
      title:'美育', tagline:'发现美、感受美、表现美、创造美', icon:'aesthetic-education.3b7f512.png', banner:'banner-aesthetic.png', accent:'#9b6ad8', dark:'#7549ae', soft:'#f2eafb', heroStart:'#faf5ff', heroEnd:'#ecddfb',
      categories:[
        ['music','音乐艺术',['认识民族乐器','合唱基础训练','校园歌曲赏析','音乐节奏与律动','湖湘民歌欣赏','音乐创编小课堂']],
        ['art','美术创作',['线条与色彩的表达','中国画基础体验','湘潭城市印象绘画','版画制作入门','校园海报设计','生活中的创意美术']],
        ['dance','舞蹈形体',['校园舞蹈基础','民族舞蹈赏析','少儿形体训练','节奏与身体表达','舞蹈作品排练','舞台表演礼仪']],
        ['drama','戏剧影视',['课本剧表演入门','儿童戏剧创编','镜头语言初体验','校园微电影制作','配音与语言表达','经典影视作品赏析']],
        ['heritage','传统艺术',['湘绣艺术欣赏','剪纸技艺体验','书法基本笔画','非遗文化进校园','传统纹样设计','民间工艺实践']]
      ]
    },
    labor: {
      title:'劳动教育', tagline:'崇尚劳动、尊重劳动，在实践中收获成长', icon:'labor-education.799e686.png', banner:'banner-labor.png', accent:'#6cae4e', dark:'#4f8736', soft:'#edf8e8', heroStart:'#f4fcef', heroEnd:'#e0f2d7',
      categories:[
        ['daily','日常生活劳动',['整理我的学习空间','衣物清洗与收纳','健康早餐我来做','家庭清洁小能手','生活工具安全使用','校园环境共同维护']],
        ['production','生产劳动',['认识现代农业','校园种植实践','传统木工初体验','手工制作与改良','智能制造探秘','从种子到收获']],
        ['service','服务性劳动',['社区志愿服务','校园公益岗位体验','敬老爱老实践活动','垃圾分类宣传行动','图书整理与服务','公共空间文明引导']],
        ['skills','劳动技能',['常用绳结学习','简单缝纫技巧','家电使用与维护','烹饪安全基础','创意手工制作','应急维修小知识']],
        ['spirit','劳模精神',['走近劳动模范','工匠精神主题课','平凡岗位的坚守','奋斗创造幸福','新时代劳动者故事','我的职业体验日']]
      ]
    },
    science: {
      title:'科学教育', tagline:'保持好奇、勇于探究，让科学照亮成长', icon:'ai-card-learn.png', banner:'banner-science.png', accent:'#2a9bc3', dark:'#197b9e', soft:'#e6f5fa', heroStart:'#effaff', heroEnd:'#d7f0f9',
      categories:[
        ['starter','科学启蒙',['身边的力与运动','有趣的声音世界','光和影子的秘密','植物怎样生长','天气变化观察记','水的奇妙旅行']],
        ['experiment','实验探究',['设计一个公平实验','自制简易净水器','空气占据空间吗','电路连接挑战','显微镜下的世界','物质变化小实验']],
        ['innovation','科创实践',['校园节能方案设计','创意结构搭建','桥梁承重挑战','智能小车初体验','废旧材料再创造','青少年科创项目']],
        ['space','航空航天',['认识太阳系','火箭为什么能升空','中国空间站课堂','月球探索之旅','卫星与我们的生活','航模制作与试飞']],
        ['digital','信息科技',['计算思维入门','图形化编程体验','认识人工智能','数据与信息表达','网络世界的规则','数字作品创作']]
      ]
    },
    safety: {
      title:'安全教育', tagline:'珍爱生命、守护成长，提升风险防范能力', icon:'safety-education.9183a95.png', banner:'banner-safety.png', accent:'#4b8fe8', dark:'#2f6fbe', soft:'#eaf3ff', heroStart:'#f2f8ff', heroEnd:'#dceaff',
      categories:[
        ['campus','校园安全',['课间活动安全提示','实验室安全规范','体育活动风险防范','预防校园欺凌','校园应急疏散','食品卫生与健康']],
        ['traffic','交通安全',['文明步行安全课','安全骑行要点','乘坐公共交通须知','认识交通标志','校车安全课堂','恶劣天气出行指南']],
        ['fire','消防安全',['认识常见消防设施','家庭火灾隐患排查','正确拨打119','火场疏散与逃生','校园消防演练','森林防火知识']],
        ['water','防溺水教育',['识别危险水域','防溺水六不准','同伴落水科学施救','游泳前的安全准备','汛期安全防护','水上活动自护指南']],
        ['network','网络安全',['守护个人信息','识别网络诈骗','健康文明上网','网络交友安全','防范网络沉迷','数字足迹与责任']]
      ]
    },
    mental: {
      title:'心理健康', tagline:'关照心灵、悦纳自我，培养积极健康心态', icon:'icon_mentalhealth.fa8c0bd.png', banner:'banner-mental-health.png', accent:'#d86fa3', dark:'#ad4f7d', soft:'#faeaf2', heroStart:'#fff6fb', heroEnd:'#f7dfeb',
      categories:[
        ['emotion','情绪管理',['认识我的情绪','做情绪的小主人','焦虑时如何放松','把坏心情说出来','积极情绪的力量','情绪急救小方法']],
        ['relation','人际交往',['学会倾听与表达','同伴冲突巧化解','建立健康的友谊','拒绝也可以很温柔','团队合作与信任','校园沟通小技巧']],
        ['study','学习心理',['找到学习的动力','制定可执行的计划','面对考试更从容','提升专注力','正确看待成绩','培养成长型思维']],
        ['youth','青春期成长',['认识青春期变化','接纳独特的自己','身体界限与保护','青春期同伴交往','自尊自信的建立','为成长做好准备']],
        ['family','家庭沟通',['与父母好好说话','理解家庭中的差异','亲子共同成长','家庭规则一起定','表达爱与感谢','寻求帮助并不难']]
      ]
    },
    afterSchool: {
      title:'课后服务', tagline:'丰富课后生活，支持兴趣发展与全面成长', icon:'after-school-services.fb6572b.png', banner:'banner-after-school.png', accent:'#db963b', dark:'#ad6f20', soft:'#fff3df', heroStart:'#fffaf2', heroEnd:'#ffebcf',
      categories:[
        ['reading','阅读活动',['整本书阅读指导','好书分享表达课','校园朗读者','经典名著导读','绘本创作工坊','图书馆探究任务']],
        ['sport','体育活动',['趣味跳绳社团','校园篮球兴趣班','足球游戏与训练','体能闯关活动','传统体育游戏','活力大课间设计']],
        ['art','艺术活动',['创意绘画社团','合唱与声乐训练','校园舞蹈排练','书法兴趣课堂','手工艺术工坊','课本剧社团']],
        ['science','科学实践',['趣味科学实验','创客搭建活动','机器人入门','自然观察小组','航空模型制作','科普阅读与分享']],
        ['clubs','社团活动',['校园主持人训练','棋类益智社团','传统文化体验','志愿服务小队','摄影与短视频','校园广播站']]
      ]
    }
  };

  var key = document.body.getAttribute('data-resource-page');
  var config = configs[key];
  if (!config) return;

  var root = './xiangtan-channel/_nuxt/img/';
  var categoryNav = document.getElementById('resource-category-nav');
  var list = document.getElementById('resource-list');
  var count = document.getElementById('resource-count');
  var searchForm = document.getElementById('resource-search-form');
  var searchInput = document.getElementById('resource-search-input');
  var pagination = document.getElementById('resource-pagination');
  var activeCategory = config.categories[0][0];
  var activeSort = 'default';
  var searchQuery = '';
  var currentPage = 1;
  var pageSize = 8;
  var resourceIcons = {
    institution:root + 'resource-institution.svg',
    view:root + 'resource-view.svg',
    like:root + 'resource-like.svg'
  };
  var courseCovers = [
    'resource-course-cover-01.png',
    'resource-course-cover-02.png',
    'resource-course-cover-03.png',
    'resource-course-cover-04.png',
    'resource-course-cover-05.png'
  ];

  document.documentElement.style.setProperty('--accent',config.accent);
  document.documentElement.style.setProperty('--accent-dark',config.dark);
  document.documentElement.style.setProperty('--accent-soft',config.soft);
  document.documentElement.style.setProperty('--hero-start',config.heroStart);
  document.documentElement.style.setProperty('--hero-end',config.heroEnd);
  document.querySelector('.resource-hero').innerHTML = '<img class="resource-banner" src="' + root + config.banner + '" alt="' + config.title + '">';
  document.querySelector('.resource-page').setAttribute('aria-label',config.title + '资源列表');

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g,function (character) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character];
    });
  }

  function iconImage(name) {
    return '<img class="resource-meta-icon" src="' + resourceIcons[name] + '" alt="" aria-hidden="true">';
  }

  function getCategory() {
    return config.categories.filter(function (category) { return category[0] === activeCategory; })[0];
  }

  function makeItems(category) {
    return category[2].map(function (title,index) {
      return {
        title:title,
        cover:courseCovers[index % courseCovers.length],
        org:index % 3 === 0 ? '湘潭市教育局' : index % 3 === 1 ? '湘潭市智慧教育平台' : '湘潭市教育科学研究院',
        views:1186 + index * 637 + category[1].length * 53,
        likes:28 + index * 17,
        updated:category[2].length - index
      };
    });
  }

  function renderCategories() {
    categoryNav.innerHTML = config.categories.map(function (category) {
      return '<button class="resource-category' + (category[0] === activeCategory ? ' active' : '') + '" type="button" data-category="' + escapeHtml(category[0]) + '"><span>' + escapeHtml(category[1]) + '</span></button>';
    }).join('');
  }

  function renderPagination(total) {
    var pages = Math.max(1,Math.ceil(total / pageSize));
    if (currentPage > pages) currentPage = pages;
    var html = '<button class="resource-page-button" type="button" data-page="prev"' + (currentPage === 1 ? ' disabled' : '') + ' aria-label="上一页">‹</button>';
    for (var page=1; page<=pages; page+=1) html += '<button class="resource-page-button' + (page === currentPage ? ' active' : '') + '" type="button" data-page="' + page + '">' + page + '</button>';
    html += '<button class="resource-page-button" type="button" data-page="next"' + (currentPage === pages ? ' disabled' : '') + ' aria-label="下一页">›</button>';
    pagination.innerHTML = html;
  }

  function renderCards() {
    var category = getCategory();
    var items = makeItems(category);
    if (searchQuery) items = items.filter(function (item) { return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 || item.org.indexOf(searchQuery) !== -1; });
    if (activeSort === 'updated') items.sort(function (a,b) { return b.updated - a.updated; });
    if (activeSort === 'views-asc') items.sort(function (a,b) { return a.views - b.views; });
    if (activeSort === 'views-desc') items.sort(function (a,b) { return b.views - a.views; });
    count.textContent = items.length;
    renderPagination(items.length);
    var start = (currentPage - 1) * pageSize;
    items = items.slice(start,start + pageSize);
    if (!items.length) {
      list.innerHTML = '<div class="resource-empty">未找到相关资源，请更换关键词后重试。</div>';
      return;
    }
    list.innerHTML = items.map(function (item) {
      var summary = '围绕“' + item.title + '”开展专题学习，通过知识讲解与实践体验提升相关素养。';
      return '<article class="resource-card" tabindex="0"><div class="resource-cover"><img class="resource-cover-image" src="' + root + escapeHtml(item.cover) + '" alt="' + escapeHtml(item.title) + '"></div><div class="resource-card-body"><h2 class="resource-card-title">' + escapeHtml(item.title) + '</h2><p class="resource-card-summary">' + escapeHtml(summary) + '</p><p class="resource-card-org" title="' + escapeHtml(item.org) + '">' + iconImage('institution') + '<span>' + escapeHtml(item.org) + '</span></p><div class="resource-card-stats"><span class="resource-card-stat resource-card-view">' + iconImage('view') + '<span>' + item.views + '</span></span><span class="resource-card-stat resource-card-like">' + iconImage('like') + '<span>' + item.likes + '</span></span></div></div></article>';
    }).join('');
  }

  categoryNav.addEventListener('click',function (event) {
    var button = event.target.closest('.resource-category');
    if (!button) return;
    activeCategory = button.getAttribute('data-category');
    activeSort = 'default';
    searchQuery = '';
    currentPage = 1;
    searchInput.value = '';
    document.querySelectorAll('.resource-sort button').forEach(function (item) { item.classList.toggle('active',item.getAttribute('data-sort') === activeSort); });
    renderCategories();
    renderCards();
  });

  document.querySelector('.resource-sort').addEventListener('click',function (event) {
    var button = event.target.closest('button[data-sort]');
    if (!button) return;
    activeSort = button.getAttribute('data-sort');
    currentPage = 1;
    document.querySelectorAll('.resource-sort button').forEach(function (item) { item.classList.toggle('active',item === button); });
    renderCards();
  });

  searchForm.addEventListener('submit',function (event) {
    event.preventDefault();
    searchQuery = searchInput.value.trim();
    currentPage = 1;
    renderCards();
  });

  pagination.addEventListener('click',function (event) {
    var button = event.target.closest('button[data-page]');
    if (!button || button.disabled) return;
    var value = button.getAttribute('data-page');
    currentPage = value === 'prev' ? currentPage - 1 : value === 'next' ? currentPage + 1 : Number(value);
    renderCards();
    document.querySelector('.resource-toolbar').scrollIntoView({behavior:'smooth',block:'start'});
  });

  renderCategories();
  renderCards();
}());
