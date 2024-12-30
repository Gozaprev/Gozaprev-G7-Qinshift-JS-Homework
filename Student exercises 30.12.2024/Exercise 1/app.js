function storyTeller(who, what, when) {
    const story = `${who} was a really ${what} in the ${when}!`;
    document.getElementById('story').innerText = story;
}

function generateStory() {
    const who = document.getElementById('who').value;
    const what = document.getElementById('what').value;
    const when = document.getElementById('when').value;

    storyTeller(who, what, when);
}

createStoryBtn.addEventListener("click", function () {
    console.log("btn clicked");
    generateStory();
  });
  