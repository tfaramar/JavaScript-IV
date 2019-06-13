// CODE here for your Lambda Classes
console.log("---Lambda Classes Roster below---")

//PERSON
class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  };
  speak(){
    return `Hello! My name is ${this.name}, and I am from ${this.location}.`;
  };
};


//STUDENT
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade;
  };
  listsSubjects(){
    return this.favSubjects.forEach(element =>
      console.log(element));
  };
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`
  };
  sprintChallenge(subject){
    return `${this.name} has begun their sprint challenge on ${subject}.`
  };
};

//INSTRUCTOR
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  };
  demo(subject){
    return `Today we are learning about ${subject}!`
  };
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`
  };
};

//PM
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  };
  standUp(slackChannel){
    return `${this.name} announces to ${slackChannel}, @channel standy times!`
  };
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  };
};

//STUDENT OBJECTS
  const isaiah = new Student({
      name: 'Isaiah',
      age: 18,
      location: 'Florida',
      previousBackground: 'High School last month',
      className: 'WEB21',
      favSubjects: [
        'Html',
        'CSS',
        'JavaScript']
  });

  const kevin = new Student({
      name: 'Kevin',
      age: 28,
      location: 'California',
      previousBackground: 'Table Games Dealer',
      className: 'WEB21',
      favSubjects: [
        'Html',
        'CSS',
        'JavaScript']
  });

  const nisa = new Student({
      name: 'Nisa',
      age: 25,
      location: 'Ohio',
      previousBackground: 'Debt Collector',
      className: 'WEB21',
      favSubjects: [
        'Html',
        'CSS',
        'JavaScript']
  });

  const joscelyn = new Student({
      name: 'Joscelyn',
      age: 29,
      location: 'California',
      previousBackground: 'English teacher',
      className: 'WEB21',
      favSubjects: [
        'Computer Science',
        'Philosophy',
        'English']
  });

  //INSTRUCTOR OBJECTS

  const dan = new Instructor({
      name: 'Dan',
      age: 'Infinity',
      location: 'Denver',
      specialty: 'Relentless Debugger',
      favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
      catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
  });

  const josh = new Instructor({
    name: 'Josh',
    age: 'Infinity',
    location: 'Utah',
    specialty: 'Sagacious Explainer',
    favLanguage: 'Javascrip, Python, Java, Ruby',
    catchPhrase: 'Here we go!',
  })

  //PM OBJECTS

  const brandon = new ProjectManager({
      name: 'Brandon',
      age: '34',
      gradClassName: 'WEB18',
      favInstructor: 'Professor Lambda',
      location: 'Maine',
      specialty: 'Redux',
      favLanguage: 'JavaScript, C++, Python.',
      catchPhrase: "You shall not pass!",
  });

  const mary = new ProjectManager({
      name: 'Mary',
      age: '24',
      gradClassName: 'WEB18',
      favInstructor: 'Josh Knell',
      location: 'New York',
      specialty: 'Express, Node.js',
      favLanguage: 'Javascript',
      catchPhrase: "That looks AWESOME",
  });

  const christian = new ProjectManager({
      name: 'Christian',
      age: '32',
      gradClassName: 'WEB18',
      favInstructor: 'Every Instructor in Lambda',
      location: 'Seattle, WA',
      specialty: 'Data Structures, Algorithms',
      favLanguage: 'JavaScript',
      catchPhrase: "Dont forget your daily commit.",
  });

  const pat = new ProjectManager({
      name: 'Pat',
      age: '38',
      gradClassName: 'WEB18',
      favInstructor: 'Brett Madrid',
      location: 'Petaluma, Ca',
      specialty: 'Empathetic to the struggle of Redux',
      favLanguage: 'JavaScript',
      catchPhrase: 'Lets google that together.'
});

  const darren = new ProjectManager({
      name: 'Darren',
      age: '25',
      gradClassName: 'WEB18',
      favInstructor: 'Josh Knell',
      location: 'North Carolina',
      specialty: 'React',
      favLanguage: 'Javascript',
      catchPhrase: 'Gang. Gang.',
  });

  const austin = new ProjectManager({
      name: 'Austin',
      age: '23',
      gradClassName: 'WEB18',
      favInstructor: 'Josh Knell',
      location: 'Somewhere',
      specialty: 'Java',
      favLanguage: 'Java',
      catchPhrase: ":eggplant:",
  });


//TESTS

kevin.listsSubjects();
console.log(nisa.previousBackground);
console.log(isaiah.location);
console.log(joscelyn.PRAssignment('HTML'));
console.log(kevin.sprintChallenge('Javascript Fundamentals'));
console.log(nisa.className);
console.log(isaiah.speak());


console.log(dan.demo('React'));
console.log(dan.grade(joscelyn, 'CSS'));
console.log(josh.specialty);
console.log(josh.speak());

console.log(darren.favInstructor);
console.log(austin.standUp('web21'));
console.log(mary.debugsCode(nisa, 'Javascript'));
console.log(brandon.gradClassName);
console.log(darren.speak());
