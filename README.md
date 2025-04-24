# Wypożyczalnia Samochodów 🚗

Nowoczesny system zarządzania wypożyczalnią samochodów zbudowany w React, TypeScript i zasadach programowania obiektowego (OOP).  

---

## 🌟 Funkcjonalności

### **Aktualne funkcje**
1. **Moduł użytkownika**  
   - Rejestracja/logowanie (JWT)  
   - Zarządzanie profilem  
   - Historia wypożyczeń  

2. **Katalog samochodów**  
   - Przeglądaj dostępne auta z filtrami (marka, cena)  
   - Szczegóły techniczne pojazdów  
   - Kalendarz dostępności w czasie rzeczywistym  

3. **System rezerwacji**  
   - Rezerwacja online z wyborem daty  
   - Podsumowanie i potwierdzenie rezerwacji  
   - Anulowanie rezerwacji  

4. **Panel administratora**  
   - Zarządzanie flotą (CRUD)  
   - Przegląd rezerwacji i użytkowników  
   - Generowanie raportów finansowych  

---

### **Planowane funkcje**  
✅ Integracja płatności (Stripe/PayPal)  
✅ System ocen i recenzji  
✅ Zaawansowane raporty i statystyki  
✅ Powiadomienia SMS/Email  

---

## 🛠️ Instalacja

### Wymagania wstępne:
- Node.js (v18.x+)
- npm (v9.x+)
- MongoDB (lokalnie lub Atlas)

### Kroki:
1. Sklonuj repozytorium:
   *bash*
   git clone https://github.com/twoja-nazwa/car-rental-app.git
   cd car-rental-app

2. Zainstaluj zależności:

*bash*
npm install

3. Konfiguracja środowiska:

Utwórz plik .env w głównym folderze:

*env*
VITE_API_URL=http://localhost:3001
MONGODB_URI=mongodb://localhost:27017/carrental
JWT_SECRET=tajny_klucz

4. Uruchom serwery:

*bash*
# Frontend (Vite)
npm run dev

# Backend (json-server) - w nowym terminalu
npx json-server --watch db.json --port 3001

🖥️ Technologie
Frontend: React 18, TypeScript, Vite
Stylowanie: CSS Modules, Bootstrap
Routing: react-router-dom v6
API: json-server (dev), Node.js + Express (prod)
Baza danych: MongoDB
Narzędzia: ESLint, Prettier

🗂️ Struktura projektu
src/
├── components/    # Komponenty React
├── models/        # Modele OOP (Car, User)
├── services/      # Serwisy API
├── core/          # Klasy bazowe
└── App.tsx        # Główny komponent

📜 Licencja
MIT License - Szczegóły
