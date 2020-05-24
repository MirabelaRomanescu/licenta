import { readUserdata, readFromDatabase, addToDatabase, updateToDatabase } from "./firebase/request";

export const formatAlimentatieData = (data) => {
    const newData = []
    Object.entries(data).forEach(([key, val]) => {
        newData.push(val);
    });
    const finalData = newData.map(item => item = { ...item, "kcal100g": parseInt(item.kcal100g), "kcalportie": parseInt(item.kcalportie) });
    return finalData;
}

export const formatPrametriiUser = (data) => {
    const newData = [];
    Object.entries(data).forEach(([key, val]) => {
        newData.push({
            name: key,
            value: parseInt(val)
        })
    })
    return newData
}

export const handleGlicemieData = async () => {
    const id = localStorage.getItem('id');
    let data = await readUserdata("glicemie")
    let key = [];
    let value = [];
    if (!!data) {
        key = Object.keys(data);
        value = Object.values(data);
    }
    if (!!data && key.length >= 10) {
        const dataGli = await readFromDatabase(`profile/parametrii/${id}/glicemie`)
        const newData = {}
        for (let i = 1; i < 10; i++) {
            newData[key[i]] = value[i];
        }
        console.log(newData)

        await updateToDatabase(`profile/glicemie/${id}`, newData);
        await addToDatabase(`profile/glicemie/${id}`, dataGli);

    } else {
        const dataGli = await readFromDatabase(`profile/parametrii/${id}/glicemie`)
        console.log("glicemie", dataGli);
        await addToDatabase(`profile/glicemie/${id}`, dataGli);
    }
}