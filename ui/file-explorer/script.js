const data = [
  { id: 1, name: "README.md" },
  {
    id: 2,
    name: "Documents",
    children: [
      { id: 3, name: "Word.doc" },
      { id: 4, name: "Powerpoint.ppt" },
    ],
  },
  {
    id: 5,
    name: "Downloads",
    children: [
      { id: 6, name: "unnamed.txt" },
      {
        id: 7,
        name: "Misc",
        children: [
          { id: 8, name: "foo.txt" },
          { id: 9, name: "bar.txt" },
        ],
      },
    ],
  },
];

const $fileExplorer = document.querySelector(".file-explorer");
const files = [];

function createFile(file) {
    const $li = document.createElement("li");

    if (Object.hasOwn(file, "children")) {
        $li.classList.add("folder");
        
        const $label = document.createElement("span");
        $label.classList.add("folder-label");
        $label.innerText = `📁 ${file.name}`;
        
        const $toggle = document.createElement("span");
        $toggle.innerHTML = " [+]";

        $li.appendChild($label);
        $li.appendChild($toggle);

        let $ul = null;
        $li.addEventListener("click", (e) => {
            e.stopPropagation();
            $li.classList.toggle("clicked");
            const isClicked = $li.classList.contains("clicked");
            $toggle.textContent = isClicked ? ' [-]' : ' [+]';

            if (isClicked && !$ul) {
                $ul = document.createElement("ul");
                file.children.forEach(child => {
                    $ul.appendChild(createFile(child));
                });
                $li.appendChild($ul);
            }
        });
    } else {
        $li.textContent = `📄 ${file.name}`;
    }

    return $li;
}

const $rootUl = document.createElement("ul");
data.forEach(file => {
    $rootUl.appendChild(createFile(file));
});
$fileExplorer.appendChild($rootUl);