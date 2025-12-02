const toolbar = document.getElementById("toolbar") as HTMLElement;

function addItem(title: string): void {
    const toolbarItem = document.createElement("div");
    toolbarItem.innerText = title;
    toolbarItem.className = "toolbar-item";

    toolbar.appendChild(toolbarItem);

    console.log(`Added ${title} to the toolbar`);
}

export default function buildToolbar(): void {
    addItem("File");
}
