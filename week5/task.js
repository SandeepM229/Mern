const {readFile, writeFile} = require("fs").promises

async function writeData(){
    try{
        await writeFile('./src.txt', "HTML CSS JS TS NODE EXPRESS REACT MONGODB")
        console.log("File written sucessfully")
    }
    catch(err){
        console.log("File writing failed. Error:")
        console.log(err)
    }
}

async function readData(){
    try{
        const data = await readFile('./src.txt', 'utf-8')
        console.log("File read sucessfully. Data:")
        console.log(data)
    }
    catch(err){
        console.log("File reading failed. Error:")
        console.log(err)
    }
}

async function taskk(){
    await writeData()
    await readData()
}

taskk()
