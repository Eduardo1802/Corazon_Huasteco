const { Selector } = require("testcafe");

fixture`Testiando el registro`.page("https://corazon-huasteco.com/registro");

test('Validar el registro', async (t) => {
    const btnValidar = await Selector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth[aria-label="Validar correo electronico"]');
    const btnEnviar = await Selector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth[aria-label="enviar formulario para registro en corazon huasteco"]');

    await t
        .typeText('[name="name"]', "Eduardo")
        .typeText('[name="lastName"]', "Azuara")
        .typeText('[name="age"]', "21")
        .typeText('[name="gender"]', "Masculino")
        .typeText('[name="ocupation"]', "Estudiante")
        .typeText('[name="zipCode"]', "43000")
        .typeText('[name="state"]', "Hidalgo")
        .click(btnValidar)
        .click(btnValidar)
        .click(btnValidar)
        .typeText('[name="password"]', "Eduardo18@")
        .typeText('[name="repeatPassword"]', "Eduardo18@")
        .typeText('[name="secretQuestion"]', "¿Nombre de primera mascota?")
        .click('[name="checkBoxValue"]')
        .click(btnEnviar)
        .expect(t.eval(() => window.location.href)).eql('https://corazon-huasteco.com/user/consultor');
});
