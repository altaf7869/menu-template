const menuData = [
  {
    "category": "starter",
    "items": [
      { "name": "Amdavadi Tandoori", "half": 220, "full": 400 },
      { "name": "Pathani Tandoori", "half": 230, "full": 450 },
      { "name": "Afghani Tandoori", "half": 250, "full": 480 },
      { "name": "Pahadi Tandoori", "half": 250, "full": 480 },
      { "name": "Malai Tandoori", "half": 330, "full": 600 },
      { "name": "SP. Matka Chicken", "half": 330, "full": null },
      { "name": "Red Tikka", "half": null, "full": 140 },
      { "name": "Mumtaj Golden Tikka", "half": null, "full": 150 },
      { "name": "Green Tikka", "half": null, "full": 160 },
      { "name": "Malai Tikka", "half": null, "full": 300 },
      { "name": "Apple Tikka", "half": null, "full": 280 },
      { "name": "Pahadi Tikka", "half": null, "full": 160 },
      { "name": "Sizler Tikka", "half": null, "full": 260 },
      { "name": "Amdavadi Leg", "half": 140, "full": null },
      { "name": "Pathani Leg", "half": 150, "full": null },
      { "name": "Afghani Leg", "half": 150, "full": null },
      { "name": "Pahadi Leg", "half": 160, "full": null },
      { "name": "Winter Leg", "half": 260, "full": null },
      { "name": "SS SP. Leg", "half": 240, "full": null },
      { "name": "Malai Leg", "half": 280, "full": null },
      { "name": "Badshah Fish", "half": null, "full": 350 }
    ]
  },
  {
    "category": "chinese",
    "items": [
      { "name": "Chicken Dominos Dry", "half": null, "full": 280 },
      { "name": "Chicken Kurkure", "half": null, "full": 230 },
      { "name": "Chicken Lolipop", "half": null, "full": 180 }
    ]
  },
  {
    "category": "tawamaincourse",
    "items": [
      { "name": "Chicken Laziz", "half": 230, "full": 420 },
      { "name": "Chicken Bhuna", "half": 180, "full": 350 },
      { "name": "Chicken Angara", "half": 200, "full": 380 },
      { "name": "Chicken Angara B.L", "half": 250, "full": 480 },
      { "name": "Butter Chicken", "half": 180, "full": 340 },
      { "name": "AMD Tawa Fry", "half": 190, "full": null },
      { "name": "Chicken Masala", "half": 120, "full": 220 },
      { "name": "Kolhapuri Chicken", "half": 260, "full": 500 },
      { "name": "Chicken HaraBhara", "half": 160, "full": 300 },
      { "name": "Chicken Green", "half": 170, "full": 320 },
      { "name": "Chicken Handi", "half": 180, "full": 350 },
      { "name": "Chicken Kadai", "half": 180, "full": 350 },
      { "name": "Chicken Hangama", "half": 210, "full": 400 },
      { "name": "Chicken Chatpata", "half": 170, "full": 320 },
      { "name": "Chicken Kashmiri B.L", "half": 190, "full": 360 },
      { "name": "Chicken Bombay Tikka", "half": null, "full": 360 },
      { "name": "Chicken Amrin", "half": 220, "full": 400 },
      { "name": "Chicken Lajawab B.L", "half": 230, "full": 420 },
      { "name": "Chicken Mumtaj", "half": 260, "full": 500 },
      { "name": "Chicken Mumtaj B.L", "half": 280, "full": 530 },
      { "name": "Chicken Kasuri B.L", "half": 220, "full": 400 },
      { "name": "Chicken Patiyala", "half": null, "full": 350 },
      { "name": "Chicken Nawabi B.L", "half": 260, "full": 500 },
      { "name": "Chicken Ajmeri B.L", "half": 220, "full": 400 },
      { "name": "Chicken Dilkhus", "half": 220, "full": 400 },
      { "name": "Chicken Anguri", "half": null, "full": 350 },
      { "name": "Lemon Chicken", "half": 250, "full": 450 },
      { "name": "Hydrabadi Chicken", "half": 200, "full": 380 },
      { "name": "Lasaniya Chicken", "half": 180, "full": 350 },
      { "name": "Chicken Nargis", "half": 220, "full": 400 },
      { "name": "Chicken Tikka Masala", "half": 180, "full": 350 },
      { "name": "Chicken Tikka Masala", "half": null, "full": 520 },
      { "name": "Chicken Dhamaka", "half": null, "full": 520 },
      { "name": "S S Kitchen Special", "half": null, "full": 550 },
      { "name": "Chicken Amrin Special", "half": null, "full": 250 },
      { "name": "Chicken Pakiza", "half": null, "full": 499 },
      { "name": "Chicken Dabba Gous", "half": null, "full": 550 },
      { "name": "Chicken Changezi", "half": null, "full": 490 }
    ]
  },
   {
    "category": "mutton",
    "items": [
      { "name": "Mutton Laziz", "half": 270, "full": 540 },
      { "name": "Mutton Nawabi", "half": 350, "full": 680 },
      { "name": "Mutton Pakiza", "half": null, "full": 600 },
      { "name": "Hydrabadi Mutton", "half": 350, "full": 680 },
      { "name": "Mutton Masala", "half": 220, "full": 420 },
      { "name": "Mutton Dabba Gous", "half": 300, "full": 600 },
      { "name": "Mutton Handi", "half": 250, "full": 500 },
      { "name": "Mutton Kadai", "half": 250, "full": 500 },
      { "name": "Mutton Angara", "half": 320, "full": 620 },
      { "name": "Saudi Mutton", "half": 400, "full": 800 },
      { "name": "Bheja Fry", "half": null, "full": 180 },
      { "name": "Kali Mari Bheja", "half": 150, "full": null },
      { "name": "Gurda Kaleja", "half": 180, "full": null },
      { "name": "Darbari", "half": 350, "full": null }
    ]
  },
  {
    "category": "fish",
    "items": [
      { "name": "Fish Nariyeli", "half": null, "full": 250 },
      { "name": "Bornless Fish", "half": null, "full": 280 },
      { "name": "Fish Masala", "half": null, "full": 250 },
      { "name": "Fish Fry", "half": null, "full": 200 },
      { "name": "Zinga Fry", "half": 140, "full": 280 },
      { "name": "Zinga Fry", "half": 150, "full": 300 },
      { "name": "Fish Bornless Masala", "half": null, "full": 340 }
    ]
  },
  {
    "category": "roti",
    "items": [
      { "name": "Chapati Roti", "price": 10 },
      { "name": "Chapati Butter", "price": 15 },
      { "name": "Tandoori", "price": 15 },
      { "name": "Tandoori Butter", "price": 20 },
      { "name": "Naan", "price": 50 },
      { "name": "Butter Naan", "price": 60 },
      { "name": "Garlic Naan", "price": 70 },
      { "name": "Bullet Naan", "price": 90 },
      { "name": "Cheese Naan", "price": 100 },
      { "name": "Lachha Paratha", "price": 40 },
      { "name": "Kulcha Paratha", "price": 50 },
      { "name": "Water Bottle", "price": 20 },
      { "name": "Soft Drink", "price": 20 }
    ]
  },
  {
    "category": "papad",
    "items": [
      { "name": "Fry Papad", "price": 15 },
      { "name": "Roasted Papad", "price": 10 },
      { "name": "Masala Papad", "price": 10 },
      { "name": "Laziz Papad", "price": 90 }
    ]
  },
  {
    "category": "rice",
    "items": [
      { "name": "Matka Biriyani", "half": null, "full": 350 },
      { "name": "Tawa Biriyani", "half": 120, "full": 180 },
      { "name": "Tikka Biriyani", "half": 140, "full": 200 },
      { "name": "S S Special Rice", "half": null, "full": 350 },
      { "name": "Masala Rice", "half": 70, "full": 140 },
      { "name": "Dilruba Rice", "half": null, "full": 450 },
      { "name": "Jira Rice", "half": 60, "full": 120 },
      { "name": "Plain Rice", "half": 50, "full": 100 },
      { "name": "Zinga Rice", "half": 180, "full": 350 },
      { "name": "Mutton Bhuna Rice", "half": 200, "full": 400 }
    ]
  }
 
]
