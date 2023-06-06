function debounce(func, d) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(func, d);
  };
}

function fetchSearchResults() {
  const search = document.getElementById("searchInput").value;
  document.getElementById(
    "searchResults"
  ).textContent = `searching results : ${search}`;
}

const debouncedSearch = debounce(fetchSearchResults, 500);

document.getElementById("searchInput");
document.addEventListener("input", debouncedSearch);
