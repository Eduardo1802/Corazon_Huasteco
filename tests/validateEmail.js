const { Selector } = require("testcafe");

fixture`Testiando el registro`.page("https://corazon-huasteco.com/registro");

test('Validar el registro', async (t) => {
    const btnValidar = await Selector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth[aria-label="Validar correo electronico"]');

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
        const alert = await Selector('.MuiAlert-root.MuiAlert-filledInfo');
        await t.expect(alert.exists).ok();
});
