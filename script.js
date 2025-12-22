const toggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
}); 

let cartCount = 0;
let cartTotal = 0;

const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');

const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const price = parseFloat(button.dataset.price);
    cartCount++;
    cartTotal += price;

    cartCountEl.textContent = cartCount;
    cartTotalEl.textContent = cartTotal.toFixed(2);
  });
}); 

    
//FAQ
/* Accordion */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

/* Entrance animation */
const animatedSections = document.querySelectorAll(".animate-on-scroll");

const showOnScroll = () => {
  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll); 

//blog
const blogArticles = {
    1: {
      title: "5 Styling Tips for Summer",
      body: "Summer fashion is all about comfort, confidence, and breathable fabrics. Choosing the right outfits can help you stay cool while still looking stylish.  Start by prioritizing lightweight materials such as cotton and linen, which allow airflow and reduce heat buildup. Neutral colors like white, beige, and pastel shades reflect sunlight and keep you cooler throughout the day.  Accessorizing is also important. Sunglasses, lightweight scarves, and minimal jewelry can elevate your look without adding unnecessary weight. Finally, choose comfortable footwear such as sandals or sneakers that are suitable for long walks and warm weather. Summer style is about simplicity—when you feel comfortable, you naturally look confident."
    },
    2: {
      title: "How to Choose Your Perfect Outfit",
      body: "Choosing the perfect outfit begins with understanding your personal style and the occasion you are dressing for. A great outfit should balance comfort, fit, and self-expression.  Always start with clothing that fits well. No matter how expensive an outfit is, poor fit can ruin the entire look. Tailored or well-fitted pieces instantly create a polished appearance.  Next, consider color coordination. Neutral base colors combined with a bold accent piece can make your outfit stand out without looking overwhelming. Finally, choose fabrics that match the environment—light fabrics for warm weather and layered textures for cooler conditions. Your outfit should make you feel confident, comfortable, and authentic. "
    },
    3: {
      title: "Top 10 Must-Have Accessories",
      body: "Accessories have the power to transform even the simplest outfit into a complete and stylish look. The right accessories add personality and elevate your fashion game. Essential accessories include a quality wristwatch, a versatile handbag, sunglasses, and a belt that complements your shoes. Jewelry such as necklaces, bracelets,or rings can add subtle elegance when used sparingly. Scarves and hats are also great for adding texture and color to your outfit, while practical items like wallets and backpacks can be both stylish and functional.  Remember, accessories should enhance your outfit—not overpower it. When chosen wisely, they become the finishing touch that defines your style. "
    }
  };

  
  const modal = document.getElementById("blogModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.querySelector(".modal .close");
  
  document.querySelectorAll(".read-more").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-article");
      modalTitle.textContent = blogArticles[id].title;
      modalBody.textContent = blogArticles[id].body;
      modal.style.display = "block";
    });
  });
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }); 
  
  //ANIMATE SECTIONS
  const animatedItems = document.querySelectorAll(".fade-item.animate");

  const animateOnScroll = () => {
    animatedItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
  
      if (rect.top < window.innerHeight - 80) {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 120);
      }
    });
  };
  
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll); 
  
  