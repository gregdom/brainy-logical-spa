<template>
  <section class="section what-is-services">
    <div class="container-default">
      <div class="top">
        <div class="subtitle">Definição</div>
        <h2>Veja o que é uma Extensão de Navegador</h2>
      </div>

      <div class="bottom">
        <p>
          Uma extensão de navegador é um pequeno programa ou complemento que
          adiciona funcionalidades extras ao navegador web. Ela pode alterar a
          aparência, adicionar recursos e melhorar a produtividade do usuário
          durante a navegação na internet.
        </p>

        <p>
          As extensões podem ser desenvolvidas para navegadores populares, como
          Chrome, Firefox e Safari, e oferecem uma maneira conveniente de
          personalizar a experiência de uso.
        </p>

        <p>
          Ter uma extensão personalizada pode trazer uma série de benefícios
          para empresas e pessoas, proporcionando uma experiência de navegação
          mais eficiente e adaptada às necessidades específicas.
        </p>

        <p class="benefits">Benefícios</p>

        <ul>
          <li>
            <b>Produtividade aprimorada:</b> Uma extensão pode adicionar
            recursos e ferramentas que ajudam a automatizar tarefas, simplificar
            processos e economizar tempo.
          </li>
          <li>
            <b>Customização:</b> Uma extensão permite personalizar a aparência e
            o comportamento do navegador de acordo com as preferências
            individuais.
          </li>
          <li>
            <b>Segurança reforçada:</b> Extensões podem fornecer recursos de
            segurança adicionais, como bloqueadores de anúncios, antivírus e
            gerenciadores de senhas.
          </li>
          <li>
            <b>Acesso rápido a informações:</b> Com uma extensão, é possível ter
            acesso instantâneo a dados relevantes, como previsão do tempo,
            cotações de ações ou traduções.
          </li>
          <li>
            <b>Integração com serviços:</b> Extensões podem ser desenvolvidas
            para se conectar a serviços online, facilitando o acesso e o
            gerenciamento de contas.
          </li>
          <li>
            <b>Aumento da eficiência:</b> Ao adicionar recursos específicos, uma
            extensão pode otimizar fluxos de trabalho e facilitar a realização
            de tarefas diárias.
          </li>
          <li>
            <b>Personalização de conteúdo:</b> Com uma extensão, é possível
            filtrar e personalizar o conteúdo da web de acordo com interesses e
            preferências.
          </li>
          <li>
            <b>Melhoria da experiência do usuário:</b> Extensões podem melhorar
            a usabilidade de sites e aplicativos, tornando a navegação mais
            intuitiva e fluida.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhatIsServicePresentation',
  components: {},

  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss">
.what-is-services {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;

    .top {
      max-width: 575px;
      margin-bottom: 20px;

      div.subtitle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 1em;
        color: $color-branding;
      }

      h2 {
        margin-top: 0px;
        margin-bottom: 25px;
        font-size: 26px;
        line-height: 1.368em;
        font-weight: 800;
        letter-spacing: -0.02em;
        text-shadow: 0 3px 6px rgba(39, 99, 228, 0.11);
        color: $color-general-headers;
      }
    }

    .bottom {
      p {
        max-width: none;
        margin-bottom: 16px;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.687em;
        letter-spacing: -0.01em;
        color: $color-general-text-bglight;

        &.benefits {
          margin-top: 20px;
          margin-bottom: 5px;
          font-size: 18px;
          color: $color-branding;
        }
      }

      ul {
        list-style: none;

        li {
          max-width: none;
          margin-bottom: 16px;
          padding: 0;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.687em;
          letter-spacing: -0.01em;
          color: $color-general-text-bglight;
        }
      }
    }
  }
}

@media screen and (min-width: 480px) {
  .what-is-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;

    .container-default {
      padding-left: 24px;
      padding-right: 24px;

      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 10px;
        }

        h2 {
          font-size: 31px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .what-is-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;

        div.subtitle {
          margin-bottom: 16px;
        }

        h2 {
          font-size: 38px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .what-is-services {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-top: 130px;
    padding-bottom: 120px;

    .container-default {
      .top {
        max-width: 575px;
        margin-bottom: 20px;
      }

      .bottom {
        column-count: 2;

        p {
          max-width: none;
          margin-bottom: 16px;
          padding-right: 24px;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.687em;
          letter-spacing: -0.01em;
          color: $color-general-text-bglight;
        }

        ul {
          list-style: none;
          padding-right: 24px;

          li {
            max-width: none;
            margin-bottom: 16px;
            padding: 0;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.687em;
            letter-spacing: -0.01em;
            color: $color-general-text-bglight;
          }
        }
      }
    }
  }
}
</style>
