# Futuristic Full-Stack Platform (Next.js + Firebase)

Production-grade scaffold with:
- Next.js 15 App Router + TypeScript
- TailwindCSS + glassmorphism UI system
- Framer Motion transitions
- shadcn-style reusable UI primitives
- Firebase Auth (phone OTP), Firestore, Storage
- Admin dashboard foundation

## Structure
/app /components /components/ui /lib /hooks /firebase /services /context /store /styles /public

## Authentication Architecture
Firebase Auth does not natively support phone+password as a built-in provider. This implementation uses:
1. Phone OTP verification with Firebase Auth.
2. Password hash storage (scrypt + unique salt) in Firestore user documents via secure server route.
3. Custom token issuance on successful phone/password login.

## Core Collections
- users
- posts
- messages
- notifications
- settings
