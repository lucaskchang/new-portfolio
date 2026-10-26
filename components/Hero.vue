<template>
  <div class="flex flex-col lg:flex-row h-[800px] items-center lg:justify-center">
    <div class="flex flex-col w-5/6 lg:w-1/2 lg:items-center lg:justify-center">
      <NuxtImg
        src="/headshot.jpeg"
        alt="Headshot"
        class="rounded-xl max-w-lg"
      />
      <!-- <div class="rounded-xl w-1/2 h-3/4 bg-black"></div> -->
    </div>
    <div class="flex flex-col w-5/6 lg:w-1/2 justify-center lg:h-full">
      <div class="min-h-96 lg:w-3/4">
        <p class="text-3xl lg:text-4xl font-bold">
          Hi, I'm <span class="text-primary">
            <motion.svg
              viewBox="0 0 735 455"
              fill="none"
              initial="hidden"
              animate="visible"
              :style="image"
              class="inline-block h-[1.2em] lg:h-[1.4em] w-auto align-baseline translate-y-[0.4em]"
            >
              <motion.path
                d="M29.1606 25L29.1614 25.1C32.1484 74.6734 33.1519 111.882 32.1721 136.727C31.1922 161.571 29.253 186.434 26.3544 211.316C23.4559 236.198 25.2095 260.729 31.6152 284.91C38.0209 309.09 51.8942 321.568 73.2351 322.345C94.576 323.121 116.874 321.482 140.13 317.426C163.386 313.371 180.219 309.884 190.629 306.967L206.144 302.591L206.244 302.59"
                stroke-width="50"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#FF9D00"
                :variants="draw"
                :custom="0"
              />
              <motion.path
                d="M264.568 156.69L264.599 156.785C271.7 206.083 276.195 242.719 278.082 266.693C279.969 290.666 291.182 307.38 311.721 316.836C332.259 326.291 349.246 322.482 362.681 305.409C376.117 288.336 385.346 267.381 390.37 242.543C395.394 217.706 395.334 198.26 390.188 184.205C385.042 170.15 382.495 163.114 382.547 163.097L382.596 163.167L382.624 163.071"
                stroke-width="50"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#FF9D00"
                :variants="draw"
                :custom="1"
              />
              <motion.path
                d="M523.032 151.69L522.989 151.78C480.839 172.658 458.759 194.925 456.747 218.581C454.735 242.236 454.941 266.057 457.364 290.042C459.787 314.028 473.472 324.661 498.42 321.943C523.367 319.224 541.617 315.155 553.17 309.735C564.723 304.316 571.096 302.943 572.291 305.617L573.994 309.583L574.083 309.629"
                stroke-width="50"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#FF9D00"
                :variants="draw"
                :custom="2"
              />
              <motion.path
                d="M713.167 142.69L713.134 142.784C680.414 179.268 660.158 209.473 652.365 233.398C644.572 257.323 645.873 279.674 656.269 300.451C666.665 321.229 682.21 325.087 702.904 312.025C723.597 298.963 734.055 280.068 734.275 255.339C734.496 230.611 735.404 208.798 736.999 189.902C738.594 171.006 740.073 161.604 741.435 161.696L743.442 161.927L743.479 161.834"
                stroke-width="50"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#FF9D00"
                :variants="draw"
                :custom="3"
              />
              <motion.path
                d="M753.448 182.939L753.509 183.019C774.235 224.819 792.704 254.021 808.915 270.627C825.127 287.233 837.804 299.155 846.945 306.394C856.086 313.632 860.337 317.732 859.698 318.695L858.68 320.06L858.741 320.139"
                stroke-width="50"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#FF9D00"
                :variants="draw"
                :custom="4"
              />
              <motion.path
                d="M971.557 143L971.517 143.092C922.15 150.556 896.795 161.323 895.454 175.395C894.112 189.467 905.508 200.611 929.644 208.827C953.779 217.043 978.152 221.143 1002.76 221.126C1027.37 221.108 1038.98 233.506 1037.59 258.319C1036.2 283.132 1023.38 299.017 999.12 305.976C974.864 312.934 957.526 317.011 947.106 318.207L931.54 319.924L931.475 320"
                stroke-width="50"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#FF9D00"
                :variants="draw"
                :custom="5"
              />
            </motion.svg>
          </span>
          <span class="ml-[1.1em] lg:ml-[1.2em]">Chang</span>
        </p>
        <motion.svg
          width="708"
          height="46"
          viewBox="0 0 708 46"
          initial="hidden"
          animate="visible"
          :style="image"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="-translate-y-[1em] lg:translate-y-0 lg:block"
        >
          <motion.path
            d="M41.7235 6.97426C44.3821 7.0756 47.0407 7.17694 155.123 6.99575C263.205 6.81456 476.631 6.34778 586.062 6.19008C695.494 6.03238 694.463 6.19792 692.766 6.25921C691.069 6.3205 688.736 6.27254 575.05 9.04661C461.365 11.8207 236.397 17.4183 120.017 20.2218C3.63593 23.0253 2.65896 22.8652 7.39284 23.4739C12.1267 24.0825 22.6011 25.4649 125.565 24.6119C228.528 23.759 423.664 20.6289 523.374 18.883C623.084 17.1371 621.456 16.8702 617.038 17.1493C612.619 17.4284 605.46 18.2614 521.696 18.6081C437.932 18.9547 277.781 18.7896 209.577 20.2122C141.374 21.6348 169.973 24.65 266.514 24.8978C363.055 25.1456 526.672 22.5345 612.262 21.4029C697.852 20.2713 700.457 20.6982 701.148 20.8115C701.76 20.9117 697.838 20.6034 691.526 21.2459C686.567 21.7507 678.055 22.7216 631.411 24.9771C584.767 27.2326 500.252 30.7698 455.684 32.7575C411.115 34.7452 409.055 35.0763 406.664 35.1962C394.428 35.719 373.249 37.6388 362.956 39.0121C361.742 39.1576 360.765 38.9975 359.758 38.8325"
            stroke="#FF9D00"
            stroke-width="12"
            stroke-linecap="round"
            :variants="draw"
            :style="shape"
            :custom="6"
          />
        </motion.svg>
        <p class="text-lg lg:text-2xl -translate-y-[1em] lg:translate-y-0 lg:mt-2">
          I'm a junior studying Civil Engineering and Urban Studies at Tufts University. I recently worked on the <a
            class="text-blue-500 hover:text-blue-700"
            href="https://halmarinternational.com/project/ggb-seismictretrofit/"
          >Golden Gate Seismic Retrofit</a> as a construction engineering intern at Halmar International.
        </p>
        <p class="text-lg lg:text-2xl -translate-y-[1em] mt-2 lg:translate-y-0">
          Outside of class, I am part of the Tufts University Cross Country and Track teams. In my free time, I enjoy exploring cities by transit, reading, and programming websites like this one.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.45;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'keyframes', duration: 0.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const image = {
  overflow: 'visible',
  width: '70%',
};
</script>
