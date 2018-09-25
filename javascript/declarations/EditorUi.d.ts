export class EditorUi extends mxEventSource {
    addBeforeUnloadListener();
    addChromelessClickHandler();
    addChromelessToolbarItems(addButton);
    addSplitHandler(elt, horizontal, dx, onChange);
    addUndoListener();
    allowAnimation: boolean;
    canRedo();
    canUndo();
    confirm(msg, okFn, cancelFn);
    constructor(editor, container, lightbox);
    createDiv(classname);
    createDivs();
    createFooter();
    createFormat(container);
    createHoverIcons();
    createKeyHandler(editor);
    createMenus();
    createOutline(wnd);
    createSidebar(container);
    createSidebarFooterContainer();
    createStatusContainer();
    createTabContainer();
    createTemporaryGraph(stylesheet);
    createToolbar(container);
    createUi();
    destroy();
    executeLayout(exec, animate, post);
    extractGraphModelFromEvent(evt);
    extractGraphModelFromHtml(data);
    footerHeight: number;
    formatEnabled: boolean;
    formatWidth: number;
    getCssClassForMarker(prefix, shape, marker, fill);
    getEditBlankXml();
    getUrl(pathname);
    hasScrollbars();
    hideCurrentMenu();
    hideDialog(cancel);
    hsplitClickEnabled:false;
    hsplitPosition: number;
    init();
    initCanvas();
    initClipboard();
    isCompatibleString(data);
    isDiagramEmpty();
    isImmediateEditingEvent(evt);
    isSelectionAllowed(evt);
    lazyZoomDelay: number;
    lightboxFit(maxHeight);
    lightboxMaxFitScale: number;
    lightboxVerticalDivider: number;
    menubarHeight: number;
    onBeforeUnload();
    onKeyDown(evt);
    onKeyPress(evt);
    open();
    openFile();
    pickColor(color, apply);
    redo();
    refresh(sizeDidChange);
    resetCurrentMenu();
    resetScrollbars();
    save(name);
    saveFile(forceDialog);
    setBackgroundColor(value);
    setBackgroundImage(image);
    setCurrentMenu(menu, elt);
    setFoldingEnabled(value);
    setGridColor(value);
    setPageFormat(value);
    setPageScale(value);
    setPageVisible(value);
    setScrollbars(value);
    setStatusText(value);
    showBackgroundImageDialog(apply);
    showDataDialog(cell);
    showDialog(elt, w, h, modal, closable, onClose, noScroll);
    showImageDialog(title, value, fn, ignoreExisting);
    showLinkDialog(value, btnLabel, fn);
    sidebarFooterHeight: number;
    splitSize: number;
    toggleFormatPanel(forceHide);
    toolbarHeight: number;
    undo();
    updateActionStates();
    updateDocumentTitle();
    updatePasteActionStates();
}