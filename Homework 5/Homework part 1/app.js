const animal = {
    name: prompt("Enter the animal's name:"),
    kind: prompt("Enter the animal's kind:"),
    speak: function (message) {
        console.log(`The ${this.kind} named ${this.name.charAt(0).toUpperCase() + this.name.slice(1)} says: '${message}'`);
    }
};

animal.speak("hey bro!!!");
