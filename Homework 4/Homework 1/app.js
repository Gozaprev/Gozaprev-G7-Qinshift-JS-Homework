function tellStory(arr) {
    
    let [name, mood, activity] = arr;

    
    let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

   
    console.log(story);
    return story;
}

// Example usage:
let storyArray = ["Alice", "happy", "reading"];
tellStory(storyArray);