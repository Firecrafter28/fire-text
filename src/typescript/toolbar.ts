const toolbar = document.getElementById("toolbar") as HTMLElement;

interface ToolbarAction {
    name: string
}

function addItem(title: string, items: ToolbarAction[]): void {
    const toolbarItem = document.createElement("button");
    toolbarItem.innerText = title;
    toolbarItem.className = "toolbar-item";

    const toolbarActions = document.createElement("div");
    toolbarActions.className = "toolbar-item-context-menu";

    items.forEach((item: ToolbarAction): void => {
        const action = document.createElement("button");
        action.className = "toolbar-action";
        action.textContent = item.name;

        toolbarActions.appendChild(action);

        console.log(`Added ${item.name} to ${title}`);
    });

    toolbarItem.appendChild(toolbarActions);

    toolbar.appendChild(toolbarItem);

    console.log(`Added ${title} to the toolbar`);
}

export default function buildToolbar(): void {
    addItem("File", [
        {
            name: "Save"
        },
        {
            name: "Save As"
        },
        {
            name: "Export"
        }
    ]);
    addItem("Edit", [
        {
            name: "Options"
        }
    ]);
}
