import React, { Component } from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SourcePageContainer from './SourcePageContainer';
import SourcePage from '../components/SourcePage';

let source, body, app, callAPI, wrapper;

beforeAll(() => {
  source = {
    id: 'cnn',
    title: 'CNN',
    faviconURL: 'https://besticon-demo.herokuapp.com/icon?url=https://www.cnn.com/&size=70..120..200',
    primaryColor: '#cc0000',
    topics: [
      {
        name: 'Top'
      },
      {
        name: 'World'
      },
      {
        name: 'Politics'
      },
      {
        name: 'Money'
      },
      {
        name: 'Health'
      },
      {
        name: 'Travel'
      },
      {
        name: 'Tech'
      }
    ]
  };

  body = {
    data: [
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Paul R. La Monica",
              title: "Amazon may eventually have 70 million banking customers",
              description: "Consulting firm Bain & Co. says that Amazon could win big if it winds up offering checking accounts and other financial services products to its many customers. Banks will want to partner with Amazon too. But they will also need to be wary.",
              url: "http://money.cnn.com/2018/03/07/investing/amazon-bank-accounts/index.html",
              urlToImage: "http://i2.cdn.turner.com/money/dam/assets/170727100615-jeff-bezos-amazon-780x439.jpg",
              publishedAt: "2018-03-07T19:27:11Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Dana Bash, CNN",
              title: "Following John Lewis on civil rights journey 'touched by the spirit of history'",
              description: "Touched by the spirit of history.",
              url: "https://www.cnn.com/2018/03/07/politics/john-lewis-bloody-sunday-anniversary-reporters-notebook/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/180304190900-john-lewis-dana-bash-super-tease.jpg",
              publishedAt: "2018-03-07T19:23:21Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "AngelaBonachera",
              title: "Dinamarca se prepara para uno de los juicios de asesinato más escabrosos de su historia",
              description: "Comienza en Dinamarca el juicio contra Peter Madsen, acusado de asesinar y descuartizar a la periodista sueca Kim Wall.",
              url: "http://cnnespanol.cnn.com/2018/03/07/dinamarca-se-prepara-para-uno-de-los-juicios-de-asesinato-mas-escabrosos-de-su-historia/",
              urlToImage: "https://cnnespanol2.files.wordpress.com/2018/03/170822163925-01-kim-wall-handout-exlarge-169.jpg?quality=100&strip=info",
              publishedAt: "2018-03-07T19:22:02Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Paula Bravo Medina",
              title: "Imputan de 34 cargos al atacante de Parkland, Nikolas Cruz, incluyendo asesinato premeditado",
              description: "Un gran jurado de Florida acusó este miércoles a Nikolas Cruz de 34 cargos de asesinato premeditado e intento de homicidio en conexión con el tiroteo del Día de San Valentín que dejó 17 personas muertas en Marjory Stoneman Douglas High School en Parkland. MIR…",
              url: "http://cnnespanol.cnn.com/2018/03/07/imputan-de-34-cargos-al-atacante-de-parkland-nikolas-cruz-incluyendo-de-asesinato-premeditado/",
              urlToImage: "https://cnnespanol2.files.wordpress.com/2018/02/180215065134-nikolas-jacob-cruz-mugshot-exlarge-169.jpg?quality=100&strip=info",
              publishedAt: "2018-03-07T19:16:08Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Hadas Gold",
              title: "Legendary UK music magazine NME ends print edition",
              description: "The New Musical Express is going out of print. The last NME magazine will be distributed on Friday.",
              url: "http://money.cnn.com/2018/03/07/media/nme-print-edition-ends/index.html",
              urlToImage: "http://i2.cdn.turner.com/money/dam/assets/180307135531-new-musical-express-780x439.jpg",
              publishedAt: "2018-03-07T19:10:33Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Tal Kopan, CNN",
              title: "California Gov. Jerry Brown taunts Sessions and Trump, says 'Mueller is closing in'",
              description: "California Gov. Jerry Brown said the Trump administration is \"full of liars\" as he responded to the lawsuit against the state's immigration laws",
              url: "https://www.cnn.com/2018/03/07/politics/jerry-brown-fires-back-jeff-sessions-donald-trump-mueller/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/170919165621-california-gov-jerry-brown-lead-super-tease.jpg",
              publishedAt: "2018-03-07T19:01:19Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Claire Hogan and Chris Dawson, CNN",
              title: "The homeless in San Diego are getting jobs - thanks to a 16-year-old boy",
              description: "It's called \"Wheels for Change.\" Participants get paid $11.50 an hour.",
              url: "https://www.cnn.com/2018/03/07/us/iyw-san-diego-homeless-workers-trnd/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/180306130154-iyw-homeless-work-crew3-super-tease.jpg",
              publishedAt: "2018-03-07T18:59:41Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Ray Sanchez, CNN",
              title: "Florida school shooter Nikolas Cruz indicted on 34 counts, including premeditated murder",
              description: "A Florida grand jury on Wednesday indicted Nikolas Cruz on 34 counts of premeditated murder and attempted murder in connection with the Valentine's Day shooting rampage that left 17 people dead at Marjory Stoneman Douglas High School in Parkland.",
              url: "https://www.cnn.com/2018/03/07/us/nikolas-cruz-indictment/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/180215124637-nikolas-cruz-mugshot-super-tease.jpg",
              publishedAt: "2018-03-07T18:58:23Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Rishi Iyengar",
              title: "Saudi skies are now open to flights to Israel",
              description: "The flight between Tel Aviv and New Delhi will be the first to or from Israel to fly over Saudi Arabia.",
              url: "http://money.cnn.com/2018/03/07/news/india-israel-saudi-arabia-airspace-delhi-tel-aviv/index.html",
              urlToImage: "http://i2.cdn.turner.com/money/dam/assets/170629171548-air-india-planes-780x439.jpg",
              publishedAt: "2018-03-07T18:57:44Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "AngelaBonachera",
              title: "BlackBerry demanda a Facebook por infringir la propiedad intelectual",
              description: "BlackBerry menciona patentes sobre las características de los servicios de mensajería actual. Facebook respondió hablando del último esfuerzo de una empresa que se desvanece.",
              url: "http://cnnespanol.cnn.com/2018/03/07/blackberry-demanda-a-facebook-por-infringir-la-propiedad-intelectual/",
              urlToImage: "https://cnnespanol2.files.wordpress.com/2018/03/180306144152-blackberry-facebook-780x439.jpg?quality=100&strip=info",
              publishedAt: "2018-03-07T18:49:59Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Julia Horowitz",
              title: "Broadcom: We'll invest $1.5 billion to train American workers if deal clears scrutiny",
              description: "The announcement comes two days after the government sent Broadcom and Qualcomm a letter outlining reservations about a potential deal.",
              url: "http://money.cnn.com/2018/03/07/investing/broadcom-qualcomm-5g-investment/index.html",
              urlToImage: "http://i2.cdn.turner.com/money/dam/assets/180307132801-qualcomm-broadcom-2-780x439.jpg",
              publishedAt: "2018-03-07T18:49:44Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Ahiza Garcia",
              title: "NCAA surpasses $1 billion in revenue for first time",
              description: "More than $800 million of that is due to lucrative TV rights deals with CBS and Turner, which also owns CNN.",
              url: "http://money.cnn.com/2018/03/07/news/companies/ncaa-revenue-billion/index.html",
              urlToImage: "http://i2.cdn.turner.com/money/dam/assets/160914092042-ncaa-march-madness-780x439.jpg",
              publishedAt: "2018-03-07T18:48:43Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Kristin Rowe-Finkbeiner",
              title: "Inclusion riders can be a revolution for all women",
              description: "On International Women's Day and beyond, says Kristin Rowe-Finkbeiner, we should remember that standing up for each other works -- in Hollywood and elsewhere.",
              url: "https://www.cnn.com/2018/03/07/opinions/inclusion-rider-international-womens-day-rowe-finkbeiner-opinion/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/170409101815-equal-pay-women-super-tease.jpg",
              publishedAt: "2018-03-07T18:47:45Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "moataz",
              title: "زيد بن رعد ينتقد \"مناخ التخويف السائد\" في مصر",
              description: "أعرب مفوض الأمم المتحدة لحقوق الإنسان زيد بن رعد الحسين، الأربعاء، عن القلق بشأن \"مناخ التخويف السائد\" في مصر، في سياق الانتخابات الرئاسية المقررة الشهر الحالي.",
              url: "https://arabic.cnn.com/middle-east/2018/03/07/un-human-rights-egypt",
              urlToImage: "https://i.cdn.turner.com/dr/cnnarabic/cnnarabic/release/sites/default/files/styles/og_image/public/image/GettyImages-896138026.jpg?itok=2IaOXuWq",
              publishedAt: "2018-03-07T18:41:33Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "AJ Willingham, CNN",
              title: "The creator of Pepe the Frog is suing InfoWars",
              description: "Pepe the frog, the once-innocent cartoon that was appropriated as a mascot of the alt-right, is at the center of a new legal battle.",
              url: "https://www.cnn.com/2018/03/07/us/pepe-frog-infowars-lawsuit-matt-furie-trnd/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/160927210830-tk-ah0927-super-tease.jpg",
              publishedAt: "2018-03-07T18:36:32Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Judson Jones, CNN",
              title: "Why are hurricanes the only storms that get a name?",
              description: "In the United States, hurricanes are the only kinds of storm that get a name. Other major storms aren't as special. Why is that?",
              url: "https://www.cnn.com/2016/08/22/weather/weather-naming-storms/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/150930093425-how-hurricanes-are-named-orig-00002729-super-tease.jpg",
              publishedAt: "2018-03-07T18:35:32Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Andrea Diaz, CNN",
              title: "Florida lawmakers vote to stay in Daylight Saving Time all year long",
              description: "They're tired of the whole \"fall back\" and \"spring forward\" rigamarole.",
              url: "https://www.cnn.com/2018/03/07/us/florida-year-round-daylight-saving-time-trnd/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/151030082334-daylight-saving-time-clock-super-tease.jpg",
              publishedAt: "2018-03-07T18:29:20Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "AngelaBonachera",
              title: "Estas son las mejores aerolíneas de Estados Unidos para 2018",
              description: "¿Planeas viajar por Estados Unidos? Fíjate en qué posición está la aerolínea que elegirás.",
              url: "http://cnnespanol.cnn.com/2018/03/07/estas-son-las-mejores-aerolineas-de-estados-unidos-para-2018/",
              urlToImage: "https://cnnespanol2.files.wordpress.com/2018/03/http_2f2fcdn-cnn-com2fcnnnext2fdam2fassets2f160122122952-air-alaska-plane-super-tease.jpg?quality=100&strip=info",
              publishedAt: "2018-03-07T18:29:07Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Carolyn Sung and Holly Yan, CNN",
              title: "Fathers of slain Parkland students beg Florida reps to pass gun bill",
              description: "While Florida House members sparred Wednesday over a gun control measure, the fathers of two girls killed in the Parkland school massacre showed up to make one final plea: Pass Senate Bill 7026.",
              url: "https://www.cnn.com/2018/03/07/us/parkland-parents-at-florida-house/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/180222091227-andrew-pollack-wh-listening-session-02-21-2018-super-tease.jpg",
              publishedAt: "2018-03-07T18:28:05Z"
            },
            {
              source: {
                id: "cnn",
                name: "CNN"
              },
              author: "Tyler Greenawalt | NCAA.com",
              title: "The odds of a perfect March Madness bracket are off-the-charts crazy",
              description: "The odds of picking a perfect bracket in the NCAA men's basketball tournament are really, really small. We break down just how small.",
              url: "https://www.cnn.com/2018/03/07/us/applenews-march-madness-perfect-bracket/index.html",
              urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/180307102042-march-madness-2018-bracket-super-tease.jpg",
              publishedAt: "2018-03-07T18:27:22Z"
            }
          ]
  };

  app = shallow(<App />);

  callAPI = jest.fn()

  callAPI.mockReturnValue(body);
});

beforeEach(() => {
  wrapper =
    shallow(
      <SourcePageContainer
        source={source}
        changeCurrentSource={app.instance().changeCurrentSource}
      />
    , { disableLifecycleMethods: true });
});

describe('SourcePageContainer rendering', () => {
  it('renders without crashing', () => {
    wrapper
  });

  it('renders the SourcePage once', () => {
    expect(wrapper.find(SourcePage).length).toEqual(1);
  });
});

describe('intial state', () => {
  it('currentTopic', () => {
    expect(wrapper.state().currentTopic).toBe('Top');
  });
});

describe('#componentDidMount', () => {
  it('fetches topicData', () => {
    expect(wrapper.state().topicData).toEqual([]);
    Promise
      .resolve(wrapper.instance().componentDidMount(callAPI))
      .then(() => {
        expect(wrapper.state().topicData).toEqual(body.data);
      })
      .catch(() => fail());
  });
});

describe('#changeCurrentTopic', () => {
  it('changes the current topic', () => {
    expect(wrapper.state()).toEqual({ currentTopic: 'Top', topicData: []});
    Promise
      .resolve(wrapper.instance().changeCurrentTopic('World', callAPI))
      .then(() => {
        expect(wrapper.state()).toEqual({ currentTopic: 'World', topicData: body.data});
      })
      .catch(() => fail());
  });
});