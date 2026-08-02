const notebookBase = "https://github.com/top-lobster123/Himanshu-Chaudhary_590038428_Python-Lab-Assignemnt-1/blob/master/";

const modules = [
  {
    number: "001", category: "foundations", categoryLabel: "Foundations",
    chapter: "Waking Up", title: "Python Basics",
    summary: "Print statements, variables and core data types — the first signs that the simulation can be read.",
    description: "Set up Python and learn the essential syntax used to communicate with the machine: output, variables, values and basic types.",
    concepts: ["print()", "variables", "data types"],
    code: 'message = "Wake up, Neo"\nprint(type(message).__name__)',
    question: "The message is a sequence of text. What does the simulation print?",
    answers: ["str", "int", "list", "bool"], correct: "str",
    feedback: "Decoded: strings store text. This is the same foundation used by print(), variables and data-type checks in the notebook.",
    file: "notebooks/Experiment_1_Python_Installation_and_Basics.ipynb",
    briefing: {
      aim: "Install and verify Python, then use print(), variables and core data types to display information.",
      points: ["Compare IDLE's interactive mode with running a full .py script.", "Use print() and escape sequences for clear output.", "Create dynamically typed values: int, float, str, bool and list."],
      takeaway: "Python identifies a variable's type at runtime, so clear names and deliberate values matter from the first line."
    }
  },
  {
    number: "002", category: "foundations", categoryLabel: "Foundations",
    chapter: "Learning the Laws", title: "Input & Operators",
    summary: "Accept a signal from the user, transform it with arithmetic, comparison, logical and bitwise operators.",
    description: "Explore Python input and the operators that let programs calculate, compare, test membership and make precise changes to data.",
    concepts: ["input()", "arithmetic", "bitwise"],
    code: "access = 7 > 3 and 2 in [1, 2, 3]\nprint(access)",
    question: "Relational, logical and membership operators work together. What is the result?",
    answers: ["True", "False", "2", "Error"], correct: "True",
    feedback: "Decoded: both conditions are true. The notebook extends this kind of operator logic to small computational problems.",
    file: "notebooks/Experiment_2_Input_Statements_and_Operators.ipynb",
    briefing: {
      aim: "Use input handling and arithmetic, relational, bitwise and membership operators to solve small computational problems.",
      points: ["Apply geometry and finance formulas with the math module.", "Distinguish true division (/), floor division (//) and modulus (%).", "Test bitwise shifts, comparisons and membership with in."],
      takeaway: "In Python 3, / returns a float; use // only when the result must be floor-divided."
    }
  },
  {
    number: "003", category: "logic", categoryLabel: "Logic",
    chapter: "The Fork in the Code", title: "Conditional Statements",
    summary: "Choose the right path through the system with if, elif and else.",
    description: "Build programs that respond to conditions and make decisions using Python's branching statements.",
    concepts: ["if", "elif", "else"],
    code: 'score = 72\nif score >= 50:\n    print("Cleared")\nelse:\n    print("Retry")',
    question: "The condition becomes a decision gate. Which path runs?",
    answers: ["Cleared", "Retry", "72", "Nothing"], correct: "Cleared",
    feedback: "Decoded: 72 meets the threshold, so the if branch runs. The notebook builds up from simple tests to grading and calendar logic.",
    file: "notebooks/Experiment_3_Conditional_Statements.ipynb",
    briefing: {
      aim: "Use if, if-else and if-elif-else statements to implement decision-making logic.",
      points: ["Test divisibility and compare two or three values.", "Classify quadratic roots and validate leap years.", "Apply compound conditions to date and grade-sheet logic."],
      takeaway: "The and operator only opens a branch when every required condition is True."
    }
  },
  {
    number: "004", category: "logic", categoryLabel: "Logic",
    chapter: "Training Simulations", title: "Loops",
    summary: "Repeat a pattern until it becomes instinct: for, while and list comprehensions.",
    description: "Use iteration to work through sequences, repeat tasks and generate concise transformations with comprehensions.",
    concepts: ["for", "while", "comprehensions"],
    code: "total = 0\nfor number in range(1, 5):\n    total += number\nprint(total)",
    question: "The loop visits 1, 2, 3 and 4. What does total become?",
    answers: ["10", "4", "15", "0"], correct: "10",
    feedback: "Decoded: iteration accumulates 1 + 2 + 3 + 4. The notebook also uses loops for strings, patterns and number theory.",
    file: "notebooks/Experiment_4_Loops.ipynb",
    briefing: {
      aim: "Use for and while loops to implement iterative number, string and pattern algorithms.",
      points: ["Calculate factorials and identify Armstrong numbers.", "Generate Fibonacci and prime sequences, then test palindromes.", "Filter ranges with comprehensions and print multiplication tables."],
      takeaway: "A loop turns repeated operations into one controlled process with a running accumulator."
    }
  },
  {
    number: "005", category: "logic", categoryLabel: "Logic",
    chapter: "Reading the Code", title: "Strings & Sets",
    summary: "Inspect and reshape text, then use set algebra to find what belongs and what does not.",
    description: "Manipulate Python strings and use sets for unique values, membership checks and useful mathematical operations.",
    concepts: ["strings", "set algebra", "methods"],
    code: 'crew = {"neo", "trinity", "neo"}\nprint(len(crew))',
    question: "Sets remove duplicate entries. How many unique crew members remain?",
    answers: ["2", "3", "1", "Error"], correct: "2",
    feedback: "Decoded: the repeated Neo signal is stored once. The notebook pairs set algebra with string searching and transformation.",
    file: "notebooks/Experiment_5_Strings_and_Sets.ipynb",
    briefing: {
      aim: "Use string methods and sets to analyze text, find patterns and perform set algebra.",
      points: ["Count capitals, vowels and substring occurrences.", "Split sentences, tally character frequency and collect unique words.", "Compare groups with union, intersection, difference and symmetric difference."],
      takeaway: "Sets retain unique values, while string methods make text search and transformation direct."
    }
  },
  {
    number: "006", category: "data", categoryLabel: "Data",
    chapter: "The Construct's Archives", title: "Collections",
    summary: "Organize the world inside lists, tuples and dictionaries.",
    description: "Store, retrieve and transform related information with Python's most flexible built-in data structures.",
    concepts: ["lists", "tuples", "dictionaries"],
    code: 'profile = {"name": "Neo", "track": "Python"}\nprint(profile["track"])',
    question: "A dictionary retrieves a value by its key. Which value is returned?",
    answers: ["Python", "track", "Neo", "KeyError"], correct: "Python",
    feedback: "Decoded: dictionaries map a key to a value. This experiment contrasts them with ordered lists and immutable tuples.",
    file: "notebooks/Experiment_6_Lists_Tuples_Dictionary.ipynb",
    briefing: {
      aim: "Use lists, tuples and dictionaries to store, organize and query structured data.",
      points: ["Tally values and calculate an average from a tuple.", "Find a runner-up score and query a name-to-city mapping.", "Filter records stored as a list of movie dictionaries."],
      takeaway: "Choose lists for ordered changes, tuples for fixed sequences and dictionaries for fast key-based lookup."
    }
  },
  {
    number: "007", category: "logic", categoryLabel: "Logic",
    chapter: "Agent Subroutines", title: "Functions",
    summary: "Package repeatable behaviour into functions, recursion and lambdas.",
    description: "Create reusable, testable program blocks with parameters, return values, recursive calls and concise lambda expressions.",
    concepts: ["functions", "recursion", "lambdas"],
    code: "def trace(value):\n    return value * 2\n\nprint(trace(8))",
    question: "The function doubles its input before returning it. What appears?",
    answers: ["16", "8", "64", "None"], correct: "16",
    feedback: "Decoded: a function receives 8 and returns 16. The notebook expands this pattern to recursion, lambdas and flexible arguments.",
    file: "notebooks/Experiment_7_Functions.ipynb",
    briefing: {
      aim: "Design functions, recursion and lambda expressions, including keyword, default and variable-length arguments.",
      points: ["Find maximum/minimum values and sum cubes with reusable functions.", "Use base cases for recursive counting and Fibonacci.", "Compare lambda expressions with keyword, default and *args calls."],
      takeaway: "A function should return a clear result, and recursion always needs a base case that stops the calls."
    }
  },
  {
    number: "008", category: "data", categoryLabel: "Data",
    chapter: "Glitches in the Matrix", title: "Files & Exceptions",
    summary: "Persist information, identify errors and keep the program alive when the unexpected arrives.",
    description: "Read and write files safely while using exceptions to predict, handle and explain program errors.",
    concepts: ["file I/O", "try / except", "custom errors"],
    code: 'try:\n    int("agent")\nexcept ValueError:\n    print("Signal repaired")',
    question: "Converting the word agent to an integer raises ValueError. What happens next?",
    answers: ["Signal repaired", "The program crashes", "agent", "0"], correct: "Signal repaired",
    feedback: "Decoded: the exception is handled rather than crashing the program. The notebook combines this safety net with file reading and writing.",
    file: "notebooks/Experiment_8_File_Handling_and_Exception_Handling.ipynb",
    briefing: {
      aim: "Read and write text files safely and build robust programs with built-in and custom exceptions.",
      points: ["Write, read and analyze name, number and city-record files.", "Handle ZeroDivisionError and ValueError without crashing.", "Create custom exceptions for invalid student records and chain their causes."],
      takeaway: "with open(...) closes a file safely, while try/except lets a program explain and recover from known failures."
    }
  },
  {
    number: "009", category: "data", categoryLabel: "Data",
    chapter: "The Architect's Blueprint", title: "Classes & Objects",
    summary: "Model the entities inside the system with classes, inheritance and polymorphism.",
    description: "Apply object-oriented programming to create models with state and behaviour, then extend them through inheritance.",
    concepts: ["classes", "inheritance", "overloading"],
    code: 'class Student:\n    def __init__(self, name):\n        self.name = name\n\nprint(Student("Neo").name)',
    question: "An object stores its own attributes. Which name is printed?",
    answers: ["Neo", "Student", "name", "None"], correct: "Neo",
    feedback: "Decoded: the object exposes its name attribute. The notebook then explores encapsulation, inheritance, overriding and operator overloading.",
    file: "notebooks/Experiment_9_Classes_and_Objects.ipynb",
    briefing: {
      aim: "Design classes and objects, then apply encapsulation, inheritance, overriding and operator overloading.",
      points: ["Build Student objects with attributes, methods and class-level averages.", "Demonstrate single, multilevel and multiple inheritance.", "Override a method and implement Point addition with __add__."],
      takeaway: "A class is a reusable blueprint; __init__ gives every new object its own independent state."
    }
  },
  {
    number: "010", category: "data", categoryLabel: "Data",
    chapter: "The Oracle's Data", title: "Data & Visualization",
    summary: "Turn raw values into signals using NumPy, pandas and visual storytelling.",
    description: "Use Python's data stack to inspect, analyze and visualize information that would otherwise stay hidden in the noise.",
    concepts: ["NumPy", "pandas", "Matplotlib"],
    code: "scores = [64, 88, 76]\naverage = sum(scores) / len(scores)\nprint(average)",
    question: "Before a chart can reveal a pattern, the data must be summarized. What is the average?",
    answers: ["76.0", "228", "88.0", "3"], correct: "76.0",
    feedback: "Decoded: the mean score is 76.0. The notebook takes this further with NumPy arrays, pandas tables and visual analysis.",
    file: "notebooks/Experiment_10_Data_Analysis_and_Visualization.ipynb",
    briefing: {
      aim: "Use NumPy for arrays and matrices, pandas for tabular data, and Matplotlib/Seaborn for visual analysis.",
      points: ["Sum arrays and multiply matrices with NumPy.", "Inspect, clean and transform a pandas DataFrame.", "Create a four-panel Seaborn/Matplotlib dashboard."],
      takeaway: "Vectorized array operations and clean tables reveal patterns before a chart makes them visible."
    }
  }
];

const select = (selector) => document.querySelector(selector);
const grid = select("#module-grid");
const searchInput = select("#module-search");
const count = select("#module-count");
const emptyState = select("#empty-state");
const dialog = select("#module-dialog");
const simulation = select("#module-simulation");
const simulationCode = select("#dialog-code");
const simulationQuestion = select("#dialog-question");
const simulationAnswers = select("#dialog-answers");
const simulationResult = select("#dialog-result");
const simulationReset = select("#dialog-reset");
const challengeGate = select("#challenge-gate");
let currentFilter = "all";
let activeModule = null;
let challengeUnlocked = false;

function makeCard(module) {
  const card = document.createElement("article");
  card.className = "module-card";
  card.dataset.category = module.category;
  card.dataset.search = [module.title, module.chapter, module.summary].concat(module.concepts).join(" ").toLowerCase();
  card.innerHTML =
    '<div class="module-card-top"><span>EXP_' + module.number + '</span><span class="module-category">' + module.categoryLabel + '</span></div>' +
    '<div class="card-content"><h3>' + module.title + '</h3><p>' + module.summary + '</p></div>' +
    '<button class="card-link" type="button" data-module="' + module.number + '">View signal <span aria-hidden="true">↗</span></button>';
  return card;
}

modules.forEach((module) => grid.appendChild(makeCard(module)));

function filterModules() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll(".module-card").forEach((card) => {
    const matchesCategory = currentFilter === "all" || card.dataset.category === currentFilter;
    const matchesSearch = !query || card.dataset.search.includes(query);
    card.hidden = !(matchesCategory && matchesSearch);
    if (!card.hidden) visible += 1;
  });
  count.textContent = visible + " module" + (visible === 1 ? "" : "s") + " found";
  emptyState.hidden = visible !== 0;
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("is-active", item === button));
    filterModules();
  });
});
searchInput.addEventListener("input", filterModules);

function renderBriefing() {
  const briefing = activeModule.briefing;
  select("#briefing-aim").textContent = briefing.aim;
  select("#briefing-points").replaceChildren(...briefing.points.map((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    return item;
  }));
  select("#briefing-takeaway").textContent = briefing.takeaway;
  select("#notebook-link").href = notebookBase + activeModule.file;
}

function renderSimulation() {
  simulationCode.textContent = activeModule.code;
  simulationQuestion.textContent = activeModule.question;
  simulationAnswers.replaceChildren();
  activeModule.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "simulation-answer";
    button.dataset.answer = answer;
    button.textContent = answer;
    simulationAnswers.appendChild(button);
  });
  simulationResult.className = "simulation-result";
  simulationResult.textContent = "Select the correct signal to decode the outcome.";
}

function lockChallenge() {
  challengeUnlocked = false;
  simulation.hidden = true;
  simulation.setAttribute("aria-hidden", "true");
  challengeGate.className = "challenge-gate";
  challengeGate.querySelector("p").textContent = "Read the briefing, then scroll to the end to unlock the challenge.";
}

function unlockChallenge() {
  if (challengeUnlocked) return;
  challengeUnlocked = true;
  simulation.hidden = false;
  simulation.removeAttribute("aria-hidden");
  challengeGate.classList.add("is-unlocked");
  challengeGate.querySelector("p").textContent = "Briefing complete. Challenge unlocked — decode the signal below.";
}

function checkReadingProgress() {
  if (!dialog.open || challengeUnlocked) return;
  const reachedEnd = dialog.scrollTop + dialog.clientHeight >= dialog.scrollHeight - 4;
  if (reachedEnd) unlockChallenge();
}

function openModule(number) {
  const module = modules.find((item) => item.number === String(number).padStart(3, "0"));
  if (!module) return false;
  activeModule = module;
  select("#dialog-number").textContent = "Experiment " + module.number;
  select("#dialog-chapter").textContent = module.chapter;
  select("#dialog-title").textContent = module.title;
  select("#dialog-description").textContent = module.description;
  select("#dialog-tags").innerHTML = module.concepts.map((concept) => "<span>" + concept + "</span>").join("");
  renderBriefing();
  renderSimulation();
  lockChallenge();
  dialog.showModal();
  requestAnimationFrame(() => { dialog.scrollTop = 0; });
  return true;
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (button) openModule(button.dataset.module);
});
dialog.addEventListener("scroll", checkReadingProgress, { passive: true });
simulationAnswers.addEventListener("click", (event) => {
  const answer = event.target.closest("[data-answer]");
  if (!answer || !activeModule || !challengeUnlocked) return;
  const isCorrect = answer.dataset.answer === activeModule.correct;
  simulationAnswers.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === activeModule.correct) button.classList.add("is-correct");
  });
  if (isCorrect) {
    simulationResult.classList.add("is-success");
    simulationResult.textContent = activeModule.feedback;
  } else {
    answer.classList.add("is-wrong");
    simulationResult.textContent = "Access denied. The correct signal is highlighted — read the code, then replay the simulation.";
  }
});
simulationReset.addEventListener("click", () => {
  if (activeModule && challengeUnlocked) renderSimulation();
});
select(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const zionOutput = select("#zion-output");
const zionCommands = {
  validate: "<strong>[ VERIFIED ] 16 clean student records loaded.</strong> Broken Record is rejected for a missing score; Ghost Entry is rejected because abc is not a valid mark. Custom exceptions keep the pipeline safe.",
  insights: "<strong>[ SIGNAL READ ] Mathematics leads at 71.69, followed by Physics at 70.19 and Chemistry at 70.00.</strong> This is the data-aggregation and visualization stage of Zion Central Command.",
  leader: "<strong>[ TOP PERFORMER ] Yash Chauhan — average: 95.0.</strong> A Student object, sorted analytics and clean records turn the raw CSV into a meaningful result."
};
document.querySelectorAll("[data-zion-command]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-zion-command]").forEach((item) => item.classList.toggle("is-active", item === button));
    zionOutput.innerHTML = '<span class="prompt">zion@command:~$</span><p>' + zionCommands[button.dataset.zionCommand] + "</p>";
  });
});
select("#zion-launch").addEventListener("click", () => {
  select(".zion-console").scrollIntoView({ behavior: "smooth", block: "center" });
  select('[data-zion-command="validate"]').focus({ preventScroll: true });
});

const output = select("#terminal-output");
const terminalForm = select("#terminal-form");
const terminalInput = select("#terminal-input");
const clearButton = select("#terminal-clear");

function escapeText(text) {
  const element = document.createElement("span");
  element.textContent = text;
  return element.innerHTML;
}
function printLine(content, isCommand) {
  const line = document.createElement("p");
  line.innerHTML = isCommand
    ? '<span class="prompt">neo@zion:~$</span> ' + escapeText(content)
    : '<span class="response">' + content + "</span>";
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}
function runCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();
  if (!command) return;
  printLine(rawCommand, true);
  if (command === "help") {
    printLine("<b>help</b> — list commands<br><b>ls</b> — inspect all modules<br><b>status</b> — course completion<br><b>open [1–10]</b> — inspect an experiment<br><b>mini</b> — jump to Zion Central Command<br><b>clear</b> — reset the terminal");
  } else if (command === "ls" || command === "list") {
    printLine(modules.map((item) => item.number + "  " + item.title).join("<br>"));
  } else if (command === "status") {
    printLine("<b>SYSTEM STATUS: ONLINE</b><br>10 / 10 experiments linked<br>1 / 1 capstone mission ready<br>Progress: 100%");
  } else if (command === "mini" || command === "capstone") {
    printLine("Redirecting to Zion Central Command...");
    select("#capstone").scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (/^open\s+([1-9]|10)$/.test(command)) {
    const id = command.split(/\s+/)[1];
    if (openModule(id)) printLine("Signal opened: experiment " + id + ".");
  } else if (command === "clear") {
    output.innerHTML = "";
  } else {
    printLine("Unknown command: <b>" + escapeText(command) + "</b>. Try <b>help</b>.");
  }
}
terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runCommand(terminalInput.value);
  terminalInput.value = "";
});
clearButton.addEventListener("click", () => {
  output.innerHTML = '<p><span class="response">Terminal cleared. Type <b>help</b> to reconnect.</span></p>';
  terminalInput.focus();
});

const canvas = select("#matrix-rain");
const context = canvas.getContext("2d");
const motionButton = select("#motion-toggle");
let animationId;
let rainActive = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let columns = [];
const symbols = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]<>/+=*";

function resizeRain() {
  const density = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * density;
  canvas.height = window.innerHeight * density;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  context.setTransform(density, 0, 0, density, 0, 0);
  columns = Array.from({ length: Math.ceil(window.innerWidth / 15) }, () => Math.random() * -100);
}
function drawRain() {
  context.fillStyle = "rgba(2, 8, 4, .08)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.fillStyle = "#54ed70";
  context.font = "12px monospace";
  columns.forEach((drop, index) => {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    context.fillText(symbol, index * 15, drop * 15);
    columns[index] = drop * 15 > window.innerHeight && Math.random() > .978 ? 0 : drop + 1;
  });
  if (rainActive) animationId = requestAnimationFrame(drawRain);
}
function setRainState(active) {
  rainActive = active;
  motionButton.setAttribute("aria-pressed", String(!active));
  motionButton.innerHTML = active ? '<span aria-hidden="true">◉</span> Pause rain' : '<span aria-hidden="true">○</span> Resume rain';
  if (active) drawRain();
  else cancelAnimationFrame(animationId);
}
resizeRain();
if (rainActive) drawRain();
window.addEventListener("resize", resizeRain);
motionButton.addEventListener("click", () => setRainState(!rainActive));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
select("#current-year").textContent = new Date().getFullYear();
