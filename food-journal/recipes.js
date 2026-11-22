/*
  Field Rations recipe log.

  To add a recipe, copy one of the objects below, paste it at the end of the
  list (mind the comma between entries), and fill it in. The page picks it up
  on its own: the card, the filters, the counters and the Recipe of the Week
  rotation all read from this list.

  Fields
    id          short, unique, lowercase, dashes only (used for the link #id)
    name        recipe title
    copycat     the takeout spot it stands in for
    blurb       one or two sentences in the journal's voice
    time        minutes, as a number
    serves      free text
    level       "Easy", "Medium" or "Weekend project"
    tags        any of the tags already used, or a new one
    ingredients list of strings
    steps       list of strings, in order
    notes       list of strings (field notes)
*/
window.FIELD_RATIONS = [
  {
    id: "harissa-chicken-bowls",
    name: "Lemon-Harissa Chicken Bowls with Lentils",
    copycat: "CAVA and Taziki's",
    blurb: "The build-your-own bowl, minus the line out the door. Make it once on Sunday and lunch is handled for two more days.",
    time: 50,
    serves: "3, plus 2 lunches",
    level: "Weekend project",
    tags: ["Meal prep", "Sheet pan", "Fakeout takeout"],
    ingredients: [
      "Chicken: 2 lb boneless skinless thighs, 3 tbsp olive oil, juice of 1 lemon, 3 garlic cloves minced, 1 to 2 tbsp harissa paste (or 1 tsp smoked paprika), 1 tsp cumin, 1 tsp dried oregano, 1 1/2 tsp salt",
      "Lentils: 1 cup dry green or brown lentils, 1 garlic clove, 1 bay leaf (optional), 1 tbsp olive oil, 1 tbsp red wine vinegar, salt",
      "Roasted vegetables: 2 zucchini, 2 bell peppers, 1/2 red onion, 2 tbsp olive oil, salt",
      "Hummus: 1 can chickpeas (drained, save 1/4 cup liquid), 1/4 cup tahini, juice of 1/2 lemon, 1 garlic clove, 2 tbsp olive oil, salt",
      "Tzatziki: 1 cup Greek yogurt, 1/2 cucumber grated and squeezed dry, 1 garlic clove, 1 tbsp lemon juice, 1 tbsp dill, salt",
      "Quick pickled onion: 1/2 red onion sliced thin, 1/4 cup red wine vinegar, pinch of salt",
      "To serve: mixed greens, 1/2 cucumber diced, 1 pint cherry tomatoes, feta, kalamata olives"
    ],
    steps: [
      "Whisk the oil, lemon, garlic, harissa, cumin, oregano and salt. Coat the chicken and let it sit 15 minutes (or marinate in the morning).",
      "Simmer the lentils with the garlic and bay leaf in plenty of salted water, 20 to 25 minutes, until tender but not mushy. Drain, then dress with olive oil and vinegar.",
      "Heat the oven to 425°F. Roast the chicken on one sheet pan and the vegetables on another, 20 to 25 minutes, until the chicken reaches 165°F. Broil the chicken 2 minutes for char.",
      "Blend the hummus until smooth, loosening with chickpea liquid. Stir the tzatziki. Toss the onion with vinegar and salt.",
      "Build bowls: greens, lentils, vegetables, sliced chicken, hummus, tzatziki, cucumber, tomatoes, feta, olives and pickled onion."
    ],
    notes: [
      "Pack the extra chicken and lentils in containers for lunches.",
      "Save the leftover tzatziki. It goes on the salmon and the turkey burgers too.",
      "Short on time? Store-bought hummus is allowed. Nobody is grading this."
    ]
  },
  {
    id: "ginger-garlic-shrimp",
    name: "Ginger Garlic Shrimp Stir-Fry over Cauliflower Rice",
    copycat: "your go-to stir-fry takeout",
    blurb: "Faster than the delivery driver. A hot pan and dry shrimp give it the restaurant sear.",
    time: 30,
    serves: "3",
    level: "Easy",
    tags: ["One pan", "Quick", "Fakeout takeout"],
    ingredients: [
      "1.25 lb large shrimp, peeled and deveined, patted dry",
      "12 oz broccoli florets",
      "1 bell pepper, sliced",
      "8 oz sugar snap peas",
      "3 green onions, whites and greens separated",
      "3 garlic cloves and 1 tbsp ginger, minced",
      "2 bags (12 oz each) frozen riced cauliflower",
      "2 tbsp avocado oil, divided",
      "Sauce: 3 tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tsp toasted sesame oil, 1 tsp honey, 1 tsp cornstarch, 3 tbsp water, red pepper flakes (optional)"
    ],
    steps: [
      "Whisk the sauce. Cook the cauliflower rice in a dry skillet over medium-high for 5 to 6 minutes so it stays fluffy. Season and keep warm.",
      "Heat 1 tbsp oil in a wok or large skillet over high. Sear the shrimp in one layer, 1 minute per side, then remove.",
      "Add the rest of the oil, the broccoli and 2 tbsp water. Cover 2 minutes to steam, then uncover and add the pepper and snap peas for 2 minutes.",
      "Add the garlic, ginger and green onion whites for 30 seconds.",
      "Return the shrimp, pour in the sauce and toss until glossy, about 1 minute. Top with the green onion greens and serve over the cauliflower rice."
    ],
    notes: [
      "Do not crowd the shrimp. Two batches beats one soggy pile.",
      "Extra hungry after practice? Serve it over brown rice."
    ]
  },
  {
    id: "sheet-pan-salmon",
    name: "Roasted Salmon, Green Beans and White Bean Salad",
    copycat: "Bonefish and Taziki's",
    blurb: "Looks like a date-night plate, takes one sheet pan. Mix the bean salad first and it does its own thing while the oven works.",
    time: 35,
    serves: "3",
    level: "Easy",
    tags: ["Sheet pan", "Quick"],
    ingredients: [
      "1.5 lb salmon fillet, cut into 3 portions",
      "12 oz green beans, trimmed",
      "1 pint cherry tomatoes",
      "3 tbsp olive oil, divided",
      "1 lemon (zest, juice and slices)",
      "1 tsp garlic powder, 1 tsp dried oregano, salt and pepper",
      "White bean salad: 1 can cannellini beans (rinsed), 1/4 red onion minced, 1/2 cup chopped parsley, 2 tbsp olive oil, 1 tbsp red wine vinegar, squeeze of lemon, salt and pepper"
    ],
    steps: [
      "Mix the bean salad first so it has time to marinate.",
      "Heat the oven to 425°F. Toss the green beans and tomatoes with 2 tbsp oil and salt on a sheet pan. Roast 10 minutes.",
      "Push the vegetables aside, add the salmon, brush with the remaining oil, and season with garlic powder, oregano, lemon zest, salt and pepper. Add the lemon slices.",
      "Roast 10 to 14 minutes, until the salmon flakes easily (145°F).",
      "Serve with the bean salad and a spoon of leftover tzatziki."
    ],
    notes: [
      "Leftover bean salad makes a solid lunch on its own.",
      "Salmon is done when it flakes with a fork. Overcooked salmon is chalk."
    ]
  },
  {
    id: "greek-turkey-burgers",
    name: "Greek Turkey Burgers in Lettuce Wraps",
    copycat: "Five Guys",
    blurb: "Burger night without the grease bag. Simple enough to make with a roommate and still have time for the game.",
    time: 30,
    serves: "3 to 4",
    level: "Easy",
    tags: ["Quick", "Skillet", "Dorm hack"],
    ingredients: [
      "1.25 lb 93% lean ground turkey",
      "1 small zucchini, grated and squeezed dry",
      "1/3 cup crumbled feta",
      "2 garlic cloves, minced",
      "1/4 cup chopped parsley",
      "1 tsp dried oregano, 3/4 tsp salt, 1/2 tsp pepper",
      "Butter lettuce leaves, sliced tomato, red onion, leftover tzatziki",
      "Greek salad: 1 cucumber, 1/2 pint cherry tomatoes, red onion, kalamata olives, feta, 2 tbsp olive oil, 1 tbsp red wine vinegar, oregano"
    ],
    steps: [
      "Mix the turkey, zucchini, feta, garlic, parsley, oregano, salt and pepper gently. Form 4 patties and press a thumbprint in the center of each.",
      "Cook in an oiled skillet or grill pan over medium-high, 4 to 5 minutes per side, until 165°F inside.",
      "Toss the Greek salad.",
      "Serve the patties in lettuce with tomato, onion and tzatziki."
    ],
    notes: [
      "The zucchini keeps lean turkey juicy. Do not skip squeezing it.",
      "Dorm hack: a countertop electric grill or skillet works fine for the patties.",
      "Want a bun? A thin whole-wheat one does the job."
    ]
  },
  {
    id: "almond-parmesan-tenders",
    name: "Almond-Parmesan Chicken Tenders with Roasted Broccoli",
    copycat: "Raising Cane's",
    blurb: "Tender night at home, crunchy coating and all. The dipping sauce is the real star, so make extra.",
    time: 40,
    serves: "3",
    level: "Medium",
    tags: ["Sheet pan", "Air fryer", "Dorm hack", "Fakeout takeout"],
    ingredients: [
      "1.5 lb chicken tenderloins, patted dry",
      "1 cup almond flour",
      "1/2 cup finely grated Parmesan",
      "1 tsp smoked paprika, 1 tsp garlic powder, 3/4 tsp salt, 1/2 tsp pepper",
      "2 eggs, beaten",
      "Olive oil spray or 2 tbsp avocado oil",
      "1.5 lb broccoli florets, 2 tbsp olive oil, salt, red pepper flakes, lemon",
      "Dipping sauce: 1/2 cup Greek yogurt, 1 tbsp Dijon, 1 tsp hot sauce, 1/2 tsp garlic powder, lots of black pepper, squeeze of lemon"
    ],
    steps: [
      "Heat the oven to 425°F (or the air fryer to 400°F). Line a sheet pan with parchment and set a rack on it if you have one.",
      "Mix the almond flour, Parmesan and seasonings. Dip each tender in egg, then press firmly into the coating.",
      "Lay the tenders on the rack and spray or drizzle with oil. Bake 15 to 18 minutes (air fryer 10 to 12), flipping once, until golden and 165°F.",
      "Toss the broccoli with oil and salt and roast on a second pan at the same time, 18 to 20 minutes. Finish with lemon and pepper flakes.",
      "Stir the sauce ingredients together and serve."
    ],
    notes: [
      "Almond flour browns fast. Check at 12 minutes.",
      "Dorm hack: the air fryer version works great if there is no oven nearby."
    ]
  }
];

/*
  Shopping list for all five recipes above, with the total to buy for the week.
  Oils, vinegars, sauces and spices live in FIELD_PANTRY below.
*/
window.FIELD_SHOPPING = [
  "Lemons, 4",
  "Garlic, 2 heads",
  "English cucumbers, 2",
  "Cherry tomatoes, 3 pints",
  "Large slicing tomato, 1",
  "Red onions, 2",
  "Green onions, 1 bunch",
  "Zucchini, 3",
  "Bell peppers, 3, any color",
  "Broccoli florets, 2 1/4 lb",
  "Green beans, 12 oz",
  "Mixed greens or baby spinach, one 5 oz bag",
  "Flat-leaf parsley, 1 bunch",
  "Fresh ginger, 1 small piece",
  "Butter lettuce, 1 head",
  "Sugar snap peas, 8 oz",
  "Fresh dill, 1 small bunch (or 1 tsp dried)",
  "Boneless skinless chicken thighs, 2 lb",
  "Chicken tenderloins, 1 1/2 lb",
  "93% lean ground turkey, 1 1/4 lb",
  "Salmon fillet, 1 1/2 lb",
  "Frozen large shrimp, peeled and deveined, 1 1/4 lb",
  "Frozen riced cauliflower, 2 bags (12 oz each)",
  "Plain 2% Greek yogurt, one 16 oz tub",
  "Eggs, 2",
  "Parmesan wedge, about 3 oz",
  "Greek feta in brine, 8 oz",
  "Kalamata olives, 1 small jar",
  "Chickpeas, one 15 oz can",
  "Cannellini beans, one 15 oz can",
  "Green or brown lentils, 1 lb bag",
  "Almond flour, 1 lb bag",
  "Tahini, 1 small jar",
  "Mild harissa paste, 1 small jar (optional)",
  "Parchment paper",
  "Whole-wheat pita or thin whole-wheat buns (optional)",
  "Brown rice (optional)"
];

window.FIELD_PANTRY = [
  "Olive oil and avocado oil",
  "Low-sodium soy sauce, toasted sesame oil, rice vinegar, red wine vinegar",
  "Dijon mustard, hot sauce, honey, cornstarch",
  "Dried oregano, ground cumin, smoked paprika, garlic powder, red pepper flakes",
  "Canned chickpeas and cannellini beans, a bag of lentils",
  "Salt and black pepper"
];
