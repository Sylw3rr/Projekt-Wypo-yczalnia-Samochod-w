# Projekt Wypożyczalnia Samochodow
Semestr letni 24/25, Grupa 2, Patryk Sylwerski, Oktawian Radziszewski, Filip Wawrysiewicz
# CarRentalApp - Wypożyczalnia Samochodów (React + OOP)

Aplikacja webowa umożliwiająca wypożyczanie samochodów, zbudowana w React z wykorzystaniem zasad programowania obiektowego (OOP). Projekt obejmuje zarówno interfejs użytkownika, jak i logikę backendową.

## 🚀 Funkcjonalności

### 1. **Moduł Użytkownika**
- Rejestracja/logowanie (JWT)
- Profil użytkownika z historią wypożyczeń
- Role: Klient i Administrator

### 2. **Katalog Samochodów**
- Przeglądanie dostępnych samochodów z filtrami (marka, klasa, cena)
- Szczegóły auta (opis, zdjęcia, parametry techniczne)
- Sprawdzanie dostępności w kalendarzu

### 3. **System Rezerwacji**
- Rezerwacja online z wyborem daty i czasu
- Koszyk z podsumowaniem zamówienia
- Anulowanie rezerwacji (dla użytkownika)

### 4. **Płatności Online**
- Integracja z Stripe/PayPal
- Symulacja płatności (wersja dev)

### 5. **Panel Administracyjny**
- CRUD dla samochodów
- Zarządzanie rezerwacjami
- Raporty finansowe

## 🛠 Technologie
- **Frontend**: React (TypeScript) z komponentami klasowymi
- **Backend**: Node.js + Express
- **Baza Danych**: MongoDB + Mongoose (schematy OOP)
- **Autentykacja**: JWT
- **Stylowanie**: Bootstrap/Material-UI
- **Płatności**: Stripe API

## ⚙️ Konfiguracja

1. **Instalacja zależności**:
   ```bash
   cd client && npm install
   cd ../server && npm install
Zmienne środowiskowe (.env):

env
MONGODB_URI=mongodb://localhost:27017/carrental
JWT_SECRET=your_jwt_secret
STRIPE_KEY=your_stripe_key
Uruchomienie:

bash
# Serwer
cd server && npm start

# Klient
cd client && npm start
📁 Struktura Projektu (OOP)
Frontend (/client/src)
bash
components/
  ├── BaseComponent.tsx          # Abstrakcyjna klasa bazowa
  ├── User/
  │   ├── Login.tsx              # Dziedziczy z BaseComponent
  │   └── Profile.tsx
  └── Car/
      ├── CarList.tsx            # Metody klasowe + lifecycle
      └── CarDetails.tsx
Backend (/server/src)
bash
models/
  ├── User.ts                    # Klasa User z metodami
  ├── Car.ts                     # Klasa Car (np. checkAvailability())
  └── Reservation.ts             # Klasa Reservation (obliczenia dat)
