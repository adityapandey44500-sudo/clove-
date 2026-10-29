import { useEffect, useState, type FormEvent } from "react";

type IconName = "arrow" | "bag" | "close" | "menu" | "minus" | "plus";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M4.5 12h14M12 5.5l6.5 6.5-6.5 6.5" />
      </svg>
    );
  }
  if (name === "bag") {
    return (
      <svg {...common}>
        <path d="M5 8.5h14l1 12H4l1-12Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </svg>
    );
  }
  if (name === "close") {
    return (
      <svg {...common}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  }
  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    );
  }
  if (name === "minus") {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function PackLabel({ netWeight }: { netWeight: string }) {
  return (
    <svg
      className="pack-label-svg"
      viewBox="0 0 340 212"
      role="img"
      aria-label={`Clove Garlic Powder pack label, net weight ${netWeight}`}
    >
      <rect width="340" height="212" fill="#f6f0da" />
      <path
        d="M24 12h72a12 12 0 0 1 12 12v152a12 12 0 0 1-12 12H24a12 12 0 0 1-12-12V24A12 12 0 0 1 24 12Z"
        fill="#1e4f4b"
      />
      <text
        x="48"
        y="38"
        textAnchor="middle"
        fill="#f6f0da"
        fontSize="13"
        fontWeight="800"
        letterSpacing="1.5"
      >
        PREMIUM
      </text>
      <circle cx="48" cy="92" r="33" fill="#f6f0da" />
      <circle
        cx="48"
        cy="92"
        r="29.5"
        fill="none"
        stroke="#4c7a4f"
        strokeWidth="1.4"
      />
      <text
        x="48"
        y="83"
        textAnchor="middle"
        fill="#1e4f4b"
        fontSize="11"
        fontWeight="800"
        letterSpacing="1"
      >
        CLOVE
      </text>
      <path
        d="M48 88c-6.5 4.5-9.5 9.5-9.5 15.5 0 7.5 4 12 9.5 12s9.5-4.5 9.5-12c0-6-3-11-9.5-15.5Z"
        fill="#efe4c9"
        stroke="#8a7a5c"
        strokeWidth="0.9"
      />
      <path d="M48 90v23" stroke="#8a7a5c" strokeWidth="0.7" />
      <text
        x="48"
        y="124"
        textAnchor="middle"
        fill="#1e4f4b"
        fontSize="6.5"
        fontWeight="700"
        letterSpacing="1.2"
      >
        WHITE GARLIC
      </text>
      <circle cx="132" cy="52" r="27" fill="#3f7d3a" />
      <circle
        cx="132"
        cy="52"
        r="23"
        fill="none"
        stroke="#f6f0da"
        strokeWidth="1"
      />
      <text
        x="132"
        y="38"
        textAnchor="middle"
        fill="#f6f0da"
        fontSize="6"
        fontWeight="700"
        letterSpacing="1"
      >
        NATURAL
      </text>
      <path d="M126 55c4-6 10-6 12 0-4 3-9 3-12 0Z" fill="#bfe3a6" />
      <path d="M138 55c-4-6-10-6-12 0 4 3 9 3 12 0Z" fill="#d8eec2" />
      <text
        x="132"
        y="59"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="11"
        fontWeight="800"
      >
        100%
      </text>
      <text
        x="132"
        y="71"
        textAnchor="middle"
        fill="#f6f0da"
        fontSize="6"
        fontWeight="700"
        letterSpacing="1"
      >
        PRODUCT
      </text>
      <text
        x="168"
        y="72"
        fill="#1e4f4b"
        fontSize="37"
        fontWeight="900"
        letterSpacing="1"
      >
        CLOVE
      </text>
      <text x="168" y="101" fill="#1e4f4b" fontSize="22" fontWeight="700">
        Garlic Powder
      </text>
      <rect
        x="308"
        y="38"
        width="16"
        height="16"
        fill="none"
        stroke="#3f7d3a"
        strokeWidth="1.6"
      />
      <circle cx="316" cy="46" r="5" fill="#3f7d3a" />
      <text
        x="16"
        y="168"
        fill="#1e4f4b"
        fontSize="15"
        fontStyle="italic"
        fontFamily="Georgia, serif"
      >
        Essence of Purity
      </text>
      <rect x="16" y="178" width="112" height="26" rx="13" fill="#1e4f4b" />
      <text
        x="72"
        y="195"
        textAnchor="middle"
        fill="#f6f0da"
        fontSize="12"
        fontWeight="700"
        letterSpacing="0.5"
      >
        NET WT {netWeight}
      </text>
    </svg>
  );
}

const variants = [
  { id: "small", weight: "100 g", price: 110 },
  { id: "medium", weight: "250 g", price: 269 },
  { id: "large", weight: "1 kg", price: 999 },
];

const recipes = [
  {
    name: "Golden garlic potatoes",
    amount: "1 tsp for 500 g potatoes",
    description:
      "Toss with olive oil and salt before roasting. Add a final pinch while they are still hot.",
    note: "Crisp edges, soft middle. The kind of side dish that rarely makes it to the table intact.",
  },
  {
    name: "A little more dal",
    amount: "¼ tsp in the tadka",
    description:
      "Stir into the cumin as it sizzles, then pour the tadka over your favourite everyday dal.",
    note: "A familiar bowl, made a touch warmer and more fragrant in seconds.",
  },
  {
    name: "The easiest garlic butter",
    amount: "¼ tsp for 2 tbsp butter",
    description:
      "Mix into softened butter with a pinch of salt and lemon zest. Spread over warm toast.",
    note: "A quick little upgrade for sourdough, corn, vegetables, or absolutely anything warm.",
  },
];

type CartLine = {
  id: string;
  weight: string;
  price: number;
  quantity: number;
};

const ORDER_EMAIL = "clovegarlicpowder07@gmail.com";
const WHATSAPP_NUMBER = "919608003347";
const WHATSAPP_DISPLAY = "+91 96080 03347";
const LOCATION = "Patna, Bihar – India";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export default function App() {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0].id);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(0);

  const selectedVariant =
    variants.find((variant) => variant.id === selectedVariantId) ?? variants[0];
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    if (!bagOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBagOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [bagOpen]);

  const addToBag = () => {
    setCart((current) => {
      const existing = current.find((item) => item.id === selectedVariant.id);
      if (existing) {
        return current.map((item) =>
          item.id === selectedVariant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...current,
        {
          id: selectedVariant.id,
          weight: selectedVariant.weight,
          price: selectedVariant.price,
          quantity: 1,
        },
      ];
    });
    setCheckoutOpen(false);
    setBagOpen(true);
  };

  const changeQuantity = (id: string, amount: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const buildOrderText = (
    name: string,
    phone: string,
    address: string,
  ) =>
    [
      "Hello Clove Garlic Powder,",
      "",
      "I would like to place this order:",
      ...cart.map(
        (item) =>
          `- Clove Garlic Powder, ${item.weight} x ${item.quantity}`,
      ),
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Delivery address: ${address}`,
      "",
      "Please confirm availability and delivery details.",
    ].join("\n");

  const sendOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const address = String(formData.get("address") ?? "");
    const submitter = (event.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;
    const text = buildOrderText(name, phone, address);

    if (submitter?.dataset.channel === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener",
      );
      return;
    }

    window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
      `Order enquiry from ${name}`,
    )}&body=${encodeURIComponent(text)}`;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement">
        <span className="announcement-mark" aria-hidden="true">
          *
        </span>
        PURE GARLIC POWDER · ESSENCE OF PURITY · {LOCATION.toUpperCase()}
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#home" aria-label="Clove Garlic Powder home">
            <span className="brand-monogram" aria-hidden="true">
              C
            </span>
            <span className="brand-name">
              CLOVE <em>GARLIC POWDER</em>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#shop" onClick={closeMenu}>
              The powder
            </a>
            <a href="#story" onClick={closeMenu}>
              Our story
            </a>
            <a href="#kitchen" onClick={closeMenu}>
              In the kitchen
            </a>
          </nav>

          <div className="header-actions">
            <button
              className="bag-trigger"
              type="button"
              onClick={() => {
                setCheckoutOpen(false);
                setBagOpen(true);
              }}
              aria-label={`Open shopping bag, ${itemCount} items`}
            >
              <span>Bag</span>
              <span className="bag-count">{String(itemCount).padStart(2, "0")}</span>
            </button>
            <button
              className="menu-trigger"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img
            className="hero-photo"
            src="/images/garlic-editorial.jpg"
            alt="Fresh garlic bulbs, cloves and golden garlic powder on a linen-covered table"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-rule" />
              100% natural · Made in {LOCATION}
            </p>
            <h1 id="hero-title">
              CLOVE
              <span>GARLIC POWDER</span>
            </h1>
            <p className="hero-summary">
              Essence of purity. Real white garlic, gently dried and ground —
              nothing added, nothing hidden.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#shop">
                Meet your new staple <Icon name="arrow" />
              </a>
              <a className="hero-text-link" href="#story">
                A little about us
              </a>
            </div>
          </div>
        </section>

        <section className="manifesto" aria-labelledby="manifesto-title">
          <p className="eyebrow">The beauty of less</p>
          <h2 id="manifesto-title">
            One honest ingredient.
            <br />
            <em>A world of flavour.</em>
          </h2>
          <p className="manifesto-copy">
            Just pure garlic from trusted farms, stone-ground in small batches
            in Patna, Bihar — a pantry staple that makes good cooking feel a
            little easier.
          </p>
        </section>

        <section className="product-section" id="shop" aria-labelledby="product-title">
          <div className="product-copy">
            <p className="eyebrow">Our first pack / No. 01</p>
            <h2 id="product-title">
              The little pack
              <br />
              <em>that does a lot.</em>
            </h2>
            <p className="product-description">
              Full-bodied flavour of pure white garlic, ready in a pinch. Skip
              the peeling, keep all the warmth, and reach for it in everything
              from tadka to toast. No fillers, no preservatives, no shortcuts.
            </p>
            <p className="ingredient-note">
              <span aria-hidden="true">01</span> One simple ingredient: 100% white
              garlic.
            </p>
          </div>

          <div className="product-stage">
            <div className="product-art" aria-label="Clove Garlic Powder pack with your chosen net weight">
              <div className="art-note art-note-top">PANTRY NO. 01</div>
              <div className="jar" aria-hidden="true">
                <div className="jar-lid" />
                <div className="jar-neck" />
                <div className="jar-body">
                  <div className="jar-powder" />
                  <div className="jar-label">
                    <PackLabel
                      netWeight={selectedVariant.weight.replace(/\s+/g, "")}
                    />
                  </div>
                </div>
              </div>
              <div className="art-note art-note-bottom">ESSENCE OF PURITY</div>
            </div>

            <div className="product-controls">
              <div className="product-control-heading">
                <span>Choose your pack</span>
                <span className="product-unit">PURE GARLIC POWDER</span>
              </div>
              <div className="size-options" role="group" aria-label="Choose a pack size">
                {variants.map((variant) => (
                  <button
                    className={`size-option ${selectedVariantId === variant.id ? "is-selected" : ""}`}
                    type="button"
                    key={variant.id}
                    aria-pressed={selectedVariantId === variant.id}
                    onClick={() => setSelectedVariantId(variant.id)}
                  >
                    <span>{variant.weight}</span>
                    <small>{formatPrice(variant.price)}</small>
                  </button>
                ))}
              </div>
              <div className="purchase-row">
                <p className="product-price">
                  {formatPrice(selectedVariant.price)}
                  <span> / {selectedVariant.weight}</span>
                </p>
                <button className="button button-dark add-button" type="button" onClick={addToBag}>
                  Add to bag <Icon name="arrow" />
                </button>
              </div>
              <p className="small-print">
                Free delivery in Patna. Shipping across Bihar &amp; India
                confirmed with your order.
              </p>
            </div>
          </div>
        </section>

        <section className="story-section" id="story" aria-labelledby="story-title">
          <div className="story-image-wrap">
            <img
              src="/images/garlic-process.jpg"
              alt="Garlic cloves and golden dried garlic ready to be ground in a stone mortar"
              loading="lazy"
            />
            <span className="image-index">ESSENCE OF PURITY · PATNA, BIHAR</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow">From Patna, with care</p>
            <h2 id="story-title">
              Made for the
              <br />
              <em>everyday magic.</em>
            </h2>
            <p>
              Clove Garlic Powder began in a small Patna kitchen with one
              belief: the ingredients we reach for most should be the ones we
              trust completely. We select plump white garlic cloves, dry them
              gently, and grind them in small batches — so every pack you open
              smells like the real thing, because it is.
            </p>
            <a className="story-link" href="#kitchen">
              Find your kind of garlic moment <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="kitchen-section" id="kitchen" aria-labelledby="kitchen-title">
          <div className="kitchen-intro">
            <p className="eyebrow">A pinch goes a long way</p>
            <h2 id="kitchen-title">
              A little garlic.
              <br />
              <em>A lot of good.</em>
            </h2>
            <p>Three simple ways to let pure garlic shine.</p>
          </div>

          <div className="recipe-explorer">
            <div className="recipe-tabs" role="tablist" aria-label="Quick garlic recipes">
              {recipes.map((recipe, index) => (
                <button
                  className={`recipe-tab ${selectedRecipe === index ? "is-active" : ""}`}
                  type="button"
                  role="tab"
                  id={`recipe-tab-${index}`}
                  aria-selected={selectedRecipe === index}
                  aria-controls="recipe-panel"
                  key={recipe.name}
                  onClick={() => setSelectedRecipe(index)}
                >
                  <span>0{index + 1}</span>
                  {recipe.name}
                </button>
              ))}
            </div>
            <div
              className="recipe-panel"
              role="tabpanel"
              id="recipe-panel"
              aria-labelledby={`recipe-tab-${selectedRecipe}`}
              key={selectedRecipe}
            >
              <div className="recipe-panel-heading">
                <span className="recipe-number">0{selectedRecipe + 1}</span>
                <h3>{recipes[selectedRecipe].name}</h3>
              </div>
              <div className="recipe-instructions">
                <p className="recipe-amount">{recipes[selectedRecipe].amount}</p>
                <p>{recipes[selectedRecipe].description}</p>
                <p className="recipe-note">{recipes[selectedRecipe].note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qr-section" id="scan" aria-labelledby="qr-title">
          <div className="qr-copy">
            <p className="eyebrow">Scan · order · cook</p>
            <h2 id="qr-title">
              One scan.
              <br />
              <em>Your kitchen, upgraded.</em>
            </h2>
            <p>
              Point your phone camera at the code to open our store — or print
              it on every pouch and let your customers find you.
            </p>
            <div className="qr-actions">
              <a
                className="button button-dark"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp <Icon name="arrow" />
              </a>
              <a
                className="qr-download"
                href="/images/clove-qr.svg"
                download="clove-garlic-powder-qr.svg"
              >
                Download QR code (SVG · print-ready)
              </a>
            </div>
          </div>
          <div className="qr-card">
            <img
              src="/images/clove-qr.png"
              alt="QR code linking to the Clove Garlic Powder website"
              width={320}
              height={320}
              loading="lazy"
            />
            <span className="qr-card-label">CLOVE GARLIC POWDER · {LOCATION.toUpperCase()}</span>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div>
            <p className="eyebrow">Your kitchen called</p>
            <h2 id="closing-title">
              It wants a little
              <br />
              <em>more garlic.</em>
            </h2>
          </div>
          <a className="button button-dark" href="#shop">
            Find your pack <Icon name="arrow" />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="footer-brand" href="#home">
            CLOVE <em>GARLIC POWDER</em>
          </a>
          <p>Essence of purity. Based in {LOCATION}.</p>
          <div className="footer-links">
            <a href={`mailto:${ORDER_EMAIL}`}>{ORDER_EMAIL}</a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <span>{LOCATION}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CLOVE GARLIC POWDER · {LOCATION.toUpperCase()}</span>
          <a href="#shop">Back to the good stuff ↑</a>
        </div>
      </footer>

      <div
        className={`bag-backdrop ${bagOpen ? "is-open" : ""}`}
        aria-hidden={!bagOpen}
        onClick={() => setBagOpen(false)}
      >
        <aside
          className="bag-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="bag-title"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="drawer-heading">
            <div>
              <p className="eyebrow">Your little bag</p>
              <h2 id="bag-title">{checkoutOpen ? "Let's make it yours." : `Your bag (${itemCount})`}</h2>
            </div>
            <button
              className="drawer-close"
              type="button"
              onClick={() => setBagOpen(false)}
              aria-label="Close shopping bag"
            >
              <Icon name="close" />
            </button>
          </div>

          {checkoutOpen ? (
            <form className="checkout-form" onSubmit={sendOrder}>
              <div className="order-summary">
                <p className="eyebrow">Order summary</p>
                {cart.map((item) => (
                  <p key={item.id}>
                    <span>Clove Garlic Powder / {item.weight} x {item.quantity}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </p>
                ))}
                <p className="order-total">
                  <span>Subtotal</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </p>
              </div>
              <label>
                Your name
                <input name="name" autoComplete="name" placeholder="Name" required />
              </label>
              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="How can we reach you?"
                  required
                />
              </label>
              <label>
                Delivery address
                <textarea
                  name="address"
                  autoComplete="street-address"
                  placeholder="House, street, city and PIN code"
                  rows={3}
                  required
                />
              </label>
              <p className="checkout-note">
                WhatsApp is the fastest way to order — or choose email. Either
                way, we will confirm availability and delivery with you.
              </p>
              <button
                className="button button-whatsapp checkout-button"
                type="submit"
                data-channel="whatsapp"
              >
                Order on WhatsApp <Icon name="arrow" />
              </button>
              <button className="button button-dark checkout-button" type="submit">
                Create email order <Icon name="arrow" />
              </button>
              <button className="back-to-bag" type="button" onClick={() => setCheckoutOpen(false)}>
                Back to your bag
              </button>
            </form>
          ) : cart.length > 0 ? (
            <>
              <div className="cart-lines">
                {cart.map((item) => (
                  <div className="cart-line" key={item.id}>
                    <div className="cart-mini-jar" aria-hidden="true">
                      <span>C</span>
                    </div>
                    <div className="cart-line-info">
                      <p className="cart-product-name">Clove Garlic Powder</p>
                      <p className="cart-product-size">{item.weight} / ESSENCE OF PURITY</p>
                      <div className="quantity-control" aria-label={`Quantity: ${item.quantity}`}>
                        <button
                          type="button"
                          onClick={() => changeQuantity(item.id, -1)}
                          aria-label={`Remove one ${item.weight} pack`}
                        >
                          <Icon name="minus" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => changeQuantity(item.id, 1)}
                          aria-label={`Add one ${item.weight} pack`}
                        >
                          <Icon name="plus" />
                        </button>
                      </div>
                    </div>
                    <strong className="cart-line-price">
                      {formatPrice(item.price * item.quantity)}
                    </strong>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <p>
                  <span>Subtotal</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </p>
                <span className="cart-shipping-note">
                  Free delivery in Patna · shipping confirmed at order.
                </span>
                <button
                  className="button button-dark checkout-button"
                  type="button"
                  onClick={() => setCheckoutOpen(true)}
                >
                  Continue to order <Icon name="arrow" />
                </button>
                <button className="back-to-bag" type="button" onClick={() => setBagOpen(false)}>
                  Keep exploring
                </button>
              </div>
            </>
          ) : (
            <div className="empty-bag">
              <p className="empty-bag-mark" aria-hidden="true">
                C.
              </p>
              <h3>Nothing in your bag. Yet.</h3>
              <p>There is always room for one more good pantry staple.</p>
              <button
                className="button button-dark"
                type="button"
                onClick={() => setBagOpen(false)}
              >
                Find your pack <Icon name="arrow" />
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
