import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('editor') editorElement: ElementRef; 

  editor: Editor;
  editorUi: EditorUi;

  ngAfterViewInit() {
    const RESOURCE_BASE = "assets/resources/grapheditor";
    const STYLE_PATH = "assets/styles";
    const editorDiv = this.editorElement.nativeElement;
    const comp = this;

    mxResources.loadDefaultBundle = false;
    var bundle = mxResources.getDefaultBundle(RESOURCE_BASE, undefined) ||
      mxResources.getSpecialBundle(RESOURCE_BASE, undefined);

    // Fixes possible asynchronous requests
    mxUtils.getAll([bundle, STYLE_PATH + '/default.xml'], function(xhr)
    {
      // Adds bundle text to resources
      mxResources.parse(xhr[0].getText());
      
      // Configures the default graph theme
      var themes = new Object();
      themes[/*Graph.prototype.defaultThemeName*/"default"] = xhr[1].getDocumentElement(); 
      
      // Main
      comp.editor = new Editor(false, themes, undefined, undefined, undefined);
      comp.editorUi = new EditorUi(
        comp.editor, 
        editorDiv, 
        undefined
      );
    }, function()
    {
      console.log('<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>');
    });
  }

  keypress(event) {
    console.log(event, event.keyCode, event.keyIdentifier);
    const graph = this.editor.getGraph();
    console.log(graph.getModel().getChildVertices(graph.getDefaultParent()));
  }
}
