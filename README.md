# 🎬 Movie Reviews App

A React.js application to **search, filter, and review movies/series** using the [OMDb API].  
It allows users to search movies, apply filters (genre, year, rating), view detailed information, and add their own star ratings (stored locally).

---

## 🚀 Features

- 🔎 **Search movies** by title using the OMDb API.  
- 🎭 **Filter movies** by:
  - Genre (Movie / Series / Episode)  
  - Release Year  
  - Rating (local user rating + IMDb rating)  
- 📝 **Movie details modal** with poster, plot, cast, director, and IMDb rating.  
- ⭐ **Custom rating system** with stars (saved in browser `localStorage`).  
- 📑 **Pagination** for browsing large movie lists.  
- 🎨 Responsive **UI with Tailwind CSS**.  
- 📌 **Fallback poster images** if movie posters are not available.  

---

## 🛠️ Tech Stack

- **React.js** (functional components + hooks)  
- **Tailwind CSS** (styling)  
- **FontAwesome** (icons)  
- **OMDb API** (movie database)  
- **LocalStorage** (persist user ratings)  

---

## 📂 Project Structure

    src/
    ├── components/
    │ ├── Header.jsx 
    │ ├── MovieList.jsx 
    │ ├── MovieCard.jsx 
    │ ├── MovieDetails.jsx 
    │ ├── Rating.jsx 
    ├── service/
    │ └── ServiceAPI.js # 
    ├── App.jsx 
    └── index.js 

## Usage

-**Search:** Type in the search bar to find movies

-**Filter:** Use the dropdown filters to refine your search by:

-**Genre:** (Movie, Series, Episodes)

-**Year:** (1995-2025)

-**Rating:** (1-5 stars)

-**View Details:** Click on any movie poster to see detailed information

-**Rate Movies:** Use the star rating system to rate movies (ratings are saved locally)

## ⚙️ Installation

 **Clone the repository**
   ```bash
   git clone https://github.com/arunjo96/Movie-Review.git

