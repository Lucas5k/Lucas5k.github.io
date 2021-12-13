const headerFilho = document.getElementById('header-Filho');
const sectionSobreMim = document.querySelector('.container-sm')
const sectionPerfil = document.querySelector('.sectionPerfil');

const createH5 = () => {
  const h4 = document.createElement('h4');
  h4.className = 'h4 display-6';
  h4.innerText = 'portfólio';
  headerFilho.appendChild(h4)
};

const createH1 = () => {
  const h1 = document.createElement('h1');
  h1.className = 'h1 display-1';
  h1.innerText = 'Lucas Cabral';
  headerFilho.appendChild(h1);
}

const createP = () => {
  const tagP = document.createElement('p');
  tagP.className = 'lead elementP';
  tagP.innerText = 'Estudante de desenvolvimento de Software na Trybe!'
  headerFilho.appendChild(tagP);
}

const h3SobreMim = () => {
  const elementh3 = document.createElement('h3');
  elementh3.className = 'h2 text-center';
  elementh3.id = 'Sobre-mim'
  elementh3.innerText = 'Sobre...';
  sectionSobreMim.appendChild(elementh3);
}

window.onload = () => {
  createH5();
  createH1();
  createP();
  h3SobreMim();
}