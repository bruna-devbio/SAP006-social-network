import { navigation } from '../../navigation.js';

export const Welcome = () => {
  const template = `
    <section class="content-welcome">
      <section class="logotipo">
        <img src="./img/logo.png" alt="Logotipo do Fort" class="logoimg">
      </section>
      <section class="welcome-bar">
        <div class="welcome-content">
          <header class="welcome-bar-header">
            Bem-vinda, mulher!
          </header>
          <main class="welcome-paragraph">
            <p class="welcome-text">Fort é uma rede social exclusiva para mulheres!</p> 
            <button class="btn-continue-welcome" id="btn-continue">Continuar</button>
            <button class="skipbutton">Pular</button>
          </section>
        </div>   
      </section>
    </section>
`;
  const rootElement = document.createElement('div');
  rootElement.setAttribute('class', 'container');
  rootElement.innerHTML = template;

  const continueBtn = rootElement.querySelector('.btn-continue-welcome');
  continueBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navigation('/conecte');
  });

  const skipBtn = rootElement.querySelector('.skipbutton');
  skipBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navigation('/login');
  });
  return rootElement;
};
