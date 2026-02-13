const questionCardBookmark = document.querySelector('[data-js="quizcard__bookmark"]');

questionCardBookmark.addEventListener("click", (event) => {
   const bookmark = event.target.closest('[data-js="quizcard__bookmark"]');

   console.log(bookmark.dataset.bookmarked);
   if (bookmark.dataset.bookmarked === "false") {
      bookmark.classList.add("bookmarked");
      bookmark.dataset.bookmarked = true;
   } else {
      bookmark.classList.remove("bookmarked");
      bookmark.dataset.bookmarked = false;
   }
});
