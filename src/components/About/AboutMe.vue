<script setup lang="ts"></script>

<template>
  <div class="main-about">
    <div class="about-box">
      <div class="title">Sobre o Projeto</div>
      <div class="body">
        <div>Plataforma criada para iniciantes no aprendizado de japonês.</div>
        <br />
        <div>
          Todo seu progresso é salvo no seu navegador. Logo, sempre use o mesmo navegador e tome
          cuidado ao limpar o cache, pois todo o progresso será perdido.
        </div>
        <br />
        <div>
          Caso encontre algum problema ou possua alguma sugestão, entre em contato pelo discord
          (link no final da página).
        </div>
        <br />
        <div>No mais, faça bom uso da plataforma!</div>
        <br />
      </div>
      <div class="contacts">
        Contato: <br />
        <Button
          label="Discord"
          onclick="window.open('https://discord.gg/arKvMu4Z')"
          icon="pi pi-discord"
          size="small"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-about {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-box {
  color: white;
  width: 50%;
  padding: 25px;
  text-align: center;
  border: 1px solid #e59ab6;
  border-radius: 8px;
  background-color: #e59ab6;
}
.title {
  font-size: 30px;
}
.body {
  font-size: 22px;
}
.contacts {
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  .about-box {
    color: white;
    width: 80%;
    padding: 10px;
    margin: 25px;
    text-align: center;
    border: 1px solid #e59ab6;
    border-radius: 8px;
    background-color: #e59ab6;
  }
}
</style>
