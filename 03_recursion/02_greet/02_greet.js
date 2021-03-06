// Recursion - function calls itself; used when it makes the solution clearer.

function greet(name) {
  console.log("hello, " + name + "!")
  greet2(name)
  console.log("getting ready to say bye...")
  bye()
}

function greet2(name) {
  console.log("how are you, " + name + "?")
}

function bye() {
  console.log("ok bye!")
}

greet("maggie")
// hello, maggie!
// how are you, maggie?
// getting ready to say bye...
// ok bye!