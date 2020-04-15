const card = [
  {
    title: "5 Blogger You Need To Follow For Retro Fashion Inspiration",
    author: "BY HARLEY SPENCER",
    date: "FEBRUARY, 10 <sup>th</sup> 2016",
    content:
      "A great wardrobe isn’t built in a season - a few timeless pieces that have lasted the distance through many a sartorial phase are the cornerstone of every well-dressed woman’s closet. But knowing where to find that elusive classic piece, and more importantly, how to style it, is an art. Carrying off a retro look head-to-toe - even more so....",
  },
  {
    title: "How to Buy Vintage Clothing Theree Experts Give Their Tips",
    author: "BY PERMANENT STYLE",
    date: "OCTOBER, 16 <sup>th</sup> 2019",
    content:
      "Vintage clothing has become more and more popular over the past decade.  Underneath obvious markers like the launch of brands RRL, or artificially aged sneakers, men have been gradually buying into vintage because it’s authentic, because it’s a way to buy old styles that are suddenly trendy, and just as importantly, because it’s cheap....",
  },
  {
    title: "How to Wear Vintage Fashion",
    author: "BY SALLY DUN",
    date: "MARCH, 29 <sup>th</sup> 2019",
    content:
      "Wioleta Shaw is the pin-up star of our favourite Vintage and Retro Instagram account, @inthepurpleworld Her vintage-inspired outfits, hair and makeup fuse 1940s nostalgia with modern day fashion. We discovered Wioleta's 'Old World Styling' as the perfect canvas for our Quintessence Amber Jewellery Collection, which boasts a fusion of classic design, historic gemstones and modern metals....",
  },
];



const title = card.map((item) => item.title);
const date = card.map((item) => item.date);
const author = card.map((item) => item.author);
const content = card.map((item) => item.content);


title_one = () => {
  document.getElementById("title-one").innerHTML = title[0];
  document.getElementById("title-two").innerHTML = title[1];
  document.getElementById("title-three").innerHTML = title[2];
};

date_one = () => {
  document.getElementById("date-one").innerHTML = date[0];
  document.getElementById("date-two").innerHTML = date[1];
  document.getElementById("date-three").innerHTML = date[2];
};


author_one = () => {
    document.getElementById("author-one").innerHTML = author[0];
    document.getElementById("author-two").innerHTML = author[1];
    document.getElementById("author-three").innerHTML = author[2];
  };

content_one = () => {
    document.getElementById("content-one").innerHTML = content[0];
    document.getElementById("content-two").innerHTML = content[1];
    document.getElementById("content-three").innerHTML = content[2];
  };
  
//For Show Title
title_one();
//For Show Date
date_one();
//For Show Author 
author_one()
//For Show Content
content_one()

