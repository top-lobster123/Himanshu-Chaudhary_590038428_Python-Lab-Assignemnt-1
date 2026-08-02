const modules = [
  {
    number: "001", category: "foundations", categoryLabel: "Foundations",
    chapter: "Waking Up", title: "Python Basics",
    summary: "Print statements, variables and core data types — the first signs that the simulation can be read.",
    description: "Set up Python and learn the essential syntax used to communicate with the machine: output, variables, values and basic types.",
    concepts: ["print()", "variables", "data types"],
    image: "images/experiment_01_python_basics.png",
    code: 'message = "Wake up, Neo"\nprint(type(message).__name__)',
    question: "The message is a sequence of text. What does the simulation print?",
    answers: ["str", "int", "list", "bool"],
    correct: "str",
    feedback: "Decoded: strings store text. This is the same foundation used by print(), variables and data-type checks in the notebook.",
    file: "notebooks/Experiment_1_Python_Installation_and_Basics.ipynb"
  },
  {
    number: "002", category: "foundations", categoryLabel: "Foundations",
    chapter: "Learning the Laws", title: "Input & Operators",
    summary: "Accept a signal from the user, transform it with arithmetic, comparison, logical and bitwise operators.",
    description: "Explore Python input and the operators that let programs calculate, compare, test membership and make precise changes to data.",
    concepts: ["input()", "arithmetic", "bitwise"],
    image: "images/experiment_02_input_operators.png",
    code: "access = 7 > 3 and 2 in [1, 2, 3]\nprint(access)",
    question: "Relational, logical and membership operators work together. What is the result?",
    answers: ["True", "False", "2", "Error"],
    correct: "True",
    feedback: "Decoded: both conditions are true. The notebook extends this kind of operator logic to small computational problems.",
    file: "notebooks/Experiment_2_Input_Statements_and_Operators.ipynb"
  },
  {
    number: "003", category: "logic", categoryLabel: "Logic",
    chapter: "The Fork in the Code", title: "Conditional Statements",
    summary: "Choose the right path through the system with if, elif and else.",
    description: "Build programs that respond to conditions and make decisions using Python's branching statements.",
    concepts: ["if", "elif", "else"],
    image: "images/experiment_03_conditionals.png",
    code: 'score = 72\nif score >= 50:\n    print("Cleared")\nelse:\n    print("Retry")',
    question: "The condition becomes a decision gate. Which path runs?",
    answers: ["Cleared", "Retry", "72", "Nothing"],
    correct: "Cleared",
    feedback: "Decoded: 72 meets the threshold, so the if branch runs. The notebook builds up from simple tests to grading and calendar logic.",
    file: "notebooks/Experiment_3_Conditional_Statements.ipynb"
  },
  {
    number: "004", category: "logic", categoryLabel: "Logic",
    chapter: "Training Simulations", title: "Loops",
    summary: "Repeat a pattern until it becomes instinct: for, while and list comprehensions.",
    description: "Use iteration to work through sequences, repeat tasks and generate concise transformations with comprehensions.",
    concepts: ["for", "while", "comprehensions"],
    image: "images/experiment_04_loops.png",
    code: "total = 0\nfor number in range(1, 5):\n    total += number\nprint(total)",
    question: "The loop visits 1, 2, 3 and 4. What does total become?",
    answers: ["10", "4", "15", "0"],
    correct: "10",
    feedback: "Decoded: iteration accumulates 1 + 2 + 3 + 4. The notebook also uses loops for strings, patterns and number theory.",
    file: "notebooks/Experiment_4_Loops.ipynb"
  },
  {
    number: "005", category: "logic", categoryLabel: "Logic",
    chapter: "Reading the Code", title: "Strings & Sets",
    summary: "Inspect and reshape text, then use set algebra to find what belongs and what does not.",
    description: "Manipulate Python strings and use sets for unique values, membership checks and useful mathematical operations.",
    concepts: ["strings", "set algebra", "methods"],
    image: "images/experiment_05_strings_sets.png",
    code: 'crew = {"neo", "trinity", "neo"}\nprint(len(crew))',
    question: "Sets remove duplicate entries. How many unique crew members remain?",
    answers: ["2", "3", "1", "Error"],
    correct: "2",
    feedback: "Decoded: the repeated Neo signal is stored once. The notebook pairs set algebra with string searching and transformation.",
    file: "notebooks/Experiment_5_Strings_and_Sets.ipynb"
  },
  {
    number: "006", category: "data", categoryLabel: "Data",
    chapter: "The Construct's Archives", title: "Collections",
    summary: "Organize the world inside lists, tuples and dictionaries.",
    description: "Store, retrieve and transform related information with Python's most flexible built-in data structures.",
    concepts: ["lists", "tuples", "dictionaries"],
    image: "images/experiment_06_collections.png",
    code: 'profile = {"name": "Neo", "track": "Python"}\nprint(profile["track"])',
    question: "A dictionary retrieves a value by its key. Which value is returned?",
    answers: ["Python", "track", "Neo", "KeyError"],
    correct: "Python",
    feedback: "Decoded: dictionaries map a key to a value. This experiment contrasts them with ordered lists and immutable tuples.",
    file: "notebooks/Experiment_6_Lists_Tuples_Dictionary.ipynb"
  },
  {
    number: "007", category: "logic", categoryLabel: "Logic",
    chapter: "Agent Subroutines", title: "Functions",
    summary: "Package repeatable behaviour into functions, recursion and lambdas.",
    description: "Create reusable, testable program blocks with parameters, return values, recursive calls and concise lambda expressions.",
    concepts: ["functions", "recursion", "lambdas"],
    image: "images/experiment_07_functions.png",
    code: "def trace(value):\n    return value * 2\n\nprint(trace(8))",
    question: "The function doubles its input before returning it. What appears?",
    answers: ["16", "8", "64", "None"],
    correct: "16",
    feedback: "Decoded: a function receives 8 and returns 16. The notebook expands this pattern to recursion, lambdas and flexible arguments.",
    file: "notebooks/Experiment_7_Functions.ipynb"
  },
  {
    number: "008", category: "data", categoryLabel: "Data",
    chapter: "Glitches in the Matrix", title: "Files & Exceptions",
    summary: "Persist information, identify errors and keep the program alive when the unexpected arrives.",
    description: "Read and write files safely while using exceptions to predict, handle and explain program errors.",
    concepts: ["file I/O", "try / except", "custom errors"],
    image: "images/experiment_08_files_exceptions.png",
    code: 'try:\n    int("agent")\nexcept ValueError:\n    print("Signal repaired")',
    question: "Converting the word agent to an integer raises ValueError. What happens next?",
    answers: ["Signal repaired", "The program crashes", "agent", "0"],
    correct: "Signal repaired",
    feedback: "Decoded: the exception is handled rather than crashing the program. The notebook combines this safety net with file reading and writing.",
    file: "notebooks/Experiment_8_File_Handling_and_Exception_Handling.ipynb"
  },
  {
    number: "009", category: "data", categoryLabel: "Data",
    chapter: "The Architect's Blueprint", title: "Classes & Objects",
    summary: "Model the entities inside the system with classes, inheritance and polymorphism.",
    description: "Apply object-oriented programming to create models with state and behaviour, then extend them through inheritance.",
    concepts: ["classes", "inheritance", "overloading"],
    image: "images/experiment_09_classes_objects.png",
    code: 'class Student:\n    def __init__(self, name):\n        self.name = name\n\nprint(Student("Neo").name)',
    question: "An object stores its own attributes. Which name is printed?",
    answers: ["Neo", "Student", "name", "None"],
    correct: "Neo",
    feedback: "Decoded: the object exposes its name attribute. The notebook then explores encapsulation, inheritance, overriding and operator overloading.",
    file: "notebooks/Experiment_9_Classes_and_Objects.ipynb"
  },
  {
    number: "010", category: "data", categoryLabel: "Data",
    chapter: "The Oracle's Data", title: "Data & Visualization",
    summary: "Turn raw values into signals using NumPy, pandas and visual storytelling.",
    description: "Use Python's data stack to inspect, analyze and visualize information that would otherwise stay hidden in the noise.",
    concepts: ["NumPy", "pandas", "Matplotlib"],
    image: "images/experiment_10_data_visualization.png",
    code: "scores = [64, 88, 76]\naverage = sum(scores) / len(scores)\nprint(average)",
    question: "Before a chart can reveal a pattern, the data must be summarized. What is the average?",
    answers: ["76.0", "228", "88.0", "3"],
    correct: "76.0",
    feedback: "Decoded: the mean score is 76.0. The notebook takes this further with NumPy arrays, pandas tables and visual analysis.",
    file: "notebooks/Experiment_10_Data_Analysis_and_Visualization.ipynb"
  }
];

const grid = document.querySelector("#module-grid");
const searchInput = document.querySelector("#module-search");
const count = document.querySelector("#module-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#module-dialog");
const simulationCode = document.querySelector("#dialog-code");
const simulationQuestion = document.querySelector("#dialog-question");
const simulationAnswers = document.querySelector("#dialog-answers");
const simulationResult = document.querySelector("#dialog-result");
const simulationReset = document.querySelector("#dialog-reset");
let currentFilter = "all";
let activeModule = null;

function makeCard(module) {
  const card = document.createElement("article");
  card.className = "module-card";
  card.dataset.category = module.category;
  card.dataset.search = [module.title, module.chapter, module.summary, ...module.concepts].join(" ").toLowerCase();
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

function openModule(number) {
  const module = modules.find((item) => item.number === String(number).padStart(3, "0"));
  if (!module) return false;
  activeModule = module;
  document.querySelector("#dialog-number").textContent = "Experiment " + module.number;
  document.querySelector("#dialog-chapter").textContent = module.chapter;
  document.querySelector("#dialog-title").textContent = module.title;
  document.querySelector("#dialog-description").textContent = module.description;
  document.querySelector("#dialog-tags").innerHTML = module.concepts.map((concept) => "<span>" + concept + "</span>").join("");
  renderSimulation();
  dialog.showModal();
  return true;
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

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (button) openModule(button.dataset.module);
});
simulationAnswers.addEventListener("click", (event) => {
  const answer = event.target.closest("[data-answer]");
  if (!answer || !activeModule) return;
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
  if (activeModule) renderSimulation();
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const zionOutput = document.querySelector("#zion-output");
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
document.querySelector("#zion-launch").addEventListener("click", () => {
  document.querySelector(".zion-console").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector('[data-zion-command="validate"]').focus({ preventScroll: true });
});

const output = document.querySelector("#terminal-output");
const terminalForm = document.querySelector("#terminal-form");
const terminalInput = document.querySelector("#terminal-input");
const clearButton = document.querySelector("#terminal-clear");

function escapeText(text) {
  const element = document.createElement("span");
  element.textContent = text;
  return element.innerHTML;
}
function printLine(content, isCommand) {
  const line = document.createElement("p");
  if (isCommand) line.innerHTML = '<span class="prompt">neo@zion:~$</span> ' + escapeText(content);
  else line.innerHTML = '<span class="response">' + content + "</span>";
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
    document.querySelector("#capstone").scrollIntoView({ behavior: "smooth", block: "center" });
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

const canvas = document.querySelector("#matrix-rain");
const context = canvas.getContext("2d");
const motionButton = document.querySelector("#motion-toggle");
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
document.querySelector("#current-year").textContent = new Date().getFullYear();
