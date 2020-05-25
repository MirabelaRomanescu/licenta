export const userLogin = [
    { value: "", name: "email", type: "email", placeholder: "Email" },
    { value: "", name: "password", type: "password", placeholder: "parola" }
]

export const userRegister = [
    { value: "", name: "email", type: "email", placeholder: "Email" },
    { value: "", name: "password", type: "password", placeholder: "Parola" },
    { value: "", name: "password2", type: "password", placeholder: "Rescrie Parola" }
]

export const editeazaParametrii = [
    { value: "", name: "glicemie", type: "number", placeholder: "Glicemie" },
    { value: "", name: "varsta", type: "number", placeholder: "Varsta" },
    { value: "", name: "greutate", type: "number", placeholder: "Greutate" },
    { value: "", name: "inaltime", type: "number", placeholder: "Inaltime" },
    { value: "", name: "hba1c", type: "number", placeholder: "HbA1C" },
    { value: "", name: "colesterol", type: "number", placeholder: "Colesterol" },
    { value: "", name: "trigliceride", type: "number", placeholder: "Trigliceride" },
    { value: "", name: "tensiune arteriala", type: "number", placeholder: "Tensiune arteriala" },
]

export const createLeftBarProfile = [
    { path: "/profile/parametrii", text: "Parametrii tai" },
    { path: "/profile/glicemie", text: "Glicemie" },
    { path: "/profile/imc", text: "IMC" },
    { path: "/profile/altiparametrii", text: "Alti parametrii" },
    { path: "/profile/consultatii", text: "Consultatii" },
    { path: "/profile/tratamente", text: "Tratamente" }
]

export const createLeftBarAlimente = [
    { path: "/alimentatie/calculator", text: "Calculeaza-mi masa" },
    { path: "/alimentatie/fructeSeminte", text: "Fructe si Seminte" },
    { path: "/alimentatie/legumeCereale", text: "Legume si cereale" },
    { path: "/alimentatie/painePaste", text: "Paine si paste" },
    { path: "/alimentatie/carnePesteMezeluri", text: "Carne/Peste/Mezeluri" },
    { path: "/alimentatie/lactateBranzeturi", text: "Lactate si Branzeturi" },
    { path: "/alimentatie/dulciuriPrajituri", text: "Dulciuri si Prajituri" },
    { path: "/alimentatie/ingredienteCondimente", text: "Ingrediente si Condimente" },
    { path: "/alimentatie/bauturi", text: "Bauturi Alcoolice si Nonalcoolice" }
]

export const addAlimenteToDatabase = [
    { value: "", name: "denumire", type: "text", placeholder: "Denumire" },
    { value: "", name: "kcal100g", type: "number", placeholder: "Kcal/100g" },
    { value: "", name: "kcalportie", type: "number", placeholder: "Kcal/portie" },
    { value: "", name: "definitieportie", type: "text", placeholder: "Definitie portie" },
]

export const valueSelectaddAlimenteToDatabase = [{
    value: [
        { value: "fructeSeminte", label: "Fructe/Seminte", name: 'categorie' },
        { value: "carnePesteMezeluri", label: "Carne/Peste/Mezeluri", name: 'categorie' },
        { value: "bauturi", label: "Bauturi alcoolice/nonalcoolice", name: 'categorie' },
        { value: "lactateBranzeturi", label: "Lactate/Branzeturi", name: 'categorie' },
        { value: "ingredienteCondimente", label: "Ingrediente/Condimente", name: 'categorie' },
        { value: "dulciuriPrajituri", label: "Dulciuri/Prajituri", name: 'categorie' },
        { value: "painePaste", label: "Paine/Paste", name: 'categorie' },
        { value: "legumeCereale", label: "legume/Cereale", name: 'categorie' }
    ],
    name: "categorie",
    placeholder: "Categorie",
    type: "select"
}]