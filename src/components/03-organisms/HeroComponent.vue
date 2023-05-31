<template>
  <div class="envolt">
    <section class="hero">
      <div class="wrapper">
        <h1>{{ titleHero }}</h1>
        <h2>{{ subTitleHero }}</h2>

        <button-call-to-action buttonText="Nossos Projetos" />
        <div class="arrow-bottom">
          <span class="material-symbols-outlined"> arrow_drop_down </span>
        </div>
      </div>
    </section>
    <div class="shadow"></div>
  </div>
</template>

<script>
import { ButtonCallToAction } from '../01-atoms'

export default {
  components: { ButtonCallToAction },
  props: {
    titleHero: {
      type: String,
      required: true,
    },
    subTitleHero: {
      type: String,
      required: true,
    },
  },
  methods: {
    highlightText() {
      let palavra1 = document.querySelector('h1')
      let texto = palavra1.textContent

      // Define a palavra a ser destacada com uma classe de destaque
      let palavraDestaque = 'Transformar'
      let palavraDestaqueComSpan =
        '<span class="highlightColorText">' + palavraDestaque + '</span>'

      // Define a palavra animada com uma classe de animação
      let palavraAnimada = 'Presença'
      let palavraAnimadaComSpan =
        '<span class="animated-word">' + palavraAnimada + '</span>'

      // Substitui a palavra destacada e animada pelo texto original com os spans adicionados
      texto = texto.replace(palavraDestaque, palavraDestaqueComSpan)
      texto = texto.replace(palavraAnimada, palavraAnimadaComSpan)

      // Atualiza o conteúdo do elemento H1 com o novo texto
      palavra1.innerHTML = texto
      setTimeout(() => {
        this.animation()
      }, 1000)
    },
    animation() {
      let teste = document.querySelector('.animated-word')
      teste.classList.add('active')
    },
  },
  mounted() {
    if (this.$route.path === '/') {
      this.highlightText()
      let arrowBottom = document.querySelector('.arrow-bottom')
      arrowBottom.style.display = 'none'
    }
  },
}
</script>

<style lang="scss">
.highlightColorText {
  color: $color-highlight;
}

.animated-word {
  position: relative;
  display: inline-block;
}

.animated-word::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: $color-highlight;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s ease-in-out;
}

.animated-word.active::after {
  transform: scaleX(1);
}

// Start
.envolt {
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    bottom: 10px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #aaa;
    box-shadow: 0 15px 10px rgba(170, 170, 170, 0.9);
    transform: rotate(-4deg);
  }

  &::after {
    z-index: -1;
    position: absolute;
    content: '';
    bottom: 10px;
    right: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #aaa;
    box-shadow: 0 15px 10px rgba(170, 170, 170, 0.9);
    transform: rotate(4deg);
  }
}

.hero {
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 137px 0 64px 0;
  background: $color-branding-gradient;

  .wrapper {
    width: calc(100% - 48px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 32px;
      font-size: calc(1.525rem + 3.3vw);
      font-weight: 700;
      text-align: center;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      color: #fff;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: $general-line-height;
      text-align: center;
      margin-bottom: 37px;
      color: #ffffff;
    }

    & > * {
      margin-bottom: 37px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }

    .call-to-action {
      background: $color-highlight;
      color: #33373b;
    }

    .arrow-bottom {
      position: absolute;
      z-index: 1000;
      left: 50%;
      transform: translateX(-50%);
      bottom: -24px;
      width: 48px;
      height: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 1.25rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      color: $color-general-text;
      background: $color-highlight;
    }
  }
}

@media (min-width: 600px) {
  .hero {
    padding: 137px 0 84px 0;

    .wrapper {
      width: 500px;

      h1 {
        font-size: 50px;
      }
    }
  }
}

@media (min-width: 768px) {
  .hero {
    .wrapper {
      width: 680px;

      .call-to-action {
        width: 40%;
        margin: 0 auto;
      }
    }
  }
}
</style>
