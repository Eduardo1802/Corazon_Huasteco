const { Selector } = require("testcafe");

fixture`Testiando el registro`.page("https://corazon-huasteco.com/registro");

test('Validar el registro', async (t) => {
    const btnValidar = await Selector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth[aria-label="Validar correo electronico"]');
    const alert = await Selector('.MuiAlert-message.css-1xsto0d');
    
    await t
        .typeText('[name="name"]', "Eduardo")
        .typeText('[name="lastName"]', "Azuara")
        .typeText('[name="age"]', "21")
        .typeText('[name="gender"]', "Masculino")
        .typeText('[name="ocupation"]', "Estudiante")
        .typeText('[name="zipCode"]', "43000")
        .typeText('[name="state"]', "Hidalgo")
        .typeText('[name="email"]', "eduardo1802gmail.com")
        .click(btnValidar)
        .expect(alert.innerText).contains("Tu correo es real, procede con el registro");
});
