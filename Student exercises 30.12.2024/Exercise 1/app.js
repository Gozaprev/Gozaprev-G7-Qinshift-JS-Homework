function storyTeller(who, what, when) {
    const story = `${who} was a really ${what} in the ${when}!`;
    document.getElementById('story').innerText = story;

}

function generateStory() {
    const who = document.getElementById('who').value;
    const what = document.getElementById('what').value;
    const when = document.getElementById('when').value;

    if (!who || !what || !when) {
        alert("Please fill in all fields to generate a story.");
        return;
    }

    storyTeller(who, what, when);
}

// createStoryBtn.addEventListener("click", function () {
//     const btn = document.getElementById('createStoryBtn');
//     console.log("btn clicked");
//     generateStory();
// });

const createStoryBtn = document.getElementById('createStoryBtn');
createStoryBtn.addEventListener("click", function () {
    console.log("Button clicked");
    generateStory();
});
