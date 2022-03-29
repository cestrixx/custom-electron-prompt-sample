const { app, BrowserWindow } = require('electron')
const prompt = require('custom-electron-prompt')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')

    prompt({
        title: "Select",
        label: "Choose an option:",
        type: "select",
        value: "2",
        selectOptions: ["thisReturn0", "thisReturn1", "imSelected", "thisReturn3"],
        // 	selectOptions: {0: "thisReturn0", 1: "thisReturn1", 2: "imSelected" , potato: "thisReturnPotato"},
        resizable: true,
        height: 150,
        width: 300,
        customStylesheet: "dark",
    }, win).then(input => console.log(`input == ${input}`)).catch(console.error)
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})