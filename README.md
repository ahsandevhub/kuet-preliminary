# API Documentation

## Hosted Link

```
https://bitfest.ahsandevhub.com/
```

## Ingredients API

### 1. Get All Ingredients

- **Route:** `/api/ingredients`
- **Method:** `GET`
- **Sample Response:**

```json
[
  {
    "_id": "63f21b89e8f1b26a4d5c1234",
    "name": "Tomato",
    "quantity": "2 kg"
  },
  {
    "_id": "63f21b89e8f1b26a4d5c5678",
    "name": "Onion",
    "quantity": "1.5 kg"
  }
]
```

### 2. Add an Ingredient

- **Route:** `/api/ingredients`
- **Method:** `POST`
- **Sample Payload:**

```json
{
  "name": "Potato",
  "quantity": "3 kg"
}
```

- **Sample Response:**

```json
{
  "name": "Potato",
  "quantity": "3 kg",
  "_id": "6766da2ade8b0251fc52d851",
  "__v": 0
}
```

### 3. Update an Ingredient

- **Route:** `/api/ingredients/:id`
- **Method:** `PUT`
- **Sample Payload:**

```json
{
  "name": "Carrot",
  "quantity": "5 kg"
}
```

- **Sample Response:**

```json
{
  "_id": "6766cfc56671c38c2a0a5bb7",
  "name": "Carrot",
  "quantity": "5 kg"
}
```

### 4. Delete an Ingredient

- **Route:** `/api/ingredients/:id`
- **Method:** `DELETE`
- **Sample Response:**

```json
{
  "message": "Ingredient deleted"
}
```

## Recipes API

### 1. Get All Recipes

- **Route:** `/api/recipes`
- **Method:** `GET`
- **Sample Response:**

```json
[
  {
    "_id": "6766c4251513df624fcbbdc0",
    "name": "Tomato Soup",
    "ingredients": ["Tomato", "Onion", "Garlic", "Salt", "Pepper"],
    "instructions": "1. Chop the onions and tomatoes. 2. Sauté the onions in oil. 3. Add tomatoes and cook until soft. 4. Blend the mixture and season with salt and pepper.",
    "taste": "Savory",
    "cuisine": "Italian",
    "preparationTime": "30 minutes",
    "__v": 0
  }
]
```

### 2. Add a Recipe

- **Route:** `/api/recipes`
- **Method:** `POST`
- **Sample Payload:**

```json
{
  "name": "Vegetable Stir Fry",
  "ingredients": ["Carrot (1 kg)", "Potato (2 kg)", "Bell Pepper (500 g)"],
  "instructions": "Chop all vegetables and stir fry with spices.",
  "taste": "Spicy",
  "cuisine": "Asian",
  "preparationTime": "25 minutes"
}
```

- **Sample Response:**

```json
{
  "name": "Vegetable Stir Fry",
  "ingredients": ["Carrot (1 kg)", "Potato (2 kg)", "Bell Pepper (500 g)"],
  "instructions": "Chop all vegetables and stir fry with spices.",
  "taste": "Spicy",
  "cuisine": "Asian",
  "preparationTime": "25 minutes",
  "_id": "6766dc8fde8b0251fc52d856",
  "__v": 0
}
```

## Chatbot API

### 1. Generate Recipe Based on Ingredients and User Preferences

- **Route:** `/api/chatbot`
- **Method:** `POST`
- **Sample Payload:**

```json
{
  "prompt": "I want something sweet and quick to prepare."
}
```

- **Sample Response:**

```json
{
  "message": "Recipe generated and saved",
  "userPrompt": "I want something sweet and quick to prepare.",
  "recipe": {
    "name": "Cheesy Garlic Tomato Chicken",
    "ingredients": [
      "4 cloves of garlic, minced",
      "2 tablespoons of butter",
      "200 grams of chicken breast, cut into small pieces",
      "100 grams of cheese, grated",
      "3 medium tomatoes, sliced"
    ],
    "instructions": "In a pan, melt the butter over medium heat. Add the minced garlic and sauté for a minute. Add the chicken pieces and cook until they are no longer pink. Place the tomato slices on top of the chicken. Cover and cook for 5-7 minutes until the tomatoes are soft. Sprinkle the grated cheese on top and let it melt. Serve hot.",
    "taste": "Savory with a hint of sweetness from the tomatoes",
    "cuisine": "Fusion",
    "preparationTime": "20 minutes",
    "_id": "6766dcb8de8b0251fc52d859",
    "__v": 0
  }
}
```
