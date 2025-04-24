# 🚗 Wypożyczalnia Samochodów - CarRental PRO

Nowoczesny system zarządzania wypożyczalnią samochodów zbudowany w React i Node.js, wykorzystujący zasady programowania obiektowego (OOP).

## 🌟 Główne Funkcjonalności
- **Moduł Klienta**: Rejestracja, logowanie (JWT), zarządzanie profilem
- **Katalog Pojazdów**: Filtrowanie, szczegóły techniczne, kalendarz dostępności
- **System Rezerwacji**: Wybór daty, potwierdzenie, anulowanie
- **Panel Admina**: CRUD pojazdów, raporty finansowe

## 🛠️ Technologie
**Frontend**: React 18, TypeScript, Vite, React Router 6  
**Backend**: Node.js, Express, MongoDB  
**Narzędzia**: ESLint, Prettier, Git

## 💻 Instalacja
```bash
# 1. Sklonuj repozytorium
git clone https://github.com/twoja_nazwa/car-rental-app.git
cd car-rental-app

# 2. Konfiguracja środowiska
cp .env.example .env  # Edytuj zmienne w .env

# 3. Uruchom serwery
cd server && npm install && npm start
cd ../client && npm install && npm run dev

Wzorce Projektowe
Factory: Tworzenie obiektów pojazdów

Singleton: Połączenie z bazą danych

Observer: System powiadomień

🚀 Plany Rozwoju
Najbliższe Cele
Integracja z systemem płatności (Stripe/PayPal)

System ocen i recenzji

Panel administracyjny z dashboardem

Długoterminowe
Aplikacja mobilna (React Native)

Algorytmy dynamicznego ustalania cen

Integracja z systemami CRM

📄 Licencja
MIT License
