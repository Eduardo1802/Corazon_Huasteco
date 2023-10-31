import { Selector } from 'testcafe';

fixture`SobreNosotros Page`
    .page`https://corazon-huasteco.com/sobre-nosotros`; 

test('Debe mostrar el título "Sobre nosotros"', async (t) => {
    const title = Selector('h4').withText('Sobre nosotros');
    await t.expect(title.exists).ok();
});

test('Debe mostrar el equipo de desarrolladores', async (t) => {
    const teamMembers = Selector('.AvatarItem');
    
    // Esperar 5 segundos para que los elementos se carguen
    await t.wait(5000);

    await t.expect(teamMembers.count).eql(5); 
});
