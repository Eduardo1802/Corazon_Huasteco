import { Selector } from 'testcafe';

fixture`Pruebas de enlaces en SobreNosotros`
    .page`https://corazon-huasteco.com/sobre-nosotros`;

test('El enlace de Eduardo Azuara debe funcionar', async (t) => {
    const laloLink = Selector('[data-testid="lalo-link"]');
    await t
        .click(laloLink)
        .expect(Selector('a').withText('Eduardo Azuara').exists).ok();
});
