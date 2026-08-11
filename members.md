---
layout: default
title: Members
permalink: /members/
---

<section class="section wrap" style="border-bottom:none; padding-bottom:0;">
  <div class="section-head">
    <span class="section-eyebrow">Members</span>
    <h2>구성원</h2>
    <p class="section-sub">구성원 정보는 <code>_data/members.yml</code> 파일에서 관리됩니다.</p>
  </div>
</section>

<section class="section wrap">
  <div class="member-tabs" role="tablist" aria-label="Members categories">
    <button class="member-tab active" type="button" data-member-tab="professor">교수</button>
    <button class="member-tab" type="button" data-member-tab="students">재학생</button>
    <button class="member-tab" type="button" data-member-tab="alumni">졸업생</button>
  </div>

  <div class="member-panel active" data-member-panel="professor">
    <div class="member-group-title">교수 / Professor</div>
    {% assign p = site.data.members.professor %}
    <div class="prof-card">
      <img class="member-photo" src="{{ p.photo | relative_url }}" alt="{{ p.name_kr }} 교수 사진" onerror="this.style.opacity=0">
      <div>
        <h3>{{ p.name_kr }} <span class="en">({{ p.name_en }})</span></h3>
        <div class="role">{{ p.position }}</div>
        <div class="email"><a href="mailto:{{ p.email }}">{{ p.email }}</a></div>
        <p class="bio">{{ p.bio }}</p>
      </div>
    </div>
  </div>

  <div class="member-panel" data-member-panel="students">
    {% if site.data.members.phd_students and site.data.members.phd_students.size > 0 %}
    <div class="member-group-title">박사과정 / PhD Students</div>
    <div class="member-grid">
      {% for m in site.data.members.phd_students %}
      <div class="member-card">
        <img class="member-photo" src="{{ m.photo | relative_url }}" alt="{{ m.name_kr }} 사진" onerror="this.style.opacity=0">
        <h3>{{ m.name_kr }}</h3>
        <div class="en">{{ m.name_en }}</div>
        <div class="role">{{ m.year }}</div>
        <div class="email"><a href="mailto:{{ m.email }}">{{ m.email }}</a></div>
      </div>
      {% endfor %}
    </div>
    {% endif %}

    {% if site.data.members.ms_students and site.data.members.ms_students.size > 0 %}
    <div class="member-group-title">석사과정 / MS Students</div>
    <div class="member-grid">
      {% for m in site.data.members.ms_students %}
      <div class="member-card">
        <img class="member-photo" src="{{ m.photo | relative_url }}" alt="{{ m.name_kr }} 사진" onerror="this.style.opacity=0">
        <h3>{{ m.name_kr }}</h3>
        <div class="en">{{ m.name_en }}</div>
        <div class="role">{{ m.year }}</div>
        <div class="email"><a href="mailto:{{ m.email }}">{{ m.email }}</a></div>
      </div>
      {% endfor %}
    </div>
    {% endif %}
  </div>

  <div class="member-panel" data-member-panel="alumni">
    {% if site.data.members.alumni and site.data.members.alumni.size > 0 %}
    <div class="member-group-title">졸업생 / Alumni</div>
    <ul class="pub-list">
      {% for a in site.data.members.alumni %}
      <li style="grid-template-columns: 1fr;">
        <div>
          <strong>{{ a.name_kr }}</strong> · {{ a.degree }}
          {% if a.current %}<span class="pub-meta">현재: {{ a.current }}</span>{% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
    {% endif %}
  </div>
</section>
