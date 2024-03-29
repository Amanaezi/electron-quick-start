const { app, BrowserWindow } = require("electron");
const path = require("path");


const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 600,
        icon: path.join(__dirname, "icon.png"),
        resizable: false,
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setTitle("Calculator");
    mainWindow.loadFile("src/index.html");
};

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => app.quit());