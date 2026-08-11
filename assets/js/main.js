document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  initMemberTabs();
  initNewsBoard();
  initPublicationTabs();
  initPaginatedBoards();
});

function initMemberTabs() {
  var tabs = document.querySelectorAll("[data-member-tab]");
  var panels = document.querySelectorAll("[data-member-panel]");
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-member-tab");
      tabs.forEach(function (item) { item.classList.remove("active"); });
      panels.forEach(function (panel) {
        panel.classList.toggle("active", panel.getAttribute("data-member-panel") === target);
      });
      tab.classList.add("active");
    });
  });
}

function initNewsBoard() {
  document.querySelectorAll(".news-summary").forEach(function (summary) {
    summary.addEventListener("click", function () {
      var item = summary.closest(".news-item");
      if (!item) return;
      var isOpen = item.classList.toggle("open");
      summary.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
}

function initPublicationTabs() {
  var tabs = document.querySelectorAll(".pub-tab");
  var board = document.querySelector('[data-board="publications"]');
  if (!tabs.length || !board) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (item) { item.classList.remove("active"); });
      tab.classList.add("active");
      board.setAttribute("data-active-category", tab.getAttribute("data-target") || "all");
      board.dispatchEvent(new CustomEvent("board:filter"));
    });
  });
}

function initPaginatedBoards() {
  document.querySelectorAll("[data-board]").forEach(function (board) {
    var boardName = board.getAttribute("data-board");
    var items = Array.prototype.slice.call(board.querySelectorAll("[data-board-item]"));
    var pageSize = Number(board.getAttribute("data-page-size")) || 8;
    var search = document.querySelector('[data-board-search="' + boardName + '"]');
    var pagination = document.querySelector('[data-board-pagination="' + boardName + '"]');
    var count = document.querySelector('[data-board-count="' + boardName + '"]');
    var currentPage = 1;

    function normalize(value) {
      return (value || "").toString().toLowerCase().trim();
    }

    function getFilteredItems() {
      var query = normalize(search ? search.value : "");
      var category = board.getAttribute("data-active-category") || "all";

      return items.filter(function (item) {
        var text = normalize(item.getAttribute("data-search-text") || item.textContent);
        var matchesQuery = !query || text.indexOf(query) !== -1;
        var itemCategory = item.getAttribute("data-pub-category");
        var matchesCategory = category === "all" || !itemCategory || itemCategory === category;
        return matchesQuery && matchesCategory;
      });
    }

    function setGroupVisibility() {
      board.querySelectorAll(".pub-group").forEach(function (group) {
        var visibleItems = group.querySelectorAll('[data-board-item]:not([hidden])');
        group.classList.toggle("is-empty", visibleItems.length === 0);
      });
    }

    function renderPagination(totalPages) {
      if (!pagination) return;
      pagination.innerHTML = "";
      if (totalPages <= 1) return;

      for (var i = 1; i <= totalPages; i += 1) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "page-btn" + (i === currentPage ? " active" : "");
        button.textContent = i;
        button.setAttribute("aria-label", "Page " + i);
        button.addEventListener("click", function () {
          currentPage = Number(this.textContent);
          render();
        });
        pagination.appendChild(button);
      }
    }

    function render() {
      var filtered = getFilteredItems();
      var totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
      if (currentPage > totalPages) currentPage = totalPages;

      var start = (currentPage - 1) * pageSize;
      var end = start + pageSize;
      items.forEach(function (item) { item.hidden = true; });
      filtered.slice(start, end).forEach(function (item) { item.hidden = false; });

      if (count) {
        count.textContent = filtered.length ? filtered.length + " items" : "No results";
      }

      setGroupVisibility();
      renderPagination(totalPages);
    }

    if (search) {
      search.addEventListener("input", function () {
        currentPage = 1;
        render();
      });
    }

    board.addEventListener("board:filter", function () {
      currentPage = 1;
      render();
    });

    render();
  });
}
