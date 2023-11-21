import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SimSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <p>«Мы любим Sweet Home! Дэймон уже разрешил очень много наших заморочек. Будучи занятыми родителями,
             я испытываю огромное облегчение, зная, что у нас есть партнер, который поможет нам в обслуживании дома».</p>
             <i>Расим А.</i>
        </div>
        <div>
          <p>«Sweet Home стал для меня настоящим спасением! У меня был список вещей в доме, до которых я никогда не мог добраться.
             Honey Homes эффективно позаботилась о многих из этих вещей. Задания всегда выполнялись очень хорошо! Это потрясающий сервис!»</p>
             <i>Антон В.</i>
        </div>
        <div>
          <p>«Я не могу вам передать, насколько замечательным оказался Sweet Home для нас, новых домовладельцев. Моя жена очень скептически относилась
             к появлению «еще одной услуги по подписке», но теперь она не может перестать рекомендовать вас, ребята, людям».</p>
             <i>Алина Р.</i>
        </div>
      </Slider>
    );
  };
  
  export default SimSlider;