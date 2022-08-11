$(async function () {
  const idEURSelector = "#eur-selector";
  const idCHFSelector = "#chf-selector";

  // Check if Currency is already set
  if (
    localStorage.getItem("currency") != "eur" ||
    localStorage.getItem("currency") != "chf"
  ) {
    localStorage.setItem("currency", "eur");
    $(idEURSelector).addClass("active");
    $(idCHFSelector).removeClass("active");
  } else {
    switch (localStorage.getItem("currency")) {
      case "eur":
        $(idEURSelector).addClass("active");
        $(idCHFSelector).removeClass("active");
        break;
      case "chf":
        $(idCHFSelector).addClass("active");
        $(idEURSelector).removeClass("active");
        break;
    }
  }

  $(idEURSelector).on("click", function () {
    localStorage.setItem("currency", "eur");
    console.log(localStorage.getItem("currency"));
  });
  $(idCHFSelector).on("click", function () {
    localStorage.setItem("currency", "chf");
    console.log(localStorage.getItem("currency"));
  });
});

const cardFactory = (plans, prices, info) => {
  let plansCards = [];

  plans.forEach((plan) => {
    // Compute which info is right
    // :TODO find the ID
    let productInfo = info.find((p) => p.id == plan._id);

    
    if (!productInfo) {
      return;
    }

    // Defining the Plan Card Object
    let card = {
      id: undefined,
      name: undefined,
      description: undefined,
      prices: {
        eur: {
          month: undefined,
          year: undefined,
        },
        chf: {
          month: undefined,
          year: undefined,
        },
      },
      features: [],
    };

    // Mapping Fetched Data to Clean Data
    card.id = plan._id;
    card.name = productInfo.title || plan.name_text;
    //card.description = productInfo.description || "N/A";
    card.description = "";
    card.features = [...productInfo.progress_info];
    card.popular = productInfo.popular;

    const getRightPrice = (currency, interval) => {
      let price = prices.find(
        (price) =>
          price.product_custom_product == plan._id &&
          price.currency_text == currency &&
          price.interval_text == interval
      );

      if (price) {
        return price.price_text;
      } else {
        return 0;
      }
    };

    // Mapping Prices
    card.prices = {
      eur: {
        month: getRightPrice("eur", "month"),
        year: getRightPrice("eur", "year"),
      },
      chf: {
        month: getRightPrice("chf", "month"),
        year: getRightPrice("chf", "year"),
      },
    };
    plansCards.push(card);
  });

  // Order by price
  plansCards.sort((a, b) => a.prices.eur.month - b.prices.eur.month)

  return plansCards;
};

const App = () => {
  return <PlansComponent />;
};

// Plans Component
const PlansComponent = () => {
  const [plans, setPlans] = React.useState([]);
  const [prices, setPrices] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [productsInfo, setProductInfo] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currency, setCurrency] = React.useState(localStorage.getItem("CURRENCY") || "eur"); // <- eur / chf

  const [time, setTime] = React.useState("month"); // <- month / year

  // Fetching Plans And Prices
  React.useEffect(() => {
    fetchPlans();
    fetchPrices();
    fetchProductsInfo();
  }, []);

  $('#currencySelector').on('change', function() {

    setCurrency(localStorage.getItem("CURRENCY") || "eur")
    console.log("Value changed");
  })

  // Mapping Cards with already fetched Plans and Prices
  React.useEffect(() => {
    if (plans.length == 0) return;
    if (prices.length == 0) return;
    if (productsInfo.length == 0) return;

    // Factoring the cards
    setCards(cardFactory(plans, prices, productsInfo));
    setLoading(false);
  }, [plans, prices, productsInfo]);

  const fetchProductsInfo = async () => {
    const data = await $.getJSON("/managed-nvme-hosting/products.info.json");
    setProductInfo(data.products);
  };

  // Fetching Plans from API
  const fetchPlans = async () => {
    fetch("https://admin.moocloud.ch/api/1.1/obj/product")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response.results.map(p => {
          return {
            name: p.name_text,
            id: p._id
          }
        }))
        setPlans(data.response.results);
      })
      .catch((err) => console.error(err));
  };

  // Fetching Prices from Local Storage
  const fetchPrices = async () => {
    fetch("https://admin.moocloud.ch/api/1.1/obj/plan")
      .then((response) => response.json())
      .then((data) => {
        setPrices(data.response.results);
      })
      .catch((err) => console.error(err));
  };

  var swiper = undefined;

  const NavigationButton = ({ direction }) => {
    const classString = direction == "next" ? "right" : "left";
    const goNext = () => swiper.slideNext();
    const goPrev = () => swiper.slidePrev();

    const func = direction == "next" ? goNext : goPrev;

    return (
      <div
        class="btn btn-light navigation-button d-none d-sm-inline-block"
        onClick={func}
      >
        <i class={`fas fa-long-arrow-alt-${classString}`}></i>
      </div>
    );
  };

  React.useEffect(() => {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      spaceBetween: 30,

      breakpoints: {
        575: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

      mousewheel: true,
      keyboard: true,
    });
  });

  React.useEffect(() => {
    console.log(currency);
  }, [currency]);

  const handleAddCart = (id) => {
    window.open(
      `https://easymanager.moocloud.ch/store/products/${id}`,
      "_blank"
    );
  };

  var slides = cards.map((c) => (
    <div className="swiper-slide" onClick={() => handleAddCart(c.id)}>
      <PlanCardComponent plan={c} currency={currency} time={time} />
    </div>
  ));

  if (loading) {
    return (
      <div class="d-flex justify-content-center m-5">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div class="pb-5">
        <div class="container">
          <div class="row">
            <div class="col-8 col-md-3 col-sm-5">
              <ul
                class="mb-3 nav nav-pills p border border-primary rounded nav-fill"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class={`nav-link ${time == "month" ? "active" : ""}`}
                    href="#"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls=""
                    aria-expanded="true"
                    id="chf-selector"
                    aria-selected="true"
                    onClick={() => setTime("month")}
                  >
                    Mensile
                  </a>
                </li>
                <li class={`nav-item`}>
                  <a
                    class={`nav-link ${time == "year" ? "active" : ""}`}
                    href="#"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls=""
                    aria-expanded="true"
                    id="eur-selector"
                    aria-selected="false"
                    onClick={() => setTime("year")}
                  >
                    Annuale
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center mt-n5 container">
        <NavigationButton />
        <div class="swiper-container mySwiper">
          <div class="swiper-wrapper">{slides}</div>
          <div class="swiper-pagination"></div>
        </div>
        <NavigationButton direction="next" />
      </div>
    </div>
  );
};

// Just the price Component, shown inside Plan Component
const PriceComponent = ({ price, currency, time }) => {
  let simbol = currency == "eur" ? "€" : "CHF";

  return (
    <div>
      <span class="display-3">
        {Number.parseFloat(price[currency][time] / 100) || 0}
      </span>
      <span>/{simbol}</span>
    </div>
  );
};

// Progress Bar Component
const ProgressComponent = ({ label, value }) => {
  return (
    <div class="mb-2">
      <p class="mb-0">{label}</p>
      <div class="progress" style={{ height: "10px" }}>
        <div class="progress-bar" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

// Single Plan Card Component
const PlanCardComponent = ({ plan, currency, time }) => {
  const style = plan.popular ? { backgroundColor: "red", color: "white" } : {};

  return (
    <div class="card border-dark">
      <div class="card-body border-bottom border-dark rounded-top" style={style}>
        <img
          src="/assets/img/MINIICONA-dedicato.svg"
          class="float-end mt-n5"
          width="75"
        />
        <div class="card-title display-3 mt-4">{plan.name}</div>
        <div class="card-subtitle mb-2">{plan.description}</div>
        <PriceComponent price={plan.prices} currency={currency} time={time} />
      </div>
      <div class="card-body">
        {plan.features.map((f) => (
          <ProgressComponent label={f.label} value={f.value} />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("plans-container"));
