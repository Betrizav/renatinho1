window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js");
    }
  };

  const time1Input = document.getElementById("time1");
  const time2Input = document.getElementById("time2");
  const time1ponto = document.getElementById("time1ponto");
  const time2ponto = document.getElementById("time2ponto");
  const nomedotime1 = document.getElementById("nomedotime1");
  const nomedotime2 = document.getElementById("nomedotime2");
  const novonome1 = document.getElementById("novonome1");
  const novonome2 = document.getElementById("novonome2");
  
  let pontuacaotime1 = 0;
  let pontuacaotime2 = 0;
  
  function salvar() {
    novonome1.textContent = nomedotime1.value;
    novonome2.textContent = nomedotime2.value;
  }
  
  
  document.getElementById("umponto").addEventListener("click", () => {
    pontuacaotime1 += 1;
    updatepontuacao();
  });
  
  document.getElementById("tresponto").addEventListener("click", () => {
    pontuacaotime1 += 3;
    updatepontuacao();
  });
  
  document.getElementById("seisponto").addEventListener("click", () => {
    pontuacaotime1 += 6;
    updatepontuacao();
  });
  
  document.getElementById("dozeponto").addEventListener("click", () => {
    pontuacaotime1 += 10;
    updatepontuacao();
  });
  
  function updatepontuacao() {
    if (pontuacaotime1 >= 12) {
      pontuacaotime1 = 0;
      pontuacaotime2 = 0;
      alert(`Time ${novonome1.textContent} ganhou!`)
    }
  
    time1ponto.textContent = `${pontuacaotime1}`;
    time2ponto.textContent = `${pontuacaotime2}`;
  }
  document.getElementById('reset').addEventListener('click', () => {
    pontuacaotime1 = 0;
    pontuacaotime2 = 0;
    updatepontuacao();
    updatepontuacaoum();
  });
  
  
  document.getElementById("umponto2").addEventListener("click", () => {
    pontuacaotime2 += 1;
    updatepontuacaoum();
  });
  
  document.getElementById("tresponto2").addEventListener("click", () => {
    pontuacaotime2 += 3;
    updatepontuacaoum();
  });
  
  document.getElementById("seisponto2").addEventListener("click", () => {
    pontuacaotime2 += 6;
    updatepontuacaoum();
  });
  
  document.getElementById("dozeponto2").addEventListener("click", () => {
    pontuacaotime2 += 10;
    updatepontuacaoum();
  });
  
  function updatepontuacaoum() {
    if (pontuacaotime2 >= 12) {
      pontuacaotime1 = 0;
      pontuacaotime2 = 0;
      alert(`Time ${novonome2.textContent} ganhou!`)
    }
  
    time1ponto.textContent = `${pontuacaotime1}`;
    time2ponto.textContent = `${pontuacaotime2}`;
  }
  document.getElementById('resetum').addEventListener('click', () => {
    pontuacaotime1 = 0;
    pontuacaotime2 = 0;
    updatepontuacaoum();
  });
  
  time1Input.addEventListener("input", () => {
    pontuacaotime1 = 0;
    time1ponto.textContent = `Time 1: ${pontuacaotime1}`;
  });
  
  time2Input.addEventListener("input", () => {
    pontuacaotime2 = 0;
    time2ponto.textContent = `Time 2: ${pontuacaotime2}`;
  });
  
  
  