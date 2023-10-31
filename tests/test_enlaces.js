import { Selector } from 'testcafe';

fixture`Sobre Nosotros`.page`https://corazon-huasteco.com/sobre-nosotros`;

test('Prueba de enlace "INICIO"', async (t) => {
  const enlaceInicio = Selector('a').withText('INICIO');
  await t.expect(enlaceInicio.exists).ok();
  await t.expect(enlaceInicio.getAttribute('href')).eql('/inicio');
});

test('Prueba de enlace "SOBRE NOSOTROS"', async (t) => {
  const enlaceSobreNosotros = Selector('a').withText('SOBRE NOSOTROS');
  await t.expect(enlaceSobreNosotros.exists).ok();
  await t.expect(enlaceSobreNosotros.getAttribute('href')).eql('/sobre-nosotros');
});
