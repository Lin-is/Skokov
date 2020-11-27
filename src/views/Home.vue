<template>
  <header class='header__container'>
    <Navigation/>
    <div class="header__content">
      <h1 class="header__title">Global management consulting agency</h1>
      <p class="header__text">Growth doesn't always go the way you expect. Our strategy consultants can help you climb.</p>
      <div class="header__btnContainer">
        <button class="btn btn-main">Get started</button>
        <button class="btn btn-addit">Learn more</button>
      </div>
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="585" fill="white">
      <polygon points="0 0, 0 585, 201 360, 400 256, 600 336, 799 231, 1000 160, 1200 216, 1399 112, 1600 43, 0 0"></polygon>
    </svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" width="1605" height="590" fill="white">
      <polygon points="0 0, 0 590, 201 360, 400 256, 600 336, 799 231, 1000 160, 1200 216, 1399 112, 1605 43, 1605 0"></polygon>
    </svg>
  </header>
  <main>

    <section class="services__container">
      <h2 class="section__title services__title">our services</h2>
      <p class="services__text">Our management consulting services focus on our clients' most critical issues and opportunities.
        We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.</p>
      <div class="services__itemsContainer">
        <div v-for="(servItem, index) in servItems" :key="index" class="services__item">
          <img :src="servItem.img" alt="item image" class="services-item__img">
          <h3 class="services-item__title">{{ servItem.title }}</h3>
          <hr/>
          <p class="services-item__text">{{ servItem.description }}</p>
        </div>
      </div>
    </section>

    <section class="contactUs__container">
      <h2 class="section__title contactUs__title">Contact us for a FREE, NO OBLIGATION confidential <br/> exploration of your needs</h2>
      <button class="btn btn-main contactUs__btn">Contact Us</button>
    </section>

    <section class="about__container">
      <h2 class="section__title about__title">about us</h2>
      <p class="about__text">SKOKOV is one of the world's leading management consulting firms. We care for our clients' business as our <br/> own, they know we're in this together</p>

      <div class="about__itemsContainer section__itemsContainer">
        <section class="about__item about__weDo">
          <h3 class="about-item__title about-weDo__title">what we do</h3>
          <hr/>
          <p class="about-item__text about-weDo__text" >When someone asks what we do SKOKOV, it’s tempting to point out our four-decade track record for helping to transform the world’s great companies into sharper, smarter, better versions of themselves. It’s true, our mission is to help management teams create such high levels of economic value that together we redefine our respective industries.</p>
          <p class="about-item__text about-weDo__text">We work with top executives to help them make better decisions, convert those decisions to actions, and deliver the sustainable success they desire. For forty years, we've been passionate about achieving better results for our clients-results that go beyond financial and are uniquely tailored, pragmatic, holistic, and enduring.</p>
          <p class="about-item__text about-weDo__text">We advise global leaders on their most critical issues and opportunities: strategy, marketing, organization, operations, technology, transformations and mergers & acquisitions, across all industries and geographies. Our unique approach to traditional change management, called Results Delivery®, helps clients measure and manage risk and overcome the odds to realize results.</p>
        </section>

        <section class="about__item about__clients">
          <h3 class="about-item__title about-clients__title">our clients</h3>
          <hr/>
          <div class="about-item__clientList about-clients__clientList">
            <img v-for="(client, index) in clients" :key="index" :src="client.logo" :alt="client.name + '-logo'" class="about-item__clientLogo about-clients__clientLogo">
          </div>
        </section>

        <section class="about__item about__team">
          <h3 class="about-item__title about-team__title">our team</h3>
          <hr/>
          <div class="about-team__cardsContainer">
            <div class="about-team__card" v-for="(teamMember, index) in teamMembers" :key="index">
              <img :src="teamMember.photo" alt="photo" class="about-item__photo">
              <div class="about-item__infoContainer">
                <h3 class="about-item__name"></h3>
                <br/>
                <p class="about-item__position"></p>
                <p class="about-item__addText"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="promoVid__container">
      <button class="btn btn__startVid promoVid__btn"></button>
      <h2 class="section__title promoVid__title">we blend the strategic with creative</h2>
      <p class="section__text promoVid__text">When someone asks what we do at SKOKOV, it’s tempting to point out our four-decade track record for helping to transform the world’s great companies into sharper, smarter, better versions of themselves.</p>
    </section>

    <section class="news__container">
      <h2 class="section__title news__title">news</h2>
      <p class="section__text news__text">Together, we find value across boundaries, develop insights to act on, and energize teams to sustain success. We're passionate about always doing the right thing for our clients, our people and our communities, even if it isn't easy.</p>
      <div class="section__cardsContainer news__cardsContainer">
        <div v-for="(news, index) in allNews" :key="index" :class="calcNewsCardClass(index + 1)">
          <img :src="news.photo" alt="news photo" class="section-card__photo news-card__photo">
          <div class="section-card__infoContainer news-card__infoContainer">
            <a class="section-card__title news-card__title">{{ news.title }}</a>
            <hr/>
            <p class="section-card__text news-card__text">{{ news.text }}</p>
            <p class="section-card__date news-card__date">{{ news.date }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contactInfo__container">
      <div class="contactInfo__infoContainer">
        <a href="#" class="logo">skokov</a>
        <p class="contactInfo__text">Thank you for your interest in SKOKOV. Please contact us using the information below. To locate contacts in the SKOKOV office closest to you, visit our office websites. To get the latest updates from SKOKOV, subscribe to a newsletter or connect with us on social media.</p>
        <hr/>
        <div class="contactInfo__itemsContainer">
            <p class="contactInfo-address__content contactInfo-item__content">{{ contacts.address }}</p>
            <p class="contactInfo-phone__content contactInfo-item__content">{{ contacts.phone }}</p>
            <p class="contactInfo-email__content contactInfo-item__content">{{ contacts.email }}</p>
        </div>
      </div>
      <form action="" class="contactInfo__form">
        <h2 class="contactInfo-form__title">contact</h2>
        <hr/>
        <p class="contactInfo-form__text">Please contact us using contact form below.</p>
        <input type="text" placeholder="Name" class="contactInfo-form__input contactInfo-form__name">
        <input type="text" placeholder="Email" class="contactInfo-form__input contactInfo-form__email">
        <input type="text" placeholder="Subject" class="contactInfo-form__input contactInfo-form__subject">
        <textarea name="contactInfo-message" placeholder="Message" id="" cols="30" rows="10" class="contactInfo-form__input contactInfo-form__message"></textarea>
        <button class="btn btn-main contactInfo-form__btn">Send</button>
      </form>
    </section>
    <Social/>
  </main>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Social from '@/components/Social.vue'

export default {
  name: 'Home, Social',
  data () {
    return {
      servItems: [
        {
          img: './img/main/services/PerformanceImprovement.png',
          title: 'performance improvement',
          description: 'Enabling companies to grow revenue, improve margins and reposition quickly'
        },
        {
          img: './img/main/services/CustomerStrategy&Marketing.png',
          title: 'customer strategy & marketing',
          description: 'In-depth customer insights combined with economic and operational fundamentals'
        },
        {
          img: './img/main/services/InformationTechnology.png',
          title: `information 
                  technology`,
          description: 'Realizing the full potential of IT resources, investments and assets'
        },
        {
          img: './img/main/services/FullPotentialTransformation.png',
          title: 'full potential transformation',
          description: 'A cross-functional effort to alter the financial, operational and strategic trajectory of a business'
        },
        {
          img: './img/main/services/Strategy.png',
          title: 'strategy',
          description: 'Tailored solutions that deliver results and achieve sustained growth'
        },
        {
          img: './img/main/services/PrivateEquity.png',
          title: 'private equity',
          description: 'Advising investors across the entire investment life cycle'
        },
        {
          img: './img/main/services/Digital.png',
          title: 'digital',
          description: 'Deliver on core strategy, delight customers and operate smarter and faster'
        },
        {
          img: './img/main/services/ResultsDelivery.png',
          title: 'results delivery',
          description: 'Predicting, measuring and managing risk associated with change management'
        }
      ],
      clients: [
        {
          name: 'Oracle',
          logo: './img/main/clients/oracle.jpg'
        },
        {
          name: 'Sony',
          logo: './img/main/clients/sony.jpg'
        },
        {
          name: 'SanDisk',
          logo: './img/main/clients/sanDisk.jpg'
        },
        {
          name: 'McAfee',
          logo: './img/main/clients/mcAfee.jpg'
        },
        {
          name: 'Netflix',
          logo: './img/main/clients/netflix.jpg'
        },
        {
          name: 'SAP',
          logo: './img/main/clients/sap.jpg'
        }
      ],
      teamMembers: [
        {
          photo: './img/main/team/1fem.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/10m.jpg',
          name: 'Clark Kent',
          position: 'Bad Debt Manager',
          additText: 'Team Leader'
        },
        {
          photo: './img/main/team/2m.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/3m.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/4fem.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/5m.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/6fem.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/7fem.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/8m.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/9fem.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/10m.jpg',
          name: '',
          position: '',
          additText: ''
        },
        {
          photo: './img/main/team/11fem.jpg',
          name: '',
          position: '',
          additText: ''
        }
      ],
      allNews: [
        {
          photo: './img/main/news/1news.jpg',
          title: 'Why financial institutions need a new IT model',
          text: 'Why old IT models are unlikely to deliver the competitive edge that banks, insurers and wealth management firms need from technology',
          date: '09.03.2014'
        },
        {
          photo: './img/main/news/2news.jpg',
          title: 'Reimagining IT for an omnichannel world',
          text: 'The technology that powers retail is evolving rapidly. Retailers and their IT groups will have to rise to stay ahead.',
          date: '08.20.2014'
        },
        {
          photo: './img/main/news/3news.jpg',
          title: 'Making the most of generation assets in turbulent times',
          text: 'A thorough review of a power generation portfolio informs decisions about how to reduce costs, raise revenues and make strategic plans.',
          date: '08.27.2014'
        }
      ],
      contacts: {
        address: '43 gagarina street, kharkov, ukraine',
        phone: '+38 (057) 777-05-05',
        email: 'mynameisskokov@gmail.com'
      }
    }
  },
  methods: {
    calcNewsCardClass (index) {
      let className = 'section__card news__card '
      if (index % 3 === 0) {
        className += 'news__card_aside'
      } else if (index % 3 === 1) {
        className += 'news__card_odd'
      } else if (index % 3 === 2) {
        className += 'news__card_even'
      }
      return className
    }
  },
  components: {
    Navigation, Social
  }
}
</script>
