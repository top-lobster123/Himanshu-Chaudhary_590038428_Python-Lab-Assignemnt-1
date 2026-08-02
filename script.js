const modules = [
  {
    number: "001", category: "foundations", categoryLabel: "Foundations",
    chapter: "Waking Up", title: "Python Basics",
    summary: "Print statements, variables and core data types — the first signs that the simulation can be read.",
    description: "Set up Python and learn the essential syntax used to communicate with the machine: output, variables, values and basic types.",
    concepts: ["print()", "variables", "data types"],
    image: "images/experiment_01_python_basics.png",
    file: "notebooks/Experiment_1_Python_Installation_and_Basics.ipynb"
  },
  {
    number: "002", category: "foundations", categoryLabel: "Foundations",
    chapter: "Learning the Laws", title: "Input & Operators",
    summary: "Accept a signal from the user, transform it with arithmetic, comparison, logical and bitwise operators.",
    description: "Explore Python input and the operators that let programs calculate, compare, test membership and make precise changes to data.",
    concepts: ["input()", "arithmetic", "bitwise"],
    image: "images/experiment_02_input_operators.png",
    file: "notebooks/Experiment_2_Input_Statements_and_Operators.ipynb"
  },
  {
    number: "003", category: "logic", categoryLabel: "Logic",
    chapter: "The Fork in the Code", title: "Conditional Statements",
    summary: "Choose the right path through the system with if, elif and else.",
    description: "Build programs that respond to conditions and make decisions using Python's branching statements.",
    concepts: ["if", "elif", "else"],
    image: "images/experiment_03_conditionals.png",
    file: "notebooks/Experiment_3_Conditional_Statements.ipynb"
  },
  {
    number: "004", category: "logic", categoryLabel: "Logic",
    chapter: "Training Simulations", title: "Loops",
    summary: "Repeat a pattern until it becomes instinct: for, while and list comprehensions.",
    description: "Use iteration to work through sequences, repeat tasks and generate concise transformations with comprehensions.",
    concepts: ["for", "while", "comprehensions"],
    image: "images/experiment_04_loops.png",
    file: "notebooks/Experiment_4_Loops.ipynb"
  },
  {
    number: "005", category: "logic", categoryLabel: "Logic",
    chapter: "Reading the Code", title: "Strings & Sets",
    summary: "Inspect and reshape text, then use set algebra to find what belongs and what does not.",
    description: "Manipulate Python strings and use sets for unique values, membership checks and useful mathematical operations.",
    concepts: ["strings", "set algebra", "methods"],
    image: "images/experiment_05_strings_sets.png",
    file: "notebooks/Experiment_5_Strings_and_Sets.ipynb"
  },
  {
    number: "006", category: "data", categoryLabel: "Data",
    chapter: "The Construct's Archives", title: "Collections",
    summary: "Organize the world inside lists, tuples and dictionaries.",
    description: "Store, retrieve and transform related information with Python's most flexible built-in data structures.",
    concepts: ["lists", "tuples", "dictionaries"],
    image: "images/experiment_06_collections.png",
    file: "notebooks/Experiment_6_Lists_Tuples_Dictionary.ipynb"
  },
  {
    number: "007", category: "logic", categoryLabel: "Logic",
    chapter: "Agent Subroutines", title: "Functions",
    summary: "Package repeatable behaviour into functions, recursion and lambdas.",
    description: "Create reusable, testable program blocks with parameters, return values, recursive calls and concise lambda expressions.",
    concepts: ["functions", "recursion", "lambdas"],
    image: "images/experiment_07_functions.png",
    file: "notebooks/Experiment_7_Functions.ipynb"
  },
  {
    number: "008", category: "data", categoryLabel: "Data",
    chapter: "Glitches in the Matrix", title: "Files & Exceptions",
    summary: "Persist information, identify errors and keep the program alive when the unexpected arrives.",
    description: "Read and write files safely while using exceptions to predict, handle and explain program errors.",
    concepts: ["file I/O", "try / except", "custom errors"],
    image: "images/experiment_08_files_exceptions.png",
    file: "notebooks/Experiment_8_File_Handling_and_Exception_Handling.ipynb"
  },
  {
    number: "009", category: "data", categoryLabel: "Data",
    chapter: "The Architect's Blueprint", title: "Classes & Objects",
    summary: "Model the entities inside the system with classes, inheritance and polymorphism.",
    description: "Apply object-oriented programming to create models with state and behaviour, then extend them through inheritance.",
    concepts: ["classes", "inheritance", "overloading"],
    image: "images/experiment_09_classes_objects.png",
    file: "notebooks/Experiment_9_Classes_and_Objects.ipynb"
  },
  {
    number: "010", category: "data", categoryLabel: "Data",
    chapter: "The Oracle's Data", title: "Data & Visualization",
    summary: "Turn raw values into signals using NumPy, pandas and visual storytelling.",
    description: "Use Python's data stack to inspect, analyze and visualize information that would otherwise stay hidden in the noise.",
    concepts: ["NumPy", "pandas", "Matplotlib"],
    image: "images/experiment_10_data_visualization.png",
    file: "notebooks/Experiment_10_Data_Analysis_and_Visualization.ipynb"
  }
];

const grid = document.querySelector("#module-grid");
const searchInput = document.querySelector("#module-search");
const count = document.querySelector("#module-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#module-dialog");
const githubNotebookBase = "https://github.com/top-lobster123/Himanshu-Chaudhary_590038428_Python-Lab-Assignemnt-1/blob/master/";
let currentFilter = "all";

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
  document.querySelector("#dialog-number").textContent = "Experiment " + module.number;
  document.querySelector("#dialog-chapter").textContent = module.chapter;
  document.querySelector("#dialog-title").textContent = module.title;
  document.querySelector("#dialog-description").textContent = module.description;
  document.querySelector("#dialog-tags").innerHTML = module.concepts.map((concept) => "<span>" + concept + "</span>").join("");
  document.querySelector("#dialog-link").href = githubNotebookBase + module.file;
  dialog.showModal();
  return true;
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (button) openModule(button.dataset.module);
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
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
