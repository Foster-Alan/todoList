const tarefa = 'lista-tarefas';

const click = () => {
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('dblclick', () => {
      list[i].classList.toggle('completed');
    });
  }
};

const click2 = () => {
  const list = document.getElementById(tarefa).children;
  const selected = document.getElementsByClassName('grey');

  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('click', (event) => {
      event.target.classList.add('grey');
      if (selected.length > 1) {
        selected[0].classList.remove('grey');
      }
      event.target.classList.add('grey');
      if (selected.length > 1) {
        selected[1].classList.remove('grey');
      }
    });
  }
};

const addTarefa = () => {
  const btnAdd = document.getElementById('criar-tarefa');
  const text = document.getElementById('texto-tarefa');
  const list = document.getElementById(tarefa);

  btnAdd.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.innerText = text.value;
    click();
    list.appendChild(createLi);
    text.value = '';
    click2();
    click();
  });
};

addTarefa();

const clear = () => {
  const del = document.getElementById('apaga-tudo');
  const list = document.getElementById(tarefa);

  del.addEventListener('click', () => {
    list.innerHTML = '';
  });
};

clear();

const remover = () => {
  const selected = document.getElementsByClassName('completed');
  const remove = document.getElementById('remover-finalizados');

  remove.addEventListener('click', () => {
    for (let i = 0; i < selected.length; i += 1) {
      selected[i].remove();
      selected[i].remove();
    }
  });
};

remover();

const save = () => {
  const btnSave = document.getElementById('salvar-tarefas');

  btnSave.addEventListener('click', () => {
    localStorage.lista = document.getElementById(tarefa).innerHTML;
  });
};

save();

const load = () => {
  const valor = localStorage.getItem('lista');
  const local = document.getElementById(tarefa);
  local.innerHTML = valor;
  remover();
  clear();
  click();
  click2();
};

load();

const up = () => {
  const selected = document.querySelector('.grey');
  if (selected === null || selected.previousElementSibling === null) {
    alert('Não foi possivel mover');
  } else {
    selected.previousElementSibling.before(selected);
  }
};

const cima = document.getElementById('mover-cima');
cima.addEventListener('click', up);

const low = () => {
  const selected = document.querySelector('.grey');
  if (selected === null || selected.nextElementSibling === null) {
    alert('Não foi possivel mover');
  } else {
    selected.nextElementSibling.after(selected);
  }
};

const baixo = document.getElementById('mover-baixo');
baixo.addEventListener('click', low);

const removeselected = () => {
  const selected = document.querySelector('.grey');
  selected.remove();
};

const se = document.getElementById('remover-selecionado');
se.addEventListener('click', removeselected);
