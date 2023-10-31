const { Selector } = require("testcafe");

fixture`Testiando el registro`.page("https://corazon-huasteco.com/registro");

test('Validar el registro', async (t) => {
    const btnValidar = await Selector('.MuiButton-contained.MuiButton-containedPrimary.MuiButton-fullWidth').withText('Validar');
    const btnEnviar = await Selector('.MuiButton-contained.MuiButton-containedPrimary.MuiButton-fullWidth').withText('Registrar');

    await t
        .typeText('[name="name"]', "Eduardo")
        .typeText('[name="lastName"]', "Azuara")
        .typeText('[name="age"]', "21")
        .typeText('[name="gender"]', "Masculino")
        .typeText('[name="ocupation"]', "Estudiante")
        .typeText('[name="zipCode"]', "43000")
        .typeText('[name="email"]', "eduardoazuara1802.com")
        .click(btnValidar)
        .typeText('[name="password"]', "Eduardo18@")
        .typeText('[name="repeatPassword"]', "Eduardo18@")
        .typeText('[name="secretQuestion"]', "¿Nombre de primera mascota?")
        .click('[name="checkBoxValue"]')
        .click(btnEnviar)
        .expect(t.eval(() => window.location.href)).eql('https://corazon-huasteco.com/user/consultor');
});
