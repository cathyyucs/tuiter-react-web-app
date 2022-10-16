const RenderBarItem = (barItem, activeBarItemName) => {
    return (`
        <a href="${barItem.href}" class="list-group-item list-group-item-action ${barItem.name === activeBarItemName ? "active": ""}">
             <i class="${barItem.iconClass}"></i>
             <span class="d-none d-xl-inline">${barItem.name}</span>
        </a>
    `);
}

const RenderSideBarItems = (activeBarItemName, barItems) => {
    return(`
        ${barItems.map(bar => {return RenderBarItem(bar, activeBarItemName)}).join('')}
    `);
}

export default RenderSideBarItems;