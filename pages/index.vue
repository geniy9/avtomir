<script setup>
// useSeoMeta({
//   title: computed(() => t('seo.title')),
//   description: computed(() => t('seo.description')),
//   keywords: computed(() => t('seo.keywords')),
//   ogTitle: computed(() => t('seo.ogTitle')),
//   ogDescription: computed(() => t('seo.ogDescription')),
// })

// Data for Section 1
const fullSpectrumServices = ref([
  { icon: '/svg/icon_coins_stack.svg', text: 'доступные цены на сервис' },
  { icon: '/svg/icon_shield_check.svg', text: 'гарантия на все виды работ' },
  { icon: '/svg/icon_wrench_person.svg', text: 'опытные мастера' },
  { icon: '/svg/icon_gearbox_tools.svg', text: 'современное оборудование' },
  { icon: '/svg/icon_car_parts.svg', text: 'автозапчасти новые и с разбора' },
  { icon: '/svg/icon_clock_quality.svg', text: 'ремонт качественно и в срок' },
]);

// Data for Section 2
const benefits = ref([
  { title: 'качество работы', description: 'Наши мастера – высококвалифицированные специалисты с многолетним опытом' },
  { title: 'гарантия', description: 'На каждую работу, сделанную в нашем сервисе – клиент получает полноценную гарантию' },
  { title: 'персональный подход', description: 'Весь процесс от приема до сдачи автомобиля мы строим с учетом пожеланий клиента' },
  { title: 'время ремонта', description: 'Опыт наших мастеров помогает в максимально сжатые сроки завершать ремонт и диагностику' },
  { title: 'акции и скидки', description: 'Разнообразие промоакций, скидок и спецпредложений для клиентов автосервиса' },
  { title: 'зона ожидания', description: 'Комфортная зона ожидания помогает нашим клиентам отвлечься от всех проблем' },
]);

// Data for Section 3: Service Steps
const ramServicePoints = ref([
  { text: 'сделаем грамотный и качественный подбор автомобиля' },
  { text: 'привезем автомобиль и восстановим под ключ' },
  { text: 'автомобильные запчасти на твой автомобиль' },
]);

// Data for Section 4: RAM Truck Service Points
const specificServices = ref([
  { imgSrc: '/img/service_body_repair.jpg', title: 'ремонт кузова автомобиля' },
  { imgSrc: '/img/service_wheel_alignment.jpg', title: 'развал-схождение 3d' },
  { imgSrc: '/img/service_motorist.jpg', title: 'моторист' },
  { imgSrc: '/img/service_chassis_repair.jpg', title: 'ремонт ходовой части автомобиля' },
  { imgSrc: "/img/service_tire_fitting.jpg", title: "шиномонтаж 12” - 30” радиус" },
  { imgSrc: "/img/service_plastic_restoration.jpg", title: "востановление пластика и покраска автомобиля" },
  { imgSrc: "/img/service_polishing.jpg", title: "полировка" },
  { imgSrc: "/img/service_ceramics.jpg", title: "керамика" },
  { imgSrc: "/img/service_brake_disc_repair.jpg", title: "ремонт тормозных дисков" },
  { imgSrc: "/img/service_ac_refill_repair.jpg", title: "заправка и ремонт кондиционера" },
  { imgSrc: "/img/service_oil_change.jpg", title: "замена масла и расходных материалов" },
  { imgSrc: "/img/service_dry_cleaning.jpg", title: "химчистка" },
  { imgSrc: "/img/service_interior_upholstery.jpg", title: "перетяжка салона" }
]);

// Data for Section 5:
const electricServices = ref([
  { imgSrc: '/img/service_car_water_recovery.jpg', title: 'востановление автомобиля после воды' },
  { imgSrc: '/img/service_key_programming.jpg', title: 'программирование блоков и ключей' },
  { imgSrc: '/img/service_diagnostics_vehicles.jpg', title: 'диагностика легковых и грузовых автомобилей' },
  { imgSrc: '/img/service_all_electrical_work.jpg', title: 'все виды работ по электрике автомобиля' }
])

// Data for Section 6: Contact Info
const serviceSteps = ref([
  { icon: '/svg/icon_application_form.svg', title: 'заявка', description: 'Оставьте заявку на консультацию по телефону или через форму обратной связи на нашем сайте' },
  { icon: '/svg/icon_feedback_call.svg', title: 'обратная связь', description: 'Наш специалист свяжется с вами для уточнения деталей, проконсультирует по наличию запасных частей и стоимости ремонта' },
  { icon: '/svg/icon_calendar_booking.svg', title: 'запись в сервис', description: 'Мы запишем вас на комфортное и удобное для вас время' },
  { icon: '/svg/icon_diagnostics_tool.svg', title: 'диагностика', description: 'По приезду в сервис вы получаете бесплатную диагностику ходовой части и предложение с перечнем запасных частей и работ' },
  { icon: '/svg/icon_repair_wrench.svg', title: 'ремонт', description: 'В оговоренные сроки ваш автомобиль проходит ремонт или ТО с гарантией качества' },
  { icon: '/svg/icon_car_ready_check.svg', title: 'готовность', description: 'Вы приезжаете в удобное для вас время за отремонтированным автомобилем' },
]);

// Data for Section 7: Car Brand Logos
const carBrandLogos = ref([
  { src: '/svg/logo_hyundai.svg', alt: 'Hyundai' },
  { src: '/svg/logo_infiniti.svg', alt: 'Infiniti' },
  { src: '/svg/logo_fiat.svg', alt: 'Fiat' },
  { src: '/svg/logo_jeep.svg', alt: 'Jeep' },
  { src: '/svg/logo_honda.svg', alt: 'Honda' },
  { src: '/svg/logo_audi.svg', alt: 'Audi' },
  { src: '/svg/logo_landrover.svg', alt: 'Land Rover' },
  { src: '/svg/logo_lexus.svg', alt: 'Lexus' },
  { src: '/svg/logo_mazda.svg', alt: 'Mazda' },
  { src: '/svg/logo_mini.svg', alt: 'Mini' },
  { src: '/svg/logo_nissan.svg', alt: 'Nissan' },
  { src: '/svg/logo_kia.svg', alt: 'Kia' },
  { src: '/svg/logo_skoda.svg', alt: 'Skoda' },
  { src: '/svg/logo_toyota.svg', alt: 'Toyota' },
  { src: '/svg/logo_vw.svg', alt: 'Volkswagen' },
  { src: '/svg/logo_citroen.svg', alt: 'Citroen' },
  { src: '/svg/logo_bmw.svg', alt: 'BMW' },
  { src: '/svg/logo_peugeot.svg', alt: 'Peugeot' },
]);

// Data for Section 8: Specific Service Cards
const companyContact = ref({
  email: 'automir.armenia@gmail.com',
  address: 'г. Ереван, А. Микояна 2/21 (Алабяна 48)',
  phone: '+374 91 00 36 96'
})
const contactActions = ref([
  { href: 'tel:+37491003696', icon: '/svg/icon_phone.svg', alt: 'Телефон' },
  { href: 'https://t.me/arnold_evn', icon: '/svg/icon_telegram.svg', alt: 'Telegram' }
])
</script>
<template>
  <div class="bg-white">

    <!-- Section 1: Hero Banner - Car Delivery -->
    <section class="mt-20 relative bg-cover shadow-[0_-120px_80px_rgba(0,0,0,0.8)_inset] bg-center bg-[url(/img/bmw_m4_hero_bg.jpg)]">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="section text-white z-10 pb-3 sm:pb-5 flex flex-col items-center justify-end min-h-[480px] sm:min-h-[500px] md:min-h-[540px]">
        <h2 class="main_title text-center mb-6 md:mb-10 lg:mb-12">
          Полный спектр услуг <br class="hidden xs:inline">
          по обслуживанию и ремонту авто
        </h2>
        <div class="grid grid-cols-3 md:grid-cols-6 justify-center items-start gap-x-4 xs:gap-x-6 gap-y-4 md:gap-x-10">
          <div v-for="(item, i) in fullSpectrumServices" :key="i" class="flex flex-col items-center text-center max-w-24">
            <img :src="item.icon" :alt="item.text" class="w-8 h-8 sm:h-10 sm:w-10 mb-2">
            <span class="text-[.6rem] text-wrap sm:text-xs uppercase">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Repair & Maintenance Benefits -->
    <section class="py-12 md:py-20 bg-white">
      <div class="section">
        <h2 class="main_title text-center mb-10 md:mb-16 uppercase">
          Ремонт и то автомобилей любой сложности
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div v-for="(item, i) in benefits" :key="i"
            class="border border-gray-200 rounded-xl p-4 xs:p-6 shadow-lg relative overflow-hidden">
            <div class="absolute -top-1 -left-1 w-10 h-10 bg-primary" style="clip-path: polygon(0 0, 100% 0, 0 100%);"></div>
            <div class="relative z-10">
              <div class="text-4xl xs:text-6xl font-black text-white mb-1 xs:mb-3" 
                style="text-shadow:0 1px 1px #e62329,0 -1px 1px #e62329,1px 0 1px #e62329,-1px 0 1px #e62329;">
                #{{ i + 1 }}
              </div>
              <h3 class="text-xl font-bold mb-2 uppercase">{{ item.title }}</h3>
              <p class="text-gray-700 text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: How Our Service Works -->
    <section>
      <div class="bg-primary text-white mx-auto py-6 md:py-8">
        <h1 class="section text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center">
          Наша компания доставит тебе любой
          <br class="hidden sm:inline">
          Автомобиль с любых мировых площадок
        </h1>
      </div>
      <div class="py-6 md:py-8 flex flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16">
        <img src="/img/logo_copart.png" alt="Copart" class="h-6 xs:h-10 md:h-12 lg:h-14 object-contain">
        <img src="/img/logo_manheim.png" alt="Manheim" class="h-6 xs:h-10 md:h-12 lg:h-14 object-contain">
        <img src="/img/logo_iaa.png" alt="IAA" class="h-6 xs:h-10 md:h-12 lg:h-14 object-contain">
      </div>
    </section>

    <!-- Section 4: Full Spectrum of Services -->
    <section class="relative bg-gray-50 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/img/cars_background_pattern.jpg" alt="Car background pattern" class="w-full h-full object-cover opacity-40">
      </div>
      <div class="section py-10 md:py-16 relative z-10">
        <div class="flex flex-col lg:flex-row gap-5 items-center">
          <div class="lg:w-2/5 xl:w-1/3 mb-10 lg:mb-0 lg:pr-8 space-y-6">
            <div v-for="(point, i) in ramServicePoints" :key="i" class="flex items-start py-2 xs:py-4">
              <Icon name="hugeicons:checkmark-circle-04" class="w-7 h-7 xl:w-9 xl:h-9 mr-4 mt-1 flex-shrink-0 text-primary" />
              <p class="text-base xs:text-lg font-bold uppercase">{{ point.text }}</p>
            </div>
          </div>
          <div class="lg:w-3/5 xl:w-2/3 flex justify-center lg:justify-end">
            <img src="/img/ram_truck_main.png" alt="RAM 2500 Truck" class="max-w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Services Highlight (RAM Truck) -->
    <section class="bg-gray-100 overflow-hidden">
      <div class="bg-primary text-white text-center py-6 md:py-8">
        <h2 class="main_title section">
          Услуги автосервиса
        </h2>
      </div>
      <div class="section mx-auto py-12 md:py-20">
        <div class="grid grid-cols-1 justify-end sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div v-for="(item, i) in specificServices" :key="i" class="group relative rounded-lg overflow-hidden shadow-xl block aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3">
            <img :src="item.imgSrc" :alt="item.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 xs:p-5 md:p-6 text-center xs:text-left">
              <h3 class="text-white text-lg xs:text-xl md:text-2xl font-bold mb-3 uppercase">
                {{ item.title }}
              </h3>
              <span class="inline-block self-center xs:self-start bg-primary text-white font-semibold py-2 px-5 rounded-md text-sm group-hover:opacity-90 transition-opacity uppercase">
                Записаться
              </span>
            </div>
          </div>
          <div class="hidden sm:block sm:col-span-1 lg:col-span-2 place-content-end">
            <img src="/img/mustang.png" alt="mustang" class="sm:translate-x-24 lg:translate-x-40 origin-bottom sm:scale-125 lg:scale-90" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="bg-primary text-white text-center py-6 md:py-8">
        <h2 class="main_title">
          Работы по электрике
        </h2>
      </div>
      <div class="section py-12 md:py-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <a v-for="serviceCard in electricServices" :key="serviceCard.title" href="#" class="group relative rounded-lg overflow-hidden shadow-xl block aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3">
            <img :src="serviceCard.imgSrc" :alt="serviceCard.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5 md:p-6">
              <h3 class="text-white text-xl md:text-2xl font-bold mb-3 uppercase">
                {{ serviceCard.title }}
              </h3>
              <span class="inline-block self-start bg-primary text-white font-semibold py-2 px-5 rounded-md text-sm group-hover:opacity-90 transition-opacity uppercase">
                Записаться
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Section 6: How to Find Us -->
    <section class="relative py-8 md:py-12">
      <div class="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-40 filter grayscale bg-[url(/img/car_silhouette_how_it_works.jpg)]">
      </div>
      <div class="section z-10">
        <div class="text-center mb-6">
          <h2 class="main_title mb-2">
            Как работает наш сервис?
          </h2>
          <p class="text-base xs:text-lg text-gray-900 max-w-2xl mx-auto">
            Мы ценим время наших клиентов и поэтому максимально упростили весь процесс ремонта от заявки до получения автомобиля
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          <div v-for="(step, i) in serviceSteps" :key="i"
            class="bg-white/50 backdrop-blur-sm p-4 xs:p-6 rounded-lg shadow-xl text-center md:text-left relative">
            <img :src="step.icon" :alt="step.title" class="h-10 w-10 mx-auto md:mx-0 mb-3 text-primary">
            <h3 class="text-lg font-bold mb-2 uppercase">
              {{ step.title }}
            </h3>
            <p class="text-sm text-gray-900">
              {{ step.description }}
            </p>
            <span class="absolute bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold -top-2 -right-2 md:-top-4 md:-right-4">
              #{{ i + 1 }}
            </span>
          </div>
        </div>
        <div class="text-center mt-6 md:mt-12">
          <a href="#" class="bg-primary text-white font-bold py-3 px-10 rounded-md text-lg uppercase">
            оставить заявку
          </a>
        </div>
      </div>
    </section>

    <!-- Section 7: We Service All Makes & Models -->
    <section class="bg-gray-950 text-white py-12 md:py-20">
      <div class="section mx-auto px-4 text-center">
        <h2 class="main_title mb-4">
          Обслуживаем все марки<br class="sm:hidden"> и модели автомобилей
        </h2>
        <p class="text-gray-300 mb-6 text-sm sm:text-base max-w-3xl mx-auto">
          Автосервис «Автомир» предлагает качественный ремонт и диагностику автомобилей в Ереване по приемлемым ценам. <br class="hidden xs:inline">
          Профессионально ремонтируем машины любых марок и любого года выпуска
        </p>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 items-center">
          <img
            v-for="logo in carBrandLogos"
            :key="logo.alt"
            :src="logo.src"
            :alt="logo.alt"
            class="mx-auto h-20 md:h-28">
        </div>
      </div>
    </section>

    <!-- Section 8: Specific Services -->
    <section class="py-12 md:py-20 bg-white">
      <div class="">
        <h2 class="main_title text-center mb-10 md:mb-16">
          Как нас найти
        </h2>
        <div class="mb-8 md:mb-12 overflow-hidden">
          <img src="/img/map_yerevan_location.png" alt="Карта местоположения" 
            class="w-full object-contain">
        </div>
        <div class="section bg-gray-50 p-6 md:p-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div class="flex flex-col sm:flex-row gap-4 items-center">
            <img src="/logo.svg" alt="Автомир Лого" class="h-14 md:h-16 mr-4 md:mr-6">
            <div class="text-center sm:text-left space-y-1">
              <p class="text-sm font-semibold text-primary">{{ companyContact.email }}</p>
              <p class="text-xs xs:text-sm text-gray-700 uppercase">{{ companyContact.address }}</p>
              <p class="text-sm text-gray-700 font-medium">{{ companyContact.phone }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <a v-for="(item, i) in contactActions" :key="i" :href="item.href" target="_blank" class=" rounded-full">
              <img :src="item.icon" :alt="item.alt" class="h-9 w-9 text-primary p-1" />
            </a>
            <span class="bg-primary text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity text-sm whitespace-nowrap uppercase">
              Оставить заявку
            </span>
          </div>
        </div>
      </div>
    </section>
    

  </div>
</template>