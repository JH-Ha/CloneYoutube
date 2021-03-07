//import ActionButton from "./ActionButton.js";

const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener('click', function () {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

const $liThumbsUp = document.querySelector(".actions li.thumbs-up");
const $liThumbsDown = document.querySelector(".actions li.thumbs-down");

const toggleNum = ($target, $opposite) => {
    const $svg = $target.querySelector("svg");

    const $span = $target.querySelector("button span");
    let num = parseInt($span.textContent);

    const $svgOpposite = $opposite.querySelector("svg");

    if ($svg.classList.contains("active")) {
        $span.textContent = num - 1;
    } else {
        //if other side is active, remove active
        if ($svgOpposite.classList.contains("active")) {
            toggleNum($opposite, $target);
        }
        $span.textContent = num + 1;
    }
    $svg.classList.toggle("active");
}

$liThumbsUp.addEventListener("click", () => {
    toggleNum($liThumbsUp, $liThumbsDown);
})
$liThumbsDown.addEventListener("click", () => {
    toggleNum($liThumbsDown, $liThumbsUp);
})

//comment like and dislike
const $commentLiThumbsUp = document.querySelector(".comment-actions li.thumbs-up");
const $commentLiThumbsDown = document.querySelector(".comment-actions li.thumbs-down");

$commentLiThumbsUp.addEventListener("click", () => {
    toggleNum($commentLiThumbsUp, $commentLiThumbsDown);
});
$commentLiThumbsDown.addEventListener("click", () => {
    toggleNum($commentLiThumbsDown, $commentLiThumbsUp);
});