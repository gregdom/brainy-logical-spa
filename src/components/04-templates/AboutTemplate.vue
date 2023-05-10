<template>
  <div>
    <header-component />
    <hero-component
      titleHero="Quem Somos? Conheça a Brainy Logical"
      subTitleHero="Soluções personalizadas para atender às suas necessidades, com uma equipe dedicada a oferecer serviços de desenvolvimento e programação de websites de qualidade."
    />

    <main>
      <section class="about-page">
        <div class="wrapper">
          <h4></h4>
          <p>
            Começamos a desenvolver software corporativo e trazemos esse nível
            de experiência para todos os projetos que realizamos. Nossos
            cofundadores Nick e Mike tiveram a ideia da The Gnar Company
            enquanto trabalhavam juntos em uma organização empresarial de
            tecnologia da saúde, onde construíram produtos de software de última
            geração. Eles começaram pequenos com projetos de desenvolvimento de
            software contratados à noite e nos fins de semana e, em 2015,
            lançaram o The Gnar em tempo integral. Eles nunca olharam para trás.
          </p>

          <p>
            Nossa equipe é unida e muitos de nós passamos anos trabalhando e
            desenvolvendo software juntos. Após os primeiros meses, Nick e Mike
            trouxeram outro ex-colega de trabalho, Pete Whiting, para se juntar
            a Gnar como chefe de crescimento e atendimento ao cliente. A coesão
            de nossa equipe nos ajuda a resolver os problemas de software mais
            complicados de nossos clientes na velocidade da luz. Todos nós
            contamos uns com os outros para dar uma mão ou uma ideia quando é
            necessário. Por exemplo, cada linha de código escrita por um
            engenheiro Gnar é revisada por outro, a fim de garantir a alta
            qualidade consistente de todo o nosso código.
          </p>

          <p>
            Se criar produtos de software personalizados confiáveis e bem
            projetados que as empresas e os usuários adoram é o nosso pão com
            manteiga, então criar parcerias positivas com nossos clientes é o
            nosso molho secreto. Temos orgulho de nossa reputação de sermos
            trabalhadores e despreocupados. Estamos no nosso melhor quando
            aplicamos nosso profundo amor pelo código e nossos anos de
            experiência em engenharia às necessidades e visões de nossos
            clientes. Nenhum desafio é muito assustador; nenhum projeto muito
            complicado. Quando estamos com você no gnar, é quando prosperamos.
          </p>
        </div>
      </section>
    </main>

    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    FooterComponent,
  },
  mounted() {
    let callToAction = document.querySelector('.call-to-action')
    callToAction.style.display = 'none'
  },
}
</script>

<style lang="scss" scoped>
.about-page {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 64px 0 64px 0;
  background: #fff;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-bottom: 20px;
      font-size: $font-size-base;
      line-height: $general-line-height;
      color: $color-general-text;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (min-width: 600px) {
  .about-page {
    .wrapper {
      width: 500px;
    }
  }
}

@media (min-width: 768px) {
  .about-page {
    .wrapper {
      width: 90%;
      max-width: 940px;
    }
  }
}
</style>
