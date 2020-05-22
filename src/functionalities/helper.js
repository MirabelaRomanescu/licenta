export const formatAlimentatieData = (data) => {
    const newData = []
    Object.entries(data).forEach(([key, val]) => {
        newData.push(val);
    });
    const finalData = newData.map(item => item = { ...item, "kcal100g": parseInt(item.kcal100g) });
    return finalData;
}
