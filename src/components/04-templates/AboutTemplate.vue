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
            A Brainy Logical é uma empresa de desenvolvimento de softwares, web
            e aplicações localizada em Santa Catarina, estado do sul do Brasil.
            Com nossa paixão pela tecnologia e expertise no setor, estamos
            prontos para transformar suas ideias em soluções digitais inovadoras
            e eficientes.
          </p>

          <p>
            Nosso objetivo é fornecer serviços de desenvolvimento personalizados
            que atendam às necessidades exclusivas de cada cliente. Com uma
            equipe altamente qualificada e experiente, combinamos conhecimento
            técnico avançado com criatividade para entregar produtos de alta
            qualidade.
          </p>

          <p>
            Oferecemos uma ampla gama de serviços, incluindo desenvolvimento de
            software personalizado, criação de sites responsivos e intuitivos,
            desenvolvimento de aplicativos móveis, e muito mais. Trabalhamos de
            perto com nossos clientes, entendendo suas metas e requisitos, para
            criar soluções sob medida que impulsionem o crescimento e o sucesso
            de seus negócios.
          </p>

          <p>
            Nossa abordagem é centrada no cliente, colocando suas necessidades e
            objetivos em primeiro lugar. Acreditamos na comunicação transparente
            e no trabalho colaborativo para garantir que as expectativas sejam
            atendidas e superadas. Combinamos as melhores práticas da indústria
            com nossa criatividade e know-how tecnológico para criar produtos
            funcionais, intuitivos e visualmente atraentes.
          </p>

          <p>
            Além disso, estamos sempre atualizados com as últimas tendências e
            avanços tecnológicos. Utilizamos ferramentas e linguagens modernas
            para garantir que nossos projetos sejam desenvolvidos com as
            melhores práticas de desenvolvimento, segurança e desempenho. Também
            estamos atentos às necessidades de SEO, para que seus produtos
            digitais estejam prontos para alcançar um público mais amplo e
            melhorar sua visibilidade online.
          </p>

          <p>
            Se você está procurando uma agência de desenvolvimento confiável,
            criativa e orientada para resultados, a Brainy Logical é a escolha
            certa. Estamos prontos para trabalhar em parceria com você,
            fornecendo soluções digitais que impulsionam o sucesso do seu
            negócio. Entre em contato conosco hoje mesmo para discutir suas
            ideias e iniciar uma jornada tecnológica emocionante!
          </p>
        </div>
      </section>

      <contact-form-component mainTitle="A Gente Faz Seu Projeto" />
    </main>

    <footer-component />
  </div>
</template>

<script>
import {
  HeaderComponent,
  HeroComponent,
  ContactFormComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    ContactFormComponent,
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
