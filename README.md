# 🚗 Wypożyczalnia Samochodów

![GitHub repo size](https://img.shields.io/github/repo-size/Sylw3rr/Projekt-Wypo-yczalnia-Samochod-w)
![GitHub issues](https://img.shields.io/github/issues/Sylw3rr/Projekt-Wypo-yczalnia-Samochod-w)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Sylw3rr/Projekt-Wypo-yczalnia-Samochod-w)
![GitHub license](https://img.shields.io/github/license/Sylw3rr/Projekt-Wypo-yczalnia-Samochod-w)

> Nowoczesna aplikacja do zarządzania wypożyczalnią samochodów. Przeglądaj auta, rezerwuj online, zarządzaj flotą!

---

## 📚 Funkcje

- 🔎 Przeglądanie dostępnych samochodów
- 🛒 Rezerwacja pojazdu online
- 🛠️ Zarządzanie flotą w panelu administratora
- 🔒 Bezpieczne logowanie i autoryzacja (JWT)
- 📱 Responsywny interfejs (Bootstrap 5)

---

## 🛤️ Plany rozwoju

- 🔥 Wprowadzenie panelu administracyjnego do zarządzania użytkownikami i rezerwacjami
- 📅 Integracja kalendarza dostępności samochodów
- 🛡️ System powiadomień mailowych (rezerwacja / anulowanie)
- 📊 Rozbudowane statystyki wynajmu (Dashboard)
- 🌍 Wersja wielojęzyczna (PL / EN)
- 📱 Aplikacja mobilna (React Native)
- 🧠 Inteligentne rekomendacje samochodów (Machine Learning)
- 💳 Integracja systemu płatności online (Stripe / PayU)
- 🌟 Tryb ciemny (Dark Mode)
- 🚀 Hosting i pełne wdrożenie na Vercel / Render

## 🛠️ Technologie

| Frontend | Backend | Baza danych | Inne |
| :---: | :---: | :---: | :---: |
| React + Vite + TypeScript | Node.js + Express | MongoDB + Mongoose | JWT, bcrypt, Bootstrap |

---

## ⚙️ Instalacja lokalna

Aby uruchomić projekt lokalnie:

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/Sylw3rr/Projekt-Wypo-yczalnia-Samochod-w.git
```
2. Zainstaluj zależności
 ```bash
   cd client
   npm install
   cd ../server
   npm install
```
3. Utwórz plik .env w katalogu server/ i uzupełnij go następująco:
 ```ini
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
```
4. Uruchom backend:
 ```bash
   npm run dev
```
5. Uruchom frontend
 ```bash
   cd ../client
   npm run dev
```
## 🗂️ Struktura projektu
 ```bash
   /client    → Frontend aplikacji
   /server    → Backend + API + Baza danych
```
##📝 Licencja
Projekt udostępniony na licencji MIT.





   
