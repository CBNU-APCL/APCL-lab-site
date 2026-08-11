---
layout: default
title: News & Gallery
permalink: /news/
---

<section class="section wrap" style="border-bottom:none; padding-bottom:0;">
  <div class="section-head">
    <span class="section-eyebrow">News &amp; Gallery</span>
    <h2>연구실 소식</h2>
    <p class="section-sub">학회 발표, 수상, 워크숍, MT 등 연구실 소식을 게시판 형태로 모았습니다.</p>
  </div>
</section>

<section class="section wrap">
  <div class="board-toolbar" data-board-toolbar="news">
    <label class="search-field">
      <span>Search</span>
      <input type="search" data-board-search="news" placeholder="제목, 날짜, 내용 검색">
    </label>
    <div class="board-count" data-board-count="news"></div>
  </div>

  <div class="news-board" data-board="news" data-page-size="5">
    <article class="news-item" data-board-item data-search-text="2026.07.01 학회 발표 우수발표논문상 하이브리드 로켓 연소 불안정성">
      <button class="news-summary" type="button" aria-expanded="false">
        <span class="date">2026.07.01</span>
        <span class="news-title">2026 한국추진공학회 하계학술대회 우수발표논문상 수상</span>
        <span class="news-more">View</span>
      </button>
      <div class="news-detail">
        <p>본 연구실 대학원생이 "하이브리드 로켓 연소 불안정성에 관한 실험 연구"로 2026 한국추진공학회 하계학술대회에서 우수발표논문상을 수상했습니다.</p>
        <div class="news-gallery">
          <img src="{{ '/assets/images/news/sample-1.jpg' | relative_url }}" alt="학술대회 발표 사진" onerror="this.style.display='none'">
          <img src="{{ '/assets/images/news/sample-2.jpg' | relative_url }}" alt="시상식 사진" onerror="this.style.display='none'">
        </div>
      </div>
    </article>

    <article class="news-item" data-board-item data-search-text="2026.03.15 신입 대학원생 환영회">
      <button class="news-summary" type="button" aria-expanded="false">
        <span class="date">2026.03.15</span>
        <span class="news-title">2026학년도 신입 대학원생 환영회</span>
        <span class="news-more">View</span>
      </button>
      <div class="news-detail">
        <p>2026학년도 전기 신입 대학원생 2명이 합류했습니다. 연구실 전체 워크숍을 통해 금년도 연구 계획을 공유하는 시간을 가졌습니다.</p>
      </div>
    </article>
  </div>

  <div class="pagination" data-board-pagination="news"></div>
</section>
