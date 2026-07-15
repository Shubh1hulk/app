talentstage/
├── backend/                   # Node.js + Express + Prisma + PostgreSQL
│   ├── prisma/
│   │   └── schema.prisma      # DB Schema
│   ├── src/
│   │   ├── config/            # DB clients, environment configs
│   │   ├── controllers/       # Auth, Verification, Post logic
│   │   ├── middleware/        # JWT & Error handlers
│   │   ├── routes/            # API Route definitions
│   │   └── app.ts             # Express application root
│   ├── package.json
│   └── tsconfig.json
├── mobile/                    # React Native + Expo App (TypeScript)
│   ├── src/
│   │   ├── app/               # Expo Router file-based screens
│   │   │   ├── _layout.tsx    # Root Navigation & Context providers
│   │   │   ├── index.tsx      # Splash / Gateway route
│   │   │   └── (auth)/        # Auth sub-routes
│   │   ├── components/        # Reusable Glass-morphic UI components
│   │   └── store/             # Zustand state stores
│   ├── package.json
│   └── tailwind.config.js
└── ai-service/                # Python FastAPI + Biometrics Pipeline
    ├── app/
    │   ├── main.py            # FastAPI Entry point
    │   └── core/              # Anti-spoofing & scoring logic
    └── requirements.txt