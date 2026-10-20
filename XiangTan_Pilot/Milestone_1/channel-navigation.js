(function () {
  'use strict';

  var pages = {
    home: './xiangtan.html',
    course: './course-learning.html',
    growth: './five-education.html',
    teacher: null,
    textbook: './textbook-resources.html',
    ai: './ai-education.html',
    application: './application-services.html',
    topic: './featured-topics.html',
    city: './city-services.html'
  };
  var growthPages = ['five-education.html','moral.html','sport.html','aesthetic.html','labor.html','science.html','safety.html','mental-health.html','after-school.html'];

  function currentFile() {
    var file = decodeURIComponent(window.location.pathname.split('/').pop() || 'xiangtan.html');
    return file.toLowerCase();
  }

  function activeKey() {
    var explicit = document.body && document.body.getAttribute('data-xt-active-nav');
    if (explicit) return explicit;
    var file = currentFile();
    if (file === 'course-learning.html' || file === 'course-teaching.html') return 'course';
    if (growthPages.indexOf(file) !== -1) return 'growth';
    if (file === 'textbook-resources.html') return 'textbook';
    if (file === 'ai-education.html') return 'ai';
    if (file === 'application-services.html') return 'application';
    if (file === 'featured-topics.html') return 'topic';
    if (file === 'city-services.html') return 'city';
    if (window.location.hash === '#教师发展') return 'teacher';
    if (window.location.hash === '#特色专题') return 'topic';
    return 'home';
  }

  function navItem(key, label, href, submenu) {
    var active = activeKey() === key ? ' active' : '';
    var current = active ? ' aria-current="page"' : '';
    var navLabel = href
      ? '<a class="xt-nav-link' + active + '" href="' + href + '"' + current + (submenu ? ' aria-haspopup="true"' : '') + '>' + label + '</a>'
      : '<span class="xt-nav-link xt-nav-link-static' + active + '"' + current + (submenu ? ' aria-haspopup="true"' : '') + ' tabindex="0">' + label + '</span>';
    return '<li class="xt-nav-item xt-nav-item-' + key + (submenu ? ' xt-has-subnav' : '') + '">' +
      navLabel +
      (submenu || '') + '</li>';
  }

  function render() {
    if (document.querySelector('.xt-shared-navigation')) return;
    var courseSubnav = '<nav class="xt-subnav xt-course-subnav" aria-label="课程学习二级导航">' +
      '<a href="./course-teaching.html">教师教学</a>' +
      '<a href="./course-learning.html?type=student">学生自主学习</a>' +
      '</nav>';
    var growthSubnav = '<nav class="xt-subnav xt-growth-subnav" aria-label="五育成长二级导航">' +
      '<a href="./moral.html">德育</a><a href="./sport.html">体育</a>' +
      '<a href="./aesthetic.html">美育</a><a href="./labor.html">劳动教育</a>' +
      '<a href="./science.html">科学教育</a><a href="./safety.html">安全教育</a>' +
      '<a href="./mental-health.html">心理健康</a><a href="./after-school.html">课后服务</a>' +
      '</nav>';
    var topicSubnav = '<nav class="xt-subnav xt-topic-subnav" aria-label="特色专题二级导航">' +
      '<a href="./featured-topics.html#xiangtan-special-detail" target="_blank" rel="noopener">湘潭特色专区</a>' +
      '<a href="./activity-competition.html">活动竞赛专区</a>' +
      '<a href="./featured-topics.html#pilot-zone">试点成果专区</a>' +
      '<a href="./featured-topics.html#dynamic-zone">动态专题</a>' +
      '</nav>';
    var root = document.createElement('div');
    root.className = 'xt-shared-navigation';
    root.innerHTML = '<header class="xt-platform-header"><div class="xt-platform-header-inner">' +
      '<div class="xt-platform-brand"><a class="xt-platform-logo-link" href="./index.html" target="_blank" rel="noopener" aria-label="湖南智慧教育平台"><img class="xt-platform-logo" src="./xiangtan-channel/_nuxt/img/image-login-new.a21550b.png" alt="湖南智慧教育平台"></a>' +
      '<button class="xt-platform-switcher" type="button" aria-label="切换子平台"></button>' +
      '<div class="xt-platform-switch-panel"><ul class="xt-platform-switch-list"><li><a href="./index.html" target="_blank" rel="noopener">湖南智慧教育平台</a></li><li>湖南中小学智慧教育平台</li><li>湖南职业教育智慧教育平台</li><li>湖南高等教育智慧教育平台</li></ul></div>' +
      '<span class="xt-brand-divider"></span><span class="xt-brand-name">湘潭市智慧教育平台</span></div>' +
      '<div class="xt-header-links"><a href="#">登录</a><a href="#">注册</a><button class="xt-accessibility-button" type="button"><i aria-hidden="true"></i><span>无障碍浏览</span></button></div>' +
      '</div></header>' +
      '<nav class="xt-primary-nav" aria-label="主导航"><div class="xt-primary-nav-inner"><ul class="xt-nav-list">' +
      navItem('home','首页',pages.home) +
      navItem('course','课程学习',null,courseSubnav) +
      navItem('growth','五育成长',pages.growth,growthSubnav) +
      navItem('teacher','教师发展',pages.teacher) +
      navItem('textbook','教材资源',pages.textbook) +
      navItem('ai','人工智能',pages.ai) +
      navItem('application','应用服务',pages.application) +
      navItem('topic','特色专题',pages.topic,topicSubnav) +
      navItem('city','市域服务',pages.city) +
      '</ul><button class="xt-ai-search" type="button" aria-label="AI 搜索"><img src="./xiangtan-channel/_nuxt/img/ai-search-button.b0a1e04.svg" alt="AI 搜索"></button></div></nav>';

    var toast = document.createElement('div');
    toast.className = 'xt-nav-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = '模块建设中，敬请期待';
    root.appendChild(toast);

    var standardHeader = document.querySelector('body > .platform-header');
    var standardNav = document.querySelector('body > .primary-nav');
    var legacyHeader = document.querySelector('#__layout .header');
    var legacyNav = document.querySelector('#__layout .tab-home');
    if (standardHeader) {
      standardHeader.parentNode.insertBefore(root, standardHeader);
      standardHeader.style.display = 'none';
      if (standardNav) standardNav.style.display = 'none';
    } else if (legacyHeader) {
      var legacyShell = legacyHeader.closest('.blog-content-box') || legacyHeader.parentNode;
      legacyShell.insertBefore(root, legacyShell.firstChild);
      legacyHeader.style.display = 'none';
      if (legacyNav) legacyNav.style.display = 'none';
    } else {
      document.body.insertBefore(root, document.body.firstChild);
    }
    document.documentElement.classList.add('xt-shared-navigation-ready');

    var teacherLink = root.querySelector('.xt-nav-item-teacher .xt-nav-link');
    if (teacherLink) {
      var toastTimer;
      teacherLink.addEventListener('click', function (event) {
        event.preventDefault();
        toast.classList.add('is-visible');
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
          toast.classList.remove('is-visible');
        }, 2200);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
}());
