import { Selector } from 'testcafe';

fixture`Pruebas de enlaces en SobreNosotros`
    .page`https://corazon-huasteco.com/sobre-nosotros`;

test('El enlace de Eduardo Azuara debe funcionar', async (t) => {
    const laloLink = Selector('[data-testid="lalo-link"]');

    // Verifica que la URL de la página sea la correcta antes de interactuar con los elementos.
    await t.expect(await t.eval(() => window.location.href)).eql('https://corazon-huasteco.com/sobre-nosotros');

    // Espera un tiempo para asegurarse de que la página se cargue completamente.
    await t.wait(3000); // Puedes ajustar el tiempo de espera según sea necesario.

    // Intenta hacer clic en el enlace.
    await t.click(laloLink);

    // Espera un tiempo adicional si es necesario para que la página cargue después del clic.
    await t.wait(3000); // Puedes ajustar el tiempo de espera según sea necesario.

    // Verifica que el elemento con el texto 'Eduardo Azuara' existe en la página.
    await t.expect(Selector('a').withText('Eduardo Azuara').exists).ok();
});
