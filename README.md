# 🚗 Wypożyczalnia Samochodów - CarRental PRO

Nowoczesny system zarządzania wypożyczalnią samochodów zbudowany w React i Node.js, wykorzystujący zasady programowania obiektowego (OOP).

## 🌟 Główne Funkcjonalności
- **Moduł Klienta**: Rejestracja, logowanie (JWT), zarządzanie profilem
- **Katalog Pojazdów**: Filtrowanie, szczegóły techniczne, kalendarz dostępności
- **System Rezerwacji**: Wybór daty, potwierdzenie, anulowanie
- **Panel Admina**: CRUD pojazdów, raporty finansowe

## 🛠️ Technologie
**Frontend**: 
```mermaid
graph LR
A[React 18] --> B[TypeScript]
A --> C[Vite]
A --> D[React Router 6]

Backend:
pie 
title Stack Backendowy
"Node.js" : 45
"Express" : 30
"MongoDB" : 25


💻 Instalacja
# 1. Sklonuj repozytorium
git clone https://github.com/twoja_nazwa/car-rental-app.git
cd car-rental-app

# 2. Konfiguracja środowiska
cp .env.example .env
# Edytuj zmienne w .env

# 3. Uruchom serwery
cd server && npm install && npm start
cd ../client && npm install && npm run dev

🧩 Paradygmat Obiektowy w Projekcie
Kluczowe Implementacje OOP

// Abstrakcyjna klasa bazowa
abstract class BaseModel {
  constructor(
    public id: string = '',
    public createdAt: Date = new Date()
  ) {}
  
  abstract validate(): boolean;
}

// Dziedziczenie i hermetyzacja
class Car extends BaseModel {
  private _isAvailable: boolean;

  constructor(
    public brand: string,
    public pricePerDay: number
  ) {
    super();
  }

  // Polimorfizm
  validate(): boolean {
    return this.pricePerDay > 0 && this._isAvailable;
  }
}

// Kompozycja
class Reservation {
  constructor(
    public user: User,
    public car: Car,
    public dates: DateRange
  ) {}
}

Wzorce Projektowe
Factory Method: Tworzenie obiektów pojazdów
Singleton: Połączenie z bazą danych
Observer: System powiadomień

🚀 Plany Rozwoju
Najbliższe Cele

gantt
    title Roadmap 2024
    dateFormat  YYYY-MM-DD
    section Integracje
    System Płatności :done, 2024-03-01, 30d
    API Map :active, 2024-04-01, 45d
    section UI/UX
    Panel Admina :2024-05-01, 60d
    Mobile App :2024-06-01, 90d

Długoterminowe
Integracja AI do prognozowania popytu

System dynamicznego ustalania cen

Wsparcie dla wielu języków

📄 Licencja
MIT License
