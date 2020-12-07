import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('source_left_header_right extension activated');
}

 vscode.window.onDidChangeActiveTextEditor((editor: vscode.TextEditor | undefined) => {
    if(undefined || editor == undefined) return;

    let fn = editor.document.fileName;
    let ext = fn.substr(fn.lastIndexOf(".")+1);

    if(ext == "c" || ext == "cpp") {
        vscode.commands.executeCommand("workbench.action.moveEditorToFirstGroup");
    } else if(ext == "h" || ext == "hpp") {
        vscode.commands.executeCommand("workbench.action.moveEditorToLastGroup");
    }
});

// note: For some reason this doesn't work reliably
/* vscode.workspace.onDidOpenTextDocument((doc: vscode.TextDocument) => {
    let fn = doc.fileName;
    let ext = fn.substr(fn.lastIndexOf(".")+1);

    if(ext == "c" || ext == "cpp") {
        vscode.commands.executeCommand("workbench.action.moveEditorToFirstGroup");
    } else if(ext == "h" || ext == "hpp") {
        vscode.commands.executeCommand("workbench.action.moveEditorToLastGroup");
    }
}); */