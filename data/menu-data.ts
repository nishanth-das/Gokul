export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  tags: string[];
  sheet: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count?: number;
  sheet: number;
}

export const MENU_CATEGORIES: Category[] = [
  { id: "all", name: "All Dishes", icon: "✨", sheet: 1 },
  { id: "breakfast", name: "Breakfast (6-10 AM)", icon: "🍳", sheet: 2 },
  { id: "starters", name: "Tandoori Starters", icon: "🍢", sheet: 6 },
  { id: "paneer", name: "Paneer Specialities", icon: "🧀", sheet: 3 },
  { id: "vegetables", name: "Main Course Vegetables", icon: "🥗", sheet: 8 },
  { id: "dal-rice", name: "Dal & Rice Favourites", icon: "🍲", sheet: 5 },
  { id: "breads", name: "Roti, Naan & Kulcha", icon: "🫓", sheet: 7 },
  { id: "khichdi-raita", name: "Khichdi & Raita", icon: "🍚", sheet: 4 },
  { id: "chaat", name: "Chaat Bazaar (4 PM+)", icon: "🥘", sheet: 10 },
  { id: "beverages", name: "Beverages & Shakes", icon: "🍹", sheet: 11 },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- BREAKFAST (Page 2) ---
  { id: 1, name: "Chai", category: "breakfast", price: 20, desc: "Traditional aromatic Indian spiced milk tea freshly brewed to perfection.", tags: ["Hot", "Bestseller"], sheet: 2 },
  { id: 2, name: "Coffee", category: "breakfast", price: 30, desc: "Rich and invigorating freshly brewed filter style coffee.", tags: ["Hot"], sheet: 2 },
  { id: 3, name: "Poha Indori", category: "breakfast", price: 50, desc: "Authentic Indori flattened rice tempered with mustard, peanuts, fennel seeds, and crisp sev.", tags: ["Signature", "Bestseller"], sheet: 2 },
  { id: 4, name: "Milk", category: "breakfast", price: 50, desc: "Steaming hot fresh farm milk served sweetened or plain.", tags: ["Hot"], sheet: 2 },
  { id: 5, name: "Bread Butter", category: "breakfast", price: 50, desc: "Fresh soft bread slices served with generous creamy butter.", tags: ["Quick Bite"], sheet: 2 },
  { id: 6, name: "Upma", category: "breakfast", price: 50, desc: "Traditional South Indian roasted semolina tempered with curry leaves, mustard seeds and vegetables.", tags: ["Healthy"], sheet: 2 },
  { id: 7, name: "Plain Paratha with Dahi", category: "breakfast", price: 60, desc: "Golden pan-toasted layered flatbread served with fresh chilled sweetened dahi.", tags: ["Comfort"], sheet: 2 },
  { id: 8, name: "Aloo Pyaaz Paratha", category: "breakfast", price: 60, desc: "Whole wheat paratha generously stuffed with spiced potatoes and finely chopped onions.", tags: ["Popular"], sheet: 2 },
  { id: 9, name: "Sattu Paratha", category: "breakfast", price: 60, desc: "Traditional Bihari style paratha stuffed with roasted gram flour, ajwain, and rustic spices.", tags: ["Heritage"], sheet: 2 },
  { id: 10, name: "Bread Butter Jam", category: "breakfast", price: 70, desc: "Classic bread slices layered with rich butter and fruit jam.", tags: ["Kids Favourite"], sheet: 2 },
  { id: 11, name: "Bread Butter Toast", category: "breakfast", price: 70, desc: "Golden crisp toasted bread generously smothered with creamy butter.", tags: ["Crisp"], sheet: 2 },
  { id: 12, name: "Daal Bada", category: "breakfast", price: 80, desc: "Crispy fried lentil fritters seasoned with ginger and green chillies, served with coconut chutney.", tags: ["Crisp"], sheet: 2 },
  { id: 13, name: "Aloo Paratha", category: "breakfast", price: 80, desc: "Classic Punjabi paratha stuffed with hearty spiced mashed potatoes, roasted with golden ghee/butter.", tags: ["Bestseller"], sheet: 2 },
  { id: 14, name: "Paneer Paratha", category: "breakfast", price: 80, desc: "Flaky paratha loaded with freshly grated malai paneer, herbs, and mild ground spices.", tags: ["Chef's Pick"], sheet: 2 },
  { id: 15, name: "Puri Bhaji", category: "breakfast", price: 80, desc: "Fluffy golden deep-fried puris served with piping hot spiced potato bhaji gravy.", tags: ["Bestseller"], sheet: 2 },
  { id: 16, name: "Bedai Sabji", category: "breakfast", price: 80, desc: "Crisp puffed urad dal stuffed puris served with Agra-style zesty potato dubki curry.", tags: ["Heritage Special"], sheet: 2 },
  { id: 17, name: "Idli (2pc)", category: "breakfast", price: 80, desc: "Pillowy steamed rice and lentil cakes served with steaming hot sambar and fresh coconut chutney.", tags: ["South Indian", "Healthy"], sheet: 2 },
  { id: 18, name: "Medu Vada (2pc)", category: "breakfast", price: 80, desc: "Crisp, golden-brown lentil doughnuts served with aromatic sambar and authentic chutneys.", tags: ["South Indian", "Crisp"], sheet: 2 },
  { id: 19, name: "Mix Veg Uttapam", category: "breakfast", price: 80, desc: "Thick South Indian rice pancake topped with finely diced onions, tomatoes, coriander and green chillies.", tags: ["South Indian"], sheet: 2 },
  { id: 20, name: "Plain Dosa", category: "breakfast", price: 80, desc: "Paper-thin crispy golden fermented crepe served with vegetable sambar and coconut chutney.", tags: ["South Indian"], sheet: 2 },
  { id: 21, name: "Veg Grilled Sandwich", category: "breakfast", price: 99, desc: "Triple-layer toasted sandwich stuffed with seasoned cucumber, tomatoes, bell peppers and green chutney.", tags: ["Snack"], sheet: 2 },
  { id: 22, name: "Masala Dosa", category: "breakfast", price: 120, desc: "Signature crisp golden crepe rolled over spiced turmeric potato masala, served with sambar and chutney.", tags: ["Bestseller", "South Indian"], sheet: 2 },
  { id: 23, name: "Cheese Paratha", category: "breakfast", price: 120, desc: "Indulgent flatbread stuffed with molten processed cheese and gentle herbs.", tags: ["Kids Special"], sheet: 2 },
  { id: 24, name: "Paneer Dosa", category: "breakfast", price: 150, desc: "Crispy golden crepe generously spread with seasoned grated paneer and South Indian spice butter.", tags: ["Chef's Pick"], sheet: 2 },
  { id: 25, name: "Paneer Masala Dosa", category: "breakfast", price: 170, desc: "Deluxe crepe filled with spiced potato masala and rich crumbled paneer stuffing.", tags: ["Deluxe"], sheet: 2 },
  { id: 26, name: "Butter Masala Dosa", category: "breakfast", price: 170, desc: "Crisp dosa roasted in golden melted butter with aromatic spiced potato mash.", tags: ["Rich & Buttery"], sheet: 2 },
  { id: 27, name: "Cheese Masala Dosa", category: "breakfast", price: 180, desc: "Golden dosa layered with gooey melted cheese over aromatic potato masala.", tags: ["Indulgent"], sheet: 2 },
  { id: 28, name: "Veg Cheese Grilled Sandwich", category: "breakfast", price: 120, desc: "Golden-grilled sandwich loaded with diced garden veggies and bubbling melted cheese.", tags: ["Snack"], sheet: 2 },
  { id: 29, name: "Paneer Tandoori Sandwich", category: "breakfast", price: 149, desc: "Grilled club sandwich layered with smoky tandoor-spiced paneer chunks and mint mayonnaise.", tags: ["Chef's Pick"], sheet: 2 },

  // --- MAIN COURSE - PANEER SPECIALITIES (Page 3) ---
  { id: 30, name: "Paneer Butter Masala", category: "paneer", price: 299, desc: "Indian cottage cheese simmered in a rich, buttery red gravy with aromatic spices.", tags: ["Bestseller", "Royal"], sheet: 3 },
  { id: 31, name: "Kadhai Paneer", category: "paneer", price: 299, desc: "Indian cottage cheese, onion and capsicum tossed in aromatic kadhai spices and served in a rich brown gravy.", tags: ["Spiced", "Popular"], sheet: 3 },
  { id: 32, name: "Paneer Lababdar", category: "paneer", price: 299, desc: "Indian cottage cheese with julienne-cut onion, capsicum and tomato, simmered in a rich red gravy.", tags: ["Chef's Pick", "Velvety"], sheet: 3 },
  { id: 33, name: "Paneer Handi", category: "paneer", price: 299, desc: "Indian cottage cheese with capsicum and tomato gently simmered in a rich brown gravy in an earthen pot style.", tags: ["Heritage"], sheet: 3 },
  { id: 34, name: "Paneer Angara", category: "paneer", price: 299, desc: "Finger-cut cottage cheese with julienne-cut capsicum simmered in a robust spiced red gravy with smoky notes.", tags: ["Smoky & Spicy"], sheet: 3 },
  { id: 35, name: "Paneer Tufani", category: "paneer", price: 299, desc: "Indian cottage cheese simmered in a rich brown gravy, finished with a tempering of curry leaves and mustard seeds.", tags: ["Zesty Special"], sheet: 3 },
  { id: 36, name: "Paneer Patiala", category: "paneer", price: 299, desc: "Indian cottage cheese and papad stuffing enriched with dry fruits, served in a harmonious red-and-brown gravy.", tags: ["Royal Feast"], sheet: 3 },
  { id: 37, name: "Matar Paneer", category: "paneer", price: 299, desc: "Indian cottage cheese and green peas simmered in a rich combination of red and brown gravies.", tags: ["Classic Comfort"], sheet: 3 },
  { id: 38, name: "Shahi Paneer", category: "paneer", price: 299, desc: "Delicate Indian cottage cheese simmered in a rich white-and-red gravy with a subtle touch of sweetness and cashew paste.", tags: ["Mild & Creamy"], sheet: 3 },
  { id: 39, name: "Paneer Tikka Masala", category: "paneer", price: 299, desc: "Tandoor-roasted cottage cheese, onion, capsicum and tomato simmered in a robust, spiced red gravy.", tags: ["Tandoor Fusion", "Bestseller"], sheet: 3 },
  { id: 40, name: "Paneer Pasanda", category: "paneer", price: 299, desc: "Diamond-cut stuffed cottage cheese served in a rich, spicy, and subtly tangy red gravy.", tags: ["Gourmet"], sheet: 3 },
  { id: 41, name: "Paneer Kaleji", category: "paneer", price: 299, desc: "Golden cottage cheese served in a rich and aromatic brown gravy with intense whole spices.", tags: ["Speciality"], sheet: 3 },
  { id: 42, name: "Paneer Do Pyaaza", category: "paneer", price: 299, desc: "Indian cottage cheese paired with generous rich onion-based gravy prepared with double-cooked onions.", tags: ["Rich Onion Base"], sheet: 3 },

  // --- KHICHDI, RAITA & PAPAD (Page 4) ---
  { id: 43, name: "Roasted Papad", category: "khichdi-raita", price: 30, desc: "Crisp urad dal papad traditionally fire-roasted to perfection.", tags: ["Crisp"], sheet: 4 },
  { id: 44, name: "Fried Papad", category: "khichdi-raita", price: 40, desc: "Crisp papad delicately fried until golden and crunchy.", tags: ["Crisp"], sheet: 4 },
  { id: 45, name: "Masala Papad", category: "khichdi-raita", price: 50, desc: "Crisp papad seasoned with aromatic spices, finely diced onions, tomatoes, and fresh coriander for an elevated savoury finish.", tags: ["Popular Starter"], sheet: 4 },
  { id: 46, name: "Boondi Raita", category: "khichdi-raita", price: 99, desc: "Chilled whipped yoghurt blended with delicate crispy boondi and lightly seasoned with roasted cumin and mint.", tags: ["Cooling"], sheet: 4 },
  { id: 47, name: "Vegetable Raita", category: "khichdi-raita", price: 99, desc: "Chilled yoghurt combined with freshly diced cucumber, tomatoes, onions, and delicately seasoned spices.", tags: ["Cooling", "Healthy"], sheet: 4 },
  { id: 48, name: "Pineapple Raita", category: "khichdi-raita", price: 99, desc: "Creamy chilled yoghurt complemented by the delicate sweetness of fresh diced pineapple and roasted spices.", tags: ["Sweet & Savoury"], sheet: 4 },
  { id: 49, name: "Punjabi Khichdi", category: "khichdi-raita", price: 150, desc: "Comforting rice and yellow moong lentils slow-cooked in the traditional Punjabi style with fragrant desi ghee.", tags: ["Comfort Food", "Soulful"], sheet: 4 },
  { id: 50, name: "Masala Khichdi", category: "khichdi-raita", price: 150, desc: "Rice and lentils cooked together with aromatic warming spices for a hearty, flavourful finish.", tags: ["Spiced Comfort"], sheet: 4 },
  { id: 51, name: "Vegetable Khichdi", category: "khichdi-raita", price: 150, desc: "Rice and lentils slow-cooked with wholesome garden vegetables, green peas, carrots, and delicate spices.", tags: ["Wholesome"], sheet: 4 },
  { id: 52, name: "Cheese Masala Khichdi", category: "khichdi-raita", price: 150, desc: "Comforting rice and lentils cooked with aromatic spices and finished with generous melted cheese.", tags: ["Fusion Favourite"], sheet: 4 },
  { id: 53, name: "Punjabi Kadhi Pakoda", category: "khichdi-raita", price: 150, desc: "Soft gram-flour onion fritters simmered in a traditional tangy Punjabi yoghurt-based golden gravy tempered with fenugreek.", tags: ["Heritage Classic"], sheet: 4 },

  // --- DAL SPECIALITIES & RICE FAVOURITES (Page 5) ---
  { id: 54, name: "Litti Chokha", category: "dal-rice", price: 60, desc: "Traditional baked wheat dumplings stuffed with spiced sattu, served with rustic roasted brinjal and tomato chokha.", tags: ["Heritage Icon", "Bestseller"], sheet: 5 },
  { id: 55, name: "Chole Bhature", category: "dal-rice", price: 120, desc: "Fluffy, golden deep-fried bhature served with richly spiced Punjabi chickpea curry, pickled chillies and onions.", tags: ["Crowd Favourite", "Bestseller"], sheet: 5 },
  { id: 56, name: "Steamed Rice", category: "dal-rice", price: 120, desc: "Fluffy, fragrant aged long-grain basmati rice steamed to perfection.", tags: ["Staple"], sheet: 5 },
  { id: 57, name: "Dal Tadka", category: "dal-rice", price: 150, desc: "Yellow lentils finished with a fragrant smoking tempering of garlic, cumin, red chillies and aromatic spices.", tags: ["Popular"], sheet: 5 },
  { id: 58, name: "Dal Fry", category: "dal-rice", price: 150, desc: "Delicately spiced yellow lentils prepared in the traditional Indian style with tomatoes and onions.", tags: ["Classic"], sheet: 5 },
  { id: 59, name: "Jeera Rice", category: "dal-rice", price: 150, desc: "Fragrant basmati rice delicately tempered with crackling aromatic cumin seeds and desi ghee.", tags: ["Aromatic"], sheet: 5 },
  { id: 60, name: "Green Peas Pulao", category: "dal-rice", price: 199, desc: "Fragrant basmati rice cooked with tender sweet green peas and delicate aromatic whole spices.", tags: ["Fragrant"], sheet: 5 },
  { id: 61, name: "Vegetable Pulao", category: "dal-rice", price: 199, desc: "Basmati rice gently cooked with garden-fresh vegetables and aromatic whole spices.", tags: ["Wholesome"], sheet: 5 },
  { id: 62, name: "Dal Makhani", category: "dal-rice", price: 249, desc: "Slow-cooked whole black lentils and kidney beans simmered overnight, enriched with white butter and aromatic spices.", tags: ["Royal Signature", "Bestseller"], sheet: 5 },
  { id: 63, name: "Mixed Dal", category: "dal-rice", price: 249, desc: "A wholesome blend of five nutritious lentils, delicately seasoned and slow-cooked for a comforting finish.", tags: ["Panchmel Special"], sheet: 5 },
  { id: 64, name: "Kashmiri Pulao", category: "dal-rice", price: 299, desc: "Fragrant rice prepared in the regal Kashmiri style with dry fruits, saffron, and a delicate balance of sweet flavours.", tags: ["Royal Delicacy"], sheet: 5 },
  { id: 65, name: "Vegetable Masala Pulao", category: "dal-rice", price: 249, desc: "Fragrant basmati rice tossed with garden vegetables and aromatic Indian spices for a spicy touch.", tags: ["Spiced Rice"], sheet: 5 },
  { id: 66, name: "Vegetable Dum Biryani", category: "dal-rice", price: 280, desc: "Fragrant basmati rice layered with garden vegetables, mint, caramelized onions, and slow-dum aromatic spices.", tags: ["Chef's Pick", "Dum Cooked"], sheet: 5 },
  { id: 67, name: "Vegetable Hyderabadi Dum Biryani", category: "dal-rice", price: 320, desc: "Fragrant basmati rice and garden vegetables layered with aromatic spices in the authentic Nizami Hyderabadi style.", tags: ["Signature", "Royal Feast"], sheet: 5 },

  // --- TANDOORI STARTERS (Page 6) ---
  { id: 68, name: "Hara Bhara Kebab", category: "starters", price: 249, desc: "A delightful blend of fresh spinach, green peas, herbs and aromatic spices, delicately pan-fried to perfection.", tags: ["Healthy Starter", "Popular"], sheet: 6 },
  { id: 69, name: "Tandoori Aloo", category: "starters", price: 249, desc: "Scooped potatoes delicately seasoned with chatpata spices, roasted to smoky tenderness in the traditional clay tandoor.", tags: ["Tandoor Roasted"], sheet: 6 },
  { id: 70, name: "Vegetable Seekh Kebab", category: "starters", price: 249, desc: "Finely minced fresh vegetables seasoned with warming spices, skewered into kebabs, and roasted over glowing tandoor coals.", tags: ["Skewered"], sheet: 6 },
  { id: 71, name: "Raja Kebab", category: "starters", price: 249, desc: "Spiced potato-stuffed papad parcels, delicately rolled, prepared with royal herbs and fried until shatteringly crisp.", tags: ["Royal Novelty"], sheet: 6 },
  { id: 72, name: "Paneer Karari Kebab", category: "starters", price: 249, desc: "Fresh Indian cottage cheese batons wrapped in a crisp crushed papad coating and delicately fried golden.", tags: ["Ultra Crunchy"], sheet: 6 },
  { id: 73, name: "Paneer Tikka", category: "starters", price: 349, desc: "Indian cottage cheese chunks, onion and capsicum marinated in yoghurt and aromatic spices, chargrilled in the traditional tandoor.", tags: ["Bestseller", "Classic Tandoor"], sheet: 6 },
  { id: 74, name: "Achari Paneer Tikka", category: "starters", price: 349, desc: "Indian cottage cheese, onion and capsicum infused with pungent aromatic pickling spices and chargrilled in the tandoor.", tags: ["Tangy & Smoky"], sheet: 6 },
  { id: 75, name: "Tandoori Mushroom Tikka", category: "starters", price: 349, desc: "Plump fresh button mushrooms delicately marinated with aromatic tandoori spices and chargrilled to juicy perfection.", tags: ["Mushroom Special"], sheet: 6 },
  { id: 76, name: "Tandoori Paneer Malai Tikka", category: "starters", price: 349, desc: "Indian cottage cheese, onion and capsicum delicately marinated with processed cheese, cashew cream, and green cardamom, chargrilled gently.", tags: ["Mild & Velvety", "Chef's Pick"], sheet: 6 },
  { id: 77, name: "Tandoori Malai Chaap", category: "starters", price: 349, desc: "Tender soya chaap marinated with cashew cream, cheese and a sweet-and-savoury royal marinade, prepared to melt-in-mouth perfection.", tags: ["Signature", "Bestseller"], sheet: 6 },
  { id: 78, name: "Tandoori Chaap", category: "starters", price: 349, desc: "Spiced protein-rich soya chaap marinated with fiery tandoori seasonings, lemon and mustard oil, roasted in the clay tandoor.", tags: ["Smoky & Bold"], sheet: 6 },

  // --- ROTI, NAAN & KULCHA (Page 7) ---
  { id: 79, name: "Plain Roti", category: "breads", price: 30, desc: "Traditional whole wheat Indian flatbread, freshly rolled and baked in the tandoor to perfection.", tags: ["Healthy"], sheet: 7 },
  { id: 80, name: "Butter Roti", category: "breads", price: 40, desc: "Traditional Indian flatbread finished with a delicate brush of rich melting butter.", tags: ["Classic"], sheet: 7 },
  { id: 81, name: "Missi Roti", category: "breads", price: 50, desc: "A rustic Indian flatbread made with seasoned gram flour, whole wheat, ajwain and herbs, cooked to wholesome perfection.", tags: ["Rajasthani Classic"], sheet: 7 },
  { id: 82, name: "Plain Naan", category: "breads", price: 60, desc: "Soft and pillowy leavened Indian artisan bread, freshly slapped onto clay tandoor walls.", tags: ["Tandoori Bread"], sheet: 7 },
  { id: 83, name: "Butter Naan", category: "breads", price: 70, desc: "Soft tandoor-baked naan generously slathered with melted butter.", tags: ["Bestseller"], sheet: 7 },
  { id: 84, name: "Butter Kulcha", category: "breads", price: 70, desc: "Flaky, multi-layered leavened Indian bread baked in the tandoor and finished with butter and nigella seeds.", tags: ["Flaky"], sheet: 7 },
  { id: 85, name: "Lachha Paratha", category: "breads", price: 70, desc: "Multi-layered spiraled whole wheat Indian flatbread, delicately crisp on the outside and soft within.", tags: ["Layered"], sheet: 7 },
  { id: 86, name: "Garlic Naan", category: "breads", price: 99, desc: "Soft tandoor-baked artisanal naan infused with roasted aromatic minced garlic and fresh coriander.", tags: ["Aromatic", "Bestseller"], sheet: 7 },
  { id: 87, name: "Cheese Garlic Naan", category: "breads", price: 120, desc: "Soft garlic-infused naan generously loaded with gooey molten cheese and baked in the tandoor.", tags: ["Indulgent Special", "Chef's Pick"], sheet: 7 },

  // --- MAIN COURSE - VEGETABLES (Pages 8 & 9) ---
  { id: 88, name: "Chole Rice", category: "vegetables", price: 149, desc: "Spiced Amritsari chickpea curry served with fragrant, fluffy basmati rice and pickle.", tags: ["Bowl Meal"], sheet: 8 },
  { id: 89, name: "Rajma Rice", category: "vegetables", price: 149, desc: "Comforting slow-simmered Jammu rajma curry served with aromatic, fluffy basmati rice.", tags: ["Bowl Meal", "Comfort"], sheet: 8 },
  { id: 90, name: "Banarasi Dum Aloo", category: "vegetables", price: 249, desc: "Golden baby potatoes simmered in a rich, sweet-and-spicy gravy inspired by historic Banarasi royal kitchens.", tags: ["Heritage", "Regional Special"], sheet: 8 },
  { id: 91, name: "Dal Makhani with Jeera Rice", category: "vegetables", price: 249, desc: "Creamy slow-cooked black lentils enriched with butter served with fragrant jeera tempered rice.", tags: ["Combo Special"], sheet: 8 },
  { id: 92, name: "Chole Masala", category: "vegetables", price: 249, desc: "Slow-cooked chickpeas simmered in an onion-tomato gravy infused with roasted pindi spices.", tags: ["North Indian Classic"], sheet: 8 },
  { id: 93, name: "Rajma Masala", category: "vegetables", price: 249, desc: "Tender red kidney beans simmered in a rich, aromatic Indian masala with ginger and garlic.", tags: ["Comfort Classic"], sheet: 8 },
  { id: 94, name: "Paneer Bhurji", category: "vegetables", price: 249, desc: "Crumbled fresh cottage cheese vigorously tossed with diced onions, tomatoes, green chillies & aromatic spices.", tags: ["Tossed Special"], sheet: 8 },
  { id: 95, name: "Punjabi Thali Combo", category: "vegetables", price: 249, desc: "A hearty Punjabi royal spread featuring dal, seasonal sabzi, hot rotis, rice, salad, pickle & delicious accompaniments.", tags: ["Royal Thali", "Bestseller"], sheet: 8 },
  { id: 96, name: "Vegetable Kofta", category: "vegetables", price: 249, desc: "Handcrafted garden vegetable dumplings served in a delicately spiced, velvety yellow curry.", tags: ["Kofta Special"], sheet: 8 },
  { id: 97, name: "Paneer Kofta", category: "vegetables", price: 249, desc: "Delicate grated cottage cheese koftas served in a rich and spicy dual red-and-yellow gravy.", tags: ["Gourmet"], sheet: 8 },
  { id: 98, name: "Kaju Butter Masala", category: "vegetables", price: 349, desc: "Plump roasted whole cashews simmered in a rich, luxurious sweet-and-spicy royal red gravy.", tags: ["Royal Delicacy", "Rich"], sheet: 8 },
  { id: 99, name: "Cheese Butter Masala", category: "vegetables", price: 349, desc: "Cubed creamy cheese simmered in a rich red gravy enriched with butter, cream, and gentle whole spices.", tags: ["Cheese Special"], sheet: 8 },
  { id: 100, name: "Malai Kofta", category: "vegetables", price: 349, desc: "Delicate paneer and potato dumplings enriched with khoya and dry fruits, served in a creamy sweet-and-savoury white gravy.", tags: ["Mughlai Royal", "Bestseller"], sheet: 8 },
  { id: 101, name: "Cheese Anguri Kofta", category: "vegetables", price: 349, desc: "Bite-sized delicate cheese-stuffed koftas served in a rich, sweet-and-spicy velvety red gravy.", tags: ["Chef's Pick"], sheet: 8 },
  { id: 102, name: "Kashmiri Dum Aloo", category: "vegetables", price: 349, desc: "Golden baby potatoes simmered in a rich Kashmiri-style red gravy with fennel, ginger and a delicate balance of sweetness.", tags: ["Kashmiri Royal"], sheet: 8 },
  { id: 103, name: "Mix Vegetable", category: "vegetables", price: 249, desc: "A wholesome medley of fresh cauliflower, beans, carrots, green peas and cottage cheese in a rich brown gravy.", tags: ["Wholesome"], sheet: 9 },
  { id: 104, name: "Baby Corn Khada Masala", category: "vegetables", price: 249, desc: "Crisp tender baby corn prepared with aromatic whole spices and served in a rich yellow gravy.", tags: ["Whole Spices"], sheet: 9 },
  { id: 105, name: "Baby Corn Masala", category: "vegetables", price: 249, desc: "Tender baby corn simmered with aromatic ground spices in a harmonious red-and-yellow gravy.", tags: ["Corn Special"], sheet: 9 },
  { id: 106, name: "Vegetable Jaipuri", category: "vegetables", price: 249, desc: "Crushed roasted papad tossed with cabbage, green peas, capsicum, beans, and carrot, served in a spiced yellow gravy.", tags: ["Rajasthani Touch"], sheet: 9 },
  { id: 107, name: "Vegetable Kolhapuri", category: "vegetables", price: 349, desc: "Julienne-cut capsicum, cauliflower, beans, carrot and green peas simmered in a robust, fiery Kolhapuri red chilli gravy.", tags: ["Spicy & Bold"], sheet: 9 },
  { id: 108, name: "Kadhai Vegetable", category: "vegetables", price: 349, desc: "Onions, capsicum, and garden vegetables tossed with freshly pounded kadhai coriander and dry red chillies.", tags: ["Kadhai Tossed"], sheet: 9 },
  { id: 109, name: "Vegetable Makkhan Wala", category: "vegetables", price: 349, desc: "A wholesome combination of beans, carrot, cauliflower, and green peas simmered in a rich buttery tomato-cream gravy.", tags: ["Buttery Smooth"], sheet: 9 },
  { id: 110, name: "Vegetable Deewane Handi", category: "vegetables", price: 349, desc: "An assortment of broccoli, red and yellow bell peppers, baby corn, mushrooms, and peas in a spiced yellow gravy.", tags: ["Exotic Veggies"], sheet: 9 },
  { id: 111, name: "Mushroom Matar Masala", category: "vegetables", price: 349, desc: "Fresh button mushrooms and tender green peas simmered in a rich, spicy yellow gravy.", tags: ["Mushroom Special"], sheet: 9 },
  { id: 112, name: "Shaam Savera (Chef's Special)", category: "vegetables", price: 399, desc: "Gokul's Iconic Signature Dish: Velvety spinach dumplings stuffed with cottage cheese, served over an artistic duo of silky tomato makhani and golden spiced gravies.", tags: ["CHEF'S SIGNATURE", "Masterpiece", "Must Try"], sheet: 9 },

  // --- CHAAT (Page 10 - Available 4 PM Onwards) ---
  { id: 113, name: "Paani Puri (Atta)", category: "chaat", price: 30, desc: "Crispy whole wheat puris filled with spiced potato-chickpea mash and tangy mint-coriander water.", tags: ["Street Classic", "Bestseller"], sheet: 10 },
  { id: 114, name: "Samosa", category: "chaat", price: 40, desc: "Golden flaky pastry crust stuffed with cumin and coriander spiced potatoes and green peas.", tags: ["All-Time Classic"], sheet: 10 },
  { id: 115, name: "Kachori", category: "chaat", price: 40, desc: "Flaky deep-fried pastry filled with spiced yellow moong dal and asafoetida.", tags: ["Heritage Snack"], sheet: 10 },
  { id: 116, name: "Paani Puri (Suji)", category: "chaat", price: 40, desc: "Crisp semolina puris served with chilled zesty mint paani and tangy tamarind water.", tags: ["Crispy Suji"], sheet: 10 },
  { id: 117, name: "Ragra Masala Pani Puri", category: "chaat", price: 50, desc: "Warm spiced white pea ragra served inside crisp puris with sweet and sour flavoured waters.", tags: ["Hot & Tangy"], sheet: 10 },
  { id: 118, name: "Samosa Chaat", category: "chaat", price: 60, desc: "Crushed hot samosa smothered with spiced chickpea chole, sweetened dahi, tamarind chutney, and sev.", tags: ["Crowd Pleaser"], sheet: 10 },
  { id: 119, name: "Masala Puri", category: "chaat", price: 50, desc: "Crushed puris topped with hot spicy pea gravy, onions, coriander and crunchy sev.", tags: ["Spicy Treat"], sheet: 10 },
  { id: 120, name: "Bada Pao", category: "chaat", price: 50, desc: "Mumbai style golden spiced potato batata vada nestled inside a soft pav with garlic chutney and fried green chilli.", tags: ["Mumbai Iconic"], sheet: 10 },
  { id: 121, name: "Kachori Chaat", category: "chaat", price: 60, desc: "Crisp dal kachori loaded with spiced curd, tangy saunth chutney, spicy mint chutney and pomegranate.", tags: ["Tangy Delight"], sheet: 10 },
  { id: 122, name: "Saev Puri", category: "chaat", price: 60, desc: "Crisp flat papdis topped with potatoes, onions, three signature chutneys, and a mound of fine nylon sev.", tags: ["Crisp & Tangy"], sheet: 10 },
  { id: 123, name: "Nimbu Masala Puri", category: "chaat", price: 60, desc: "Puris seasoned with chatpata masala, freshly squeezed lime juice, and chopped herbs.", tags: ["Zesty"], sheet: 10 },
  { id: 124, name: "French Fries", category: "chaat", price: 60, desc: "Crispy golden fried potato batons seasoned with salt and chaat masala.", tags: ["Finger Food"], sheet: 10 },
  { id: 125, name: "Dahi Valle Papdi Chaat", category: "chaat", price: 80, desc: "Soft melt-in-mouth lentil bhallas paired with crisp papdis, sweet yoghurt, cumin and chutneys.", tags: ["Bestseller", "Chilled Delight"], sheet: 10 },
  { id: 126, name: "Dahi Vada", category: "chaat", price: 80, desc: "Soft urad dal dumplings soaked in rich chilled sweet curd, sprinkled with roasted cumin and chilli powder.", tags: ["Classic Comfort"], sheet: 10 },
  { id: 127, name: "Dahi Papdi Chaat", category: "chaat", price: 80, desc: "Crisp flour crisps layered with spiced potatoes, sweetened yoghurt, mint sauce and tamarind glaze.", tags: ["Chaat Special"], sheet: 10 },
  { id: 128, name: "Peanut Chaat", category: "chaat", price: 80, desc: "Roasted crunchy peanuts tossed with onions, tomatoes, green chillies, lemon juice and chatpata spices.", tags: ["Healthy Crunch"], sheet: 10 },
  { id: 129, name: "Chana Chaat", category: "chaat", price: 80, desc: "Boiled black chickpeas tossed with fresh tomatoes, cucumbers, green chillies and tangy lime dressing.", tags: ["Protein Rich"], sheet: 10 },
  { id: 130, name: "Dahi Puri", category: "chaat", price: 80, desc: "Crisp puris loaded with diced potato, sweet dahi, tangy chutneys and showered with sev.", tags: ["All-Time Hit"], sheet: 10 },
  { id: 131, name: "Bhel Puri", category: "chaat", price: 80, desc: "Light puffed rice tossed with sev, onions, tomatoes, raw mango and zesty tamarind and mint chutneys.", tags: ["Light Snack"], sheet: 10 },
  { id: 132, name: "Aloo Chole Tikki", category: "chaat", price: 80, desc: "Pan-crisped golden potato patties served over rich chickpea curry, dressed with yoghurt and chutneys.", tags: ["Hot & Hearty"], sheet: 10 },
  { id: 133, name: "Ragra Aloo Tikki", category: "chaat", price: 80, desc: "Crispy spiced aloo tikki topped with slow-simmered white pea ragra, onion, coriander and chutneys.", tags: ["Regional Special"], sheet: 10 },
  { id: 134, name: "Pav Bhaji", category: "chaat", price: 99, desc: "Spicy mashed mixed vegetable gravy cooked with loads of butter, served with two soft butter-toasted pavs.", tags: ["Bestseller", "Butter Loaded"], sheet: 10 },
  { id: 135, name: "Raj Kachori", category: "chaat", price: 99, desc: "The King of Chaats: Crisp giant golden kachori stuffed with sprouts, potatoes, dahi bhalla, curd, chutneys and ruby pomegranate seeds.", tags: ["ROYAL SIGNATURE", "Must Try"], sheet: 10 },
  { id: 136, name: "Peri Peri French Fries", category: "chaat", price: 99, desc: "Crisp potato fries dusted in fiery African bird's eye peri-peri seasoning.", tags: ["Spicy Snack"], sheet: 10 },
  { id: 137, name: "Laccha Katori Chaat", category: "chaat", price: 100, desc: "Intricate edible crispy potato nest basket filled with spiced sprouts, dahi, tangy chutneys and sev.", tags: ["Chef's Pick", "Artisanal"], sheet: 10 },
  { id: 138, name: "Paneer Chilla", category: "chaat", price: 100, desc: "Wholesome savoury gram-flour pancake stuffed with seasoned freshly grated cottage cheese and herbs.", tags: ["Healthy & Warm"], sheet: 10 },
  { id: 139, name: "Chilla Regular", category: "chaat", price: 100, desc: "Crisp, wholesome spiced moong or besan chilla served with tangy green and tamarind chutneys.", tags: ["Traditional"], sheet: 10 },
  { id: 140, name: "Cheese Nuggets", category: "chaat", price: 149, desc: "Golden fried crunchy bite-sized nuggets with a rich, molten cheese center.", tags: ["Kids Favourite"], sheet: 10 },

  // --- BEVERAGES & SHAKES (Page 11) ---
  { id: 141, name: "Butter Milk", category: "beverages", price: 40, desc: "Traditional churned curd spiced with roasted cumin, rock salt, ginger and fresh coriander.", tags: ["Digestive", "Cooling"], sheet: 11 },
  { id: 142, name: "Masala Butter Milk", category: "beverages", price: 50, desc: "Cooling spiced chaas infused with crushed mint, roasted hing, and green chillies.", tags: ["Spiced Cooling"], sheet: 11 },
  { id: 143, name: "Salted Lassi", category: "beverages", price: 60, desc: "Thick creamy churned yoghurt seasoned with roasted black salt and roasted cumin.", tags: ["Punjabi Classic"], sheet: 11 },
  { id: 144, name: "Sweet Lassi", category: "beverages", price: 70, desc: "Rich and luscious Punjabi sweet yoghurt beverage crowned with a layer of fresh malai.", tags: ["Bestseller", "Rich"], sheet: 11 },
  { id: 145, name: "Cold Coffee", category: "beverages", price: 70, desc: "Chilled blended coffee with milk, sugar and a frothy creamy crown.", tags: ["Chilled"], sheet: 11 },
  { id: 146, name: "Virgin Mojito", category: "beverages", price: 80, desc: "Refreshing mocktail of crushed fresh garden mint, lime wedges, simple syrup and sparkling soda.", tags: ["Refreshing Mocktail"], sheet: 11 },
  { id: 147, name: "Blue Lagoon", category: "beverages", price: 80, desc: "Vibrant ocean-blue citrus mocktail infused with blue curacao flavours, lemon and bubbly soda.", tags: ["Signature Mocktail"], sheet: 11 },
  { id: 148, name: "Cold Coffee (With Ice-Cream)", category: "beverages", price: 80, desc: "Thick velvety iced coffee crowned with a generous scoop of vanilla ice-cream.", tags: ["Deluxe Indulgence"], sheet: 11 },
  { id: 149, name: "Kit-Kat Shake", category: "beverages", price: 100, desc: "Decadent thick milkshake blended with crunchy Kit-Kat chocolate bars and chocolate drizzle.", tags: ["Chocolate Special"], sheet: 11 },
  { id: 150, name: "Oreo Shake", category: "beverages", price: 100, desc: "Creamy milkshake loaded with crushed Oreo cookies, chocolate sauce and vanilla cream.", tags: ["Cookies & Cream"], sheet: 11 },
  { id: 151, name: "Banana Shake", category: "beverages", price: 100, desc: "Wholesome, naturally sweet thick shake blended with ripe bananas and creamy milk.", tags: ["Healthy & Rich"], sheet: 11 },
];

export const RESTAURANT_CONFIG = {
  name: "Gokul Veg Restaurant",
  tagline: "Royal Vegetarian Dining & Chaat Confectionery",
  subtitle: "We Use Onion & Garlic | Jain Preparations Available",
  phone: "+91 8732-024422",
  phoneRaw: "918732024422",
  address: "Chitta Ranjan Road, Agartala, Tripura",
  deliveryTime: "20 - 30 Minutes",
  certifications: [
    { label: "ISO 9001:2015", desc: "Quality Management System Certified" },
    { label: "FSSAI License", desc: "Lic. No. 22526051001035" },
    { label: "100% Vegetarian", desc: "Finest Sourced Dairy & Desi Ghee" },
    { label: "Express Dispatch", desc: "Hot 20-30 Min City Delivery" },
  ],
  gallery: [
    { num: 1, title: "Cover & Credentials", desc: "ISO 9001:2015 & FSSAI certified identity with royal peacock insignia" },
    { num: 2, title: "Breakfast Delicacies", desc: "Fresh dosas, stuffed parathas, Indori poha & breakfast beverages" },
    { num: 3, title: "Paneer Specialities", desc: "13 royal cottage cheese preparations in fragrant slow-simmered gravies" },
    { num: 4, title: "Khichdi, Raita & Papad", desc: "Soulful Punjabi khichdis, cooling fruit raitas and crisp roasted papads" },
    { num: 5, title: "Dal & Basmati Favourites", desc: "Rich Dal Makhani, Litti Chokha, Chole Bhature and Hyderabadi Dum Biryani" },
    { num: 6, title: "Tandoori Starters", desc: "Clay tandoor chargrilled paneer tikkas, soya malai chaap & seekh kebabs" },
    { num: 7, title: "Artisanal Breads", desc: "Handcrafted butter naans, cheese garlic naans, kulchas & lachha parathas" },
    { num: 8, title: "Royal Curries & Thalis", desc: "Banarasi Dum Aloo, Kaju Butter Masala, Malai Kofta & Punjabi Thali" },
    { num: 9, title: "Chef's Special & Veggies", desc: "Signature Shaam Savera, Deewane Handi & Kolhapuri vegetables" },
    { num: 10, title: "Gourmet Chaat Bazaar", desc: "Iconic Raj Kachori, Dahi Bhalla, Pav Bhaji, Pani Puri & Laccha Katori" },
    { num: 11, title: "Beverages & Shakes", desc: "Churned lassis, cooling buttermilk, virgin mojitos & decadent thick shakes" },
  ],
};

