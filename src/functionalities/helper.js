import { readProfileData, readFromDatabase, addToDatabase, updateToDatabase, addProfileData, updateProfileData } from "./firebase/request";

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

export const formatConsultatiiUser = (data) => {
    const newData = [];
    Object.entries(data).forEach(([key, val]) => {
        newData.push({ ...val, key: key });
    })
    return newData;
}

export const formatGlicemieUser = (data) => {
    const newData = [];
    Object.entries(data).forEach(([key, value]) => {
        newData.push(parseInt(value));
    })
    return newData;
}

export const handleGlicemieDataForParametrii = async () => {
    const id = localStorage.getItem('id');
    let data = await readProfileData("glicemie")
    let key = [];
    let value = [];
    if (!!data) {
        key = Object.keys(data);
        value = Object.values(data);
    }
    if (!!data && key.length >= 20) {
        const dataGli = await readFromDatabase(`profile/parametrii/${id}/glicemie`)
        const newData = {}
        for (let i = 1; i < 20; i++) {
            newData[key[i]] = value[i];
        }
        await updateToDatabase(`profile/glicemie/${id}`, newData);
        await addToDatabase(`profile/glicemie/${id}`, dataGli);

    } else {
        const dataGli = await readFromDatabase(`profile/parametrii/${id}/glicemie`)
        console.log("glicemie", dataGli);
        await addToDatabase(`profile/glicemie/${id}`, dataGli);
    }
}

export const handleGlicemieData = async (data, newData) => {
    const id = localStorage.getItem("id");
    if (!!data && data.length >= 20) {
        const handleData = {}
        for (let i = 1; i < 20; i++) {
            handleData[[i]] = data[i];
        }
        await updateToDatabase(`profile/glicemie/${id}`, handleData);
        await addProfileData(newData, `glicemie`)
        await updateToDatabase(`profile/parametrii/${id}/glicemie`, newData)
    } else {
        await addProfileData(newData, `glicemie`)
        await updateToDatabase(`profile/parametrii/${id}/glicemie`, newData)
    }
}