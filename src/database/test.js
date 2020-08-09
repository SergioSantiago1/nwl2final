const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    //inserir dados

    proffyValue = {
        name: 'Sergio Santiago', 
        avatar: "https://cdn-ofuxico.akamaized.net/img/upload/noticias/2020/03/07/sergio-mallandro_372803_36.jpg", 
        whatsapp: "9000000", 
        bio: "Tentando aprender programaçaõ para se ter um bom salário e afins"
    }

    classValue = {
        subject: 1, 
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados inseridos

    //todos os proffys

    const selectedProffys =  await db.all("SELECT * FROM proffys")

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})