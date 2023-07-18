import { Selector } from 'testcafe';

fixture('App Tests')
  .page('http://localhost:5173/inicio'); 

test('Debe mostrar el título correcto', async t => {
  const title = Selector('a'); 
  await t.expect(title.innerText).eql('CORAZÓN HUASTECO'); 
});
