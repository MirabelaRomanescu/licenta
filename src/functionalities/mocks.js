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
    { path: "/alimentatie/fructe", text: "Fructe" },
    { path: "/alimentatie/legume", text: "Legume" },
    { path: "/alimentatie/fainoase", text: "Fainoase" },
    { path: "/alimentatie/dulciuri", text: "Dulciuri" },
    { path: "/alimentatie/calculator", text: "Calculeaza-mi masa" }
]

export const addAlimenteToDatabase = [
    { value: "", name: "denumire", type: "text", placeholder: "denumire" },
    { value: "", name: "kcal100g", type: "number", placeholder: "kcal/100g" },
    { value: "", name: "kcalportie", type: "text", placeholder: "kcal/portie" },
    {
        value: [
            { value: "fructe", label: "fructe", name: 'categorie' },
            { value: "legume", label: "legume", name: 'categorie' },
            { value: "carne", label: "carne", name: 'categorie' },
            { value: "lactate", label: "lactate", name: 'categorie' },
            { value: "fainoase", label: "fainoase", name: 'categorie' },
        ], name: "categorie", type: "select", placeholder: "Categorie"
    },
    {
        value: [
            { value: "high", label: "high", name: "indice glicemie" },
            { value: "low", label: "low", name: "indice glicemie" },
            { value: "medium", label: "medium", name: "indice glicemie" },
        ], name: "indice glicemie", type: "select", placeholder: "Indice glicemie"
    }
]