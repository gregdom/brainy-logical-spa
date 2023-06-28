<template>
  <div
    v-if="situation"
    class="notification-status"
    :class="{
      'active-success': submitSituation.statusCode === 200,
      'active-error': submitSituation.statusCode !== 200,
    }"
  >
    <div class="icon">
      <span
        v-if="submitSituation.statusCode === 200"
        class="material-symbols-outlined"
        >done</span
      >
      <span v-else class="material-symbols-outlined"> close </span>
    </div>
    <div>
      <p class="title">{{ submitSituation.title }}</p>
      <p>{{ submitSituation.message }}</p>
    </div>
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    situation: {
      type: Boolean,
      required: false,
    },
    submitSituation: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      progress: 100,
    }
  },
  mounted() {
    // Iniciar a contagem regressiva da barra de progresso
    this.startProgressBar()
  },
  methods: {
    startProgressBar() {
      const interval = setInterval(() => {
        this.progress -= 1

        if (this.progress <= 0) {
          clearInterval(interval)
          this.$emit('progress-complete', false) // Emitir evento indicando que a barra de progresso chegou a zero
        }
      }, 50)
    },
  },
}
</script>

<style lang="scss" scoped>
.notification-status {
  position: fixed;
  z-index: 5000;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: 290px;
  max-width: 300px;
  padding: 22px 22px 22px 22px;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out forwards;
  box-shadow: 0 2px 8px 0 rgba(9, 30, 54, 0.1), 0 1px 3px 0 rgba(7, 16, 33, 0.1);
  background: $color-white;

  @keyframes slideIn {
    from {
      bottom: -300px;
    }
    to {
      bottom: 32px;
    }
  }

  .icon {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: $color-white;
    }
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: $color-general-text-bglight;
  }

  p.title {
    margin-bottom: 8px;
    font-weight: 600;
    color: $color-general-headers;
  }

  .progress-bar {
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.1s linear;
  }

  &.active-success {
    .progress-bar {
      background-color: $color-success;
    }

    .icon {
      background: $color-success;
    }
  }

  &.active-error {
    .progress-bar {
      background-color: $color-error;
    }

    .icon {
      background: $color-error;
    }
  }
}
</style>
