//////// Form Constructor ///////

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
    {
      value: "",
      name: "glicemie",
      type: "number",
      placeholder: "Glicemie (mg/dl)",
    },
    { value: "", name: "varsta", type: "number", placeholder: "Varsta (ani)" },
    { value: "", name: "greutate", type: "number", placeholder: "Greutate (kg)" },
    { value: "", name: "inaltime", type: "number", placeholder: "Inaltime (cm)" },
    {
      value: "",
      name: "hba1c",
      type: "number",
      placeholder: "Hemoglobina glicata (%)",
    },
    {
      value: "",
      name: "colesterol",
      type: "number",
      placeholder: "Colesterol (mg/dl)",
    },
    {
      value: "",
      name: "trigliceride",
      type: "number",
      placeholder: "Trigliceride (mg/dl)",
    },
    {
      value: "",
      name: "tensiune arteriala",
      type: "text",
      placeholder: "Tensiune arteriala (mmHg)",
    },
  ];

export const editeazaConsultaii = [
    { value: "", name: "data", type: "text", placeholder: "Data" },
    { value: "", name: "medic", type: "text", placeholder: "Medic" }
]

export const adaugaMedicamentNou = [
    { value: "", name: "denumire", type: "text", placeholder: "Denumire Medicament" },
    { value: "", name: "FMfarma", type: "text", placeholder: "Forma farmaceutica" },
    { value: "", name: "doza24", type: "text", placeholder: "Doza pe 24 ore" },
    { value: "", name: "dozaUnit", type: "text", placeholder: "Dozaunitara" },

]

export const addAlimenteToDatabase = [
    { value: "", name: "denumire", type: "text", placeholder: "Denumire" },
    { value: "", name: "kcal100g", type: "number", placeholder: "Kcal/100g" },
    { value: "", name: "kcalportie", type: "number", placeholder: "Kcal/portie" },
    { value: "", name: "definitieportie", type: "text", placeholder: "Definitie portie" },
]

export const addGlicemieToDatabase = [
    { value: "", name: "glicemie", type: "number", placeholder: "Glicemie" }
]

////// Select Constructor //////

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

export const valueSelectMomentulAdministrarii = [{
    value: [
        { value: "dimineata", label: "dimineata", name: 'moment' },
        { value: "pranz", label: "pranz", name: 'moment' },
        { value: "seara", label: "seara", name: 'moment' },
    ],
    name: "moment",
    placeholder: "Momentul administrarii",
    type: "select"
}]

//////////  Textarea Constructor /////////////

export const textareaConsultatii = [
    {
        value: "",
        name: "recomandari",
        placeholder: `Te rugam introdu recomandarile medicului aici! Observatie! Daca dai enter ti se va memora schimbarile, pentru a da pe un rand nou te rugam sa folosesti shift+enter. Multumim!`,
        cols: 39,
        rows: 10,
        wrap: "true"
    }
]
export const textareaAddMedicament = [
    {
        value: "",
        name: "observatii",
        placeholder: `Te rugam introdu observatiile aici! Atentie!!! Daca dai enter ti se va memora schimbarile, pentru a da pe un rand nou te rugam sa folosesti shift+enter. Multumim!`,
        cols: 40,
        rows: 10,
        wrap: "true"
    }
]
//////////  LeftBar  Constructor //////////

export const createLeftBarProfile = [
    { path: "/profile/parametrii", text: "Parametrii tăi" },
    { path: "/profile/glicemie", text: "Glicemie & HbA1c" },
    { path: "/profile/imc", text: "IMC" },
    { path: "/profile/altiparametrii", text: "Alți parametrii" },
    { path: "/profile/consultatii", text: "Consultații" },
    { path: "/profile/tratament", text: "Tratament" }
]

export const createLeftBarAlimente = [
    { path: "/alimentatie/calculator", text: "Calculează-mi masa" },
    { path: "/alimentatie/fructeSeminte", text: "Fructe | Semințe" },
    { path: "/alimentatie/legumeCereale", text: "Legume | Cereale" },
    { path: "/alimentatie/painePaste", text: "Paine | Paste | Făinoase"},
    { path: "/alimentatie/carnePesteMezeluri", text: "Carne | Pește | Mezeluri" },
    { path: "/alimentatie/lactateBranzeturi", text: "Lactate | Brânzeturi" },
    { path: "/alimentatie/dulciuriPrajituri", text: "Dulciuri | Prăjituri" },
    { path: "/alimentatie/ingredienteCondimente", text: "Ingrediente | condimente" },
    { path: "/alimentatie/bauturi", text: "Băuturi Alcoolice | Nonalcoolice" }
]

export const createLeftBarDiabet = [
    { path: "/despreDiabet/informatiiGenerale", text: "Informații generale" },
    { path: "/despreDiabet/monitorizare", text: "Monitorizarea diabetului" },
    { path: "/despreDiabet/complicatii", text: "Complicațiile DZ" },
    { path: "/despreDiabet/insulinoterapia", text: "Terapia cu insulină" },
    { path: "/despreDiabet/ado", text: "Antidiabeticele orale" },
    { path: "/despreDiabet/despreAlimentatie", text: "Despre alimentație" },
    { path: "/despreDiabet/terapiiAlternative", text: "Terapii alternative" },
];