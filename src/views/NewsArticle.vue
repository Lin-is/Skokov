<template>
  <article class="newsArticle__container">
    <header class="article__header">
      <img :src="article.photo" alt="article image" class="article__image">
      <div class="article-header__titleContainer">
        <h1 class="article__title">{{article.title}}</h1>
        <hr>
      </div>
    </header>
    <div class="article__textContainer">
      <p class="article__text">Customer expectations for banks, wealth management companies and insurers are on the rise. In 2013, more than half of consumer bank interactions around the world took place through online or mobile channels, according to Bain & Company customer surveys. Include ATMs and the share of electronic, digital interactions exceeds 85% today and could hit 95% by 2020. <br/>
      Technology is at the heart of this transformation, and with the right capabilities financial firms can compete against nimble, technologically sophisticated start-ups that are reimagining ways to serve customers’ financial needs. Executives see the opportunity to deliver differentiated customer experiences and “wow” moments - like the ability to deposit checks with a mobile phone camera, remote bill pay or even basic transactions delivered through a good mobile app. And this trend accelerates for younger customers: 39% of those over the age of 45 considered the quality of a mobile app when switching banks, but 58% of those younger than 45 took it into account. <br/>
      However, in most financial institutions, significant gaps exist between the business’s aspirations and what they can realistically accomplish. Executives demand greater speed and agility, but their IT departments are unable to deliver, resulting in frustrations and mutual distrust. The C-suite demands for faster, cheaper, better grow louder as the IT function has become slow, expensive and, in some extreme instances, paralyzed. Many factors contribute to this immobilization, including rapidly increasing volumes of business and regulatory demands, a growing need to support complex business processes and products, inflexible legacy systems architectures, onerous internal processes and talent limitations. <br/>
      We believe this problem is larger than IT; it is a strategic business challenge as well as a great opportunity. Technology executives now have a platform and an environment in which company leadership is keen to listen and support IT initiatives. Business executives will need to work with IT more closely than ever before, supporting technology recommendations and gaining a clear understanding of the challenges and opportunities that technology affords. Working together, they can move quickly to bring their banks, insurance companies and other financial institutions forward into the rapidly evolving digital age.</p>
      <h2 class="article__textHeader">A new digital IT operating model</h2>
      <p class="article__text">
        In our view, the frustrations expressed by business and IT executives are largely due to a mismatch between the business’s expectations about how to consistently and rapidly deliver superior digital customer experiences and IT’s inability to fulfill these expectations. Financial institutions did not design their current IT operating models to deliver daily functionality updates or allow change to be an ongoing theme in development. The current model was designed to deliver stability, predictability, risk mitigation and efficiency  - and most banks have delivered on those design principles. <br/>
        From our work with banks, insurers and wealth management companies facing this challenge, we find that many need to “reboot” their technology organizations. The transformation required - to the business, technology and organizational culture - is so great that it demands leaders challenge traditional assumptions about the ways IT and the business work together. As executives move through this critical transformation toward their goal of becoming digital leaders, an interesting thing happens: They begin to think, hire, collaborate and operate more like technology companies. <br/>
        What does this transformation aim to achieve? Some say it’s all about enabling speed. While speed is critical, we think that oversimplifies the challenge. As guardians of customers’ financial security, financial services companies must maintain client trust in their brands, which is the foundation of their customer relationship. Toward that end, IT leaders must worry about cybersecurity capabilities to counter increasingly sophisticated threats. They must be able to provide anytime-anywhere access while continuing to meet regulatory demands. They have to do all of this and construct a scalable and intelligent environment that delivers on mobile, Web, social and advanced analytic considerations. IT leaders aren’t getting a free pass on these other priorities.
      </p>
    </div>
    <section class="article__commentSection">
      <p class="article__commentsCounter">{{commsNum}} comments</p>
      <hr>
      <div class="article__addCommentArea">
        <textarea class="article__commentsTextarea" placeholder="Your comment"></textarea>
        <button class="article__submitCommentBtn">submit comment</button>
      </div>
      <div class="article__commentsContainer">
        <ul class="article__commentList">
          <commentsTree @length="countComms" :comment="comment" v-for="(comment, index) in comments" :key="index"></commentsTree>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
import commentsTree from '@/components/CommentsTree.vue'
import newsMethods from '@/data/news'

export default {
  data () {
    return {
      id: null,
      article: {},
      commsNum: 0,
      comments: [
        {
          author: 'Skokov',
          time: new Date(2020, 11, 5, 14),
          img: '/img/article/commentIcons/skokovIcon.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
          replys: []
        },
        {
          author: 'mr. dev',
          time: new Date(2020, 11, 6, 1),
          img: '/img/article/commentIcons/mrDevIcon.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue.',
          replys: [
            {
              author: 'wernay',
              time: new Date(2020, 11, 12, 1),
              img: '/img/article/commentIcons/wernayIcon.jpg',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
              replys: [
                {
                  author: 'mr. dev',
                  time: new Date(2020, 11, 12, 2),
                  img: '/img/article/commentIcons/mrDevIcon.jpg',
                  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                  replys: []
                }
              ]
            }
          ]
        },
        {
          author: 'denpro',
          time: new Date(2020, 11, 8, 6),
          img: '/img/article/commentIcons/denproIcon.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
          replys: []
        },
        {
          author: 'wernay',
          time: new Date(2020, 11, 10, 14),
          img: '/img/article/commentIcons/wernayIcon.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
          replys: []
        }
      ]
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.article = newsMethods.findNewsById(this.id + '')
    this.countComms(this.comments)
  },
  methods: {
    countComms (comments) {
      this.commsNum += comments.length
      for (const comment of comments) {
        if (comment.replys.length > 0) {
          this.countComms(comment.replys)
        }
      }
    }
  },
  components: {
    commentsTree
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/newsArticle.scss'
</style>
