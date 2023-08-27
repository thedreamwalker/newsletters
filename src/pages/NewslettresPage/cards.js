import morningImg from '@/assets/img/morning.png'
import eveningImg from '@/assets/img/evening.png'
import scissorsImg from '@/assets/img/scissors.png'
import freeImg from '@/assets/img/free.png'

const cards = [
  {supTitle: 'Перед рассветом', title: 'Утренний бухгалтер', description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.', 
  image: morningImg, featureList: [{text: 'Новости для бухгалтеров, ИП и директора'}, {text: 'Подборка статей за день'},], count: 59342},
  {supTitle: 'После заката', title: 'Ночной бухгалтер', description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.', 
  image: eveningImg, featureList: [{text: 'Анализ, оценка и только самое главное'}, {text: 'Лучшие комменты юзеров в обзоре'},], count: 37480},
  {supTitle: 'Раз в две недели', title: 'Ножницы скидок', description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.', 
  image: scissorsImg, featureList: [{text: 'Акции и скидки от лидеров рынка'}, {text: 'Те, кто подписался – экономят много денег'},], count: 92118},
  {supTitle: 'По мере появления анонсов', title: 'Чемодан вебинаров', description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.', 
  image: freeImg, featureList: [{text: 'Никогда не пришлем платные вебинары', params: 'font-medium'}, {text: 'Подборка топовых тем для вебинаров'},], count: 92082},
];

export default cards;