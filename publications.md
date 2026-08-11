---
layout: default
title: Publications
permalink: /publications/
---

<section class="section wrap" style="border-bottom:none; padding-bottom:0;">
  <div class="section-head">
    <span class="section-eyebrow">Publications</span>
    <h2>연구 실적</h2>
    <p class="section-sub">논문/특허/학술대회 목록은 <code>_data/publications.yml</code> 파일에서 관리됩니다.</p>
  </div>
</section>

<section class="section wrap">
  <div class="pub-tabs">
    <button class="pub-tab active" type="button" data-target="all">전체</button>
    <button class="pub-tab" type="button" data-target="domestic">국내논문</button>
    <button class="pub-tab" type="button" data-target="international">국외논문</button>
    <button class="pub-tab" type="button" data-target="patents">특허</button>
    <button class="pub-tab" type="button" data-target="conferences">학술대회</button>
  </div>

  <div class="board-toolbar" data-board-toolbar="publications">
    <label class="search-field">
      <span>Search</span>
      <input type="search" data-board-search="publications" placeholder="제목, 저자, 연도, 학술지 검색">
    </label>
    <div class="board-count" data-board-count="publications"></div>
  </div>

  <div class="publication-board" data-board="publications" data-page-size="8">
    <div class="pub-group" id="domestic">
      <h3>국내논문</h3>
      <ul class="pub-list">
        {% for pub in site.data.publications.domestic %}
        <li data-board-item data-pub-category="domestic" data-search-text="{{ pub.year }} {{ pub.title | escape }} {{ pub.authors | escape }} {{ pub.venue | escape }}">
          <div class="pub-year">{{ pub.year }}</div>
          <div>
            <div class="pub-title">{{ pub.title }}</div>
            <div class="pub-meta">{{ pub.authors }} · {{ pub.venue }}</div>
          </div>
        </li>
        {% endfor %}
      </ul>
    </div>

    <div class="pub-group" id="international">
      <h3>국외논문</h3>
      <ul class="pub-list">
        {% for pub in site.data.publications.international %}
        <li data-board-item data-pub-category="international" data-search-text="{{ pub.year }} {{ pub.title | escape }} {{ pub.authors | escape }} {{ pub.venue | escape }}">
          <div class="pub-year">{{ pub.year }}</div>
          <div>
            <div class="pub-title">{{ pub.title }}</div>
            <div class="pub-meta">{{ pub.authors }} · {{ pub.venue }}</div>
          </div>
        </li>
        {% endfor %}
      </ul>
    </div>

    <div class="pub-group" id="patents">
      <h3>특허</h3>
      <ul class="pub-list">
        {% for pub in site.data.publications.patents %}
        <li data-board-item data-pub-category="patents" data-search-text="{{ pub.year }} {{ pub.title | escape }} {{ pub.inventors | escape }} {{ pub.number | escape }}">
          <div class="pub-year">{{ pub.year }}</div>
          <div>
            <div class="pub-title">{{ pub.title }}</div>
            <div class="pub-meta">{{ pub.inventors }} · {{ pub.number }}</div>
          </div>
        </li>
        {% endfor %}
      </ul>
    </div>

    <div class="pub-group" id="conferences">
      <h3>학술대회</h3>
      <ul class="pub-list">
        {% for pub in site.data.publications.conferences %}
        <li data-board-item data-pub-category="conferences" data-search-text="{{ pub.year }} {{ pub.title | escape }} {{ pub.authors | escape }} {{ pub.venue | escape }}">
          <div class="pub-year">{{ pub.year }}</div>
          <div>
            <div class="pub-title">{{ pub.title }}</div>
            <div class="pub-meta">{{ pub.authors }} · {{ pub.venue }}</div>
          </div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div class="pagination" data-board-pagination="publications"></div>
</section>
