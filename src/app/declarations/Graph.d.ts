declare class Graph extends mxGraph {
    allowAutoPanning: boolean;
    allowLoops: boolean;
    allowNegativeCoordinates: boolean;
    alternateEdgeStyle: string;
    background: string;
    cellEditor: any; //mxCellEditor;
    cellRenderer: any; //mxCellRenderer;
    click();
    connectionHandler: any; //mxConnectionHandler;
    constrainChildren: boolean;
    constrainRelativeChildren: boolean;
    container: any;
    cumulativeZoomFactor: number;
    currentEdgeStyle: {edgeStyle: string, rounded: string, jettySize: string, orthogonalLoop: string};
    currentScale: number;
    currentTranslate: any; //mxPoint;
    currentVertexStyle: {};
    dialect: string;
    domainPathUrl: string;
    domainUrl: string;
    dropEnabled: boolean;
    editLink();
    eventListeners: any[];
    fireMouseEvent(evtName, me, sender);
    firstClickSource: any;
    firstClickState: undefined;
    foldingEnabled: boolean;
    getAllCells(x, y, width, height, parent, result);
    getCursorForCell(cell);
    getCursorForMouseEvent(me);
    getPagePadding();
    getPreferredPageSize(bounds, width, height);
    getRubberband();
    graphHandler: any; //mxGraphHandler;
    graphModelChangeListener();
    gridEnabled: boolean;
    imageBundles: any[];
    isBlankLink(href);
    isCellLocked(cell);
    isHtmlLabel(cell);
    isMouseDown: boolean;
    isMouseTrigger: boolean;
    isToggleEvent(evt);
    lastEvent: PointerEvent;
    lastMouseX: number;
    lastMouseY: number;
    layoutManager: any; //mxLayoutManager;
    lazyZoom(zoomIn);
    lightbox: undefined;
    minimumGraphSize: any; //mxRectangle;
    model: mxGraphModel;
    mouseListeners: any[];
    multiplicities: any[];
    pageBreaksVisible: boolean;
    pageFormat: any; //mxRectangle;
    pageScale: number;
    pageVisible: boolean;
    panningHandler: any; //mxPanningHandler;
    panningManager: any; //mxPanningManager;
    popupMenuHandler: any; //mxPopupMenuHandler;
    preferPageSize: boolean;
    renderHint: null;
    resetEdgesOnConnect: boolean;
    resetViewOnRootChange: boolean;
    scrollbars: boolean;
    selectRegion(rect, evt);
    selectionCellsHandler: any; //mxSelectionCellsHandler;
    selectionModel: any; //mxGraphSelectionModel;
    setDefaultParent();
    sizeDidChange();
    stylesheet: any; //mxStylesheet;
    tapAndHoldInProgress: boolean;
    tapAndHoldValid: boolean;
    themes: any;
    timerAutoScroll: boolean;
    tooltipHandler: any; //mxTooltipHandler;
    transparentBackground: boolean;
    updateMouseEvent(me);
    updateZoomTimeout: null;
    view: any; //mxGraphView;
}