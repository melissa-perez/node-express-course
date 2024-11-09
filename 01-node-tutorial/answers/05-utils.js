const todayDate = (name) => {
    const today = new Date();
    console.log(`Hello ${name}. Today is the ${today.getDate()}.`)
}

module.exports = todayDate