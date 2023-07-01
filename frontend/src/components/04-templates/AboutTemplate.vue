<template>
  <div>
    <header-component />
    <divider-horizontal />
    <hero-about titleHero="Qualidade e comprometimento" />
    <main>
      <about-component />
      <!-- <section class="section about-page">
        <div class="container-default">
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
      </section> -->
    </main>
    <testimonial-component />
    <footer-component />
  </div>
</template>

<script>
import { DividerHorizontal } from '../01-atoms'
import {
  HeaderComponent,
  HeroAbout,
  AboutComponent,
  TestimonialComponent,
  FooterComponent,
} from '../03-organisms'

export default {
  name: 'AboutTemplate',
  components: {
    DividerHorizontal,
    HeaderComponent,
    HeroAbout,
    AboutComponent,
    TestimonialComponent,
    FooterComponent,
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.about-page {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 60px;

  .container-default {
    max-width: 1257px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;

    p {
      max-width: none;
      margin-bottom: 16px;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.687em;
      letter-spacing: -0.01em;
      color: $color-general-text-bglight;
    }
  }
}

// @media (min-width: 600px) {
//   .about-page {
//     .wrapper {
//       width: 500px;
//     }
//   }
// }

// @media (min-width: 768px) {
//   .about-page {
//     .wrapper {
//       width: 90%;
//       max-width: 940px;
//     }
//   }
// }
</style>
